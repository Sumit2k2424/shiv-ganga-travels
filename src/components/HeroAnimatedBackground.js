'use client';
import { useEffect, useRef } from 'react';

/**
 * HeroAnimatedBackground — a self-contained, dependency-free WebGL layer that
 * renders a cinematic, procedural Himalayan sunrise behind the hero content.
 *
 * WHY RAW WEBGL (not react-three-fiber / three / postprocessing):
 *   The homepage is SEO/perf-critical. A single full-screen fragment shader
 *   delivers the multi-layer parallax mountains, volumetric fog, god rays,
 *   drifting clouds, floating dust and film-grain/vignette grade at ~15 KB with
 *   zero dependencies and no textures — comfortably 60 FPS, easy to scale down
 *   on weak hardware, and nothing to dispose beyond the GL context.
 *
 * PLACEMENT / SAFETY:
 *   Mounted absolutely (inset:0, pointer-events:none, aria-hidden) BETWEEN the
 *   hero photo and the navy readability scrims, so the scrims still darken it
 *   and text contrast is untouched. Loaded via next/dynamic({ssr:false}) so it
 *   never blocks SSR or LCP. If WebGL is missing or the user prefers reduced
 *   motion, it renders one still frame (or nothing) and the original photo shows
 *   through — no foreground behaviour changes either way.
 */

const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAG = `
precision highp float;
varying vec2 vUv;

uniform vec2  uRes;
uniform float uTime;
uniform vec2  uMouse;   // eased pointer, -1..1
uniform float uScroll;  // hero scroll progress, 0..1
uniform float uQual;    // 1.0 high, 0.0 low

/* ---------- palette (deep Himalayan blue → slate → sunrise gold) ---------- */
const vec3 SKY_TOP  = vec3(0.035, 0.075, 0.185);
const vec3 SKY_MID  = vec3(0.130, 0.185, 0.320);
const vec3 SKY_LOW  = vec3(0.560, 0.470, 0.470);
const vec3 GOLD     = vec3(0.980, 0.760, 0.470);
const vec3 SUN      = vec3(1.000, 0.900, 0.680);
const vec3 MIST     = vec3(0.820, 0.880, 0.955);
const vec3 ICE      = vec3(0.680, 0.800, 0.910);
const vec3 SNOW     = vec3(0.930, 0.960, 1.000);
const vec3 EMERALD  = vec3(0.130, 0.320, 0.290);

/* ---------- noise ---------- */
float hash(vec2 p){
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  float a = hash(i), b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 6; i++){
    v += a * noise(p);
    p = p * 2.02 + 11.3;
    a *= 0.5;
    if (i >= 2 && uQual < 0.5) break; // fewer octaves on weak hardware
  }
  return v;
}

/* ---------- one parallax mountain ridge ---------- */
vec3 ridge(vec3 col, vec2 uv, float aspect, float baseH, float amp,
           float freq, float seed, vec3 near, vec3 far, float depth,
           float parX, float parY, float snowT){
  float x = uv.x * aspect + parX;
  float h = baseH + parY + amp * (fbm(vec2(x * freq, seed)) - 0.5)
                        + amp * 0.4 * (fbm(vec2(x * freq * 2.7, seed + 5.0)) - 0.5);
  float aa = 1.5 / uRes.y;
  float m = smoothstep(h + aa, h - aa, uv.y);          // 1 below the ridge line
  if (m <= 0.0015) return col;
  float shade = smoothstep(baseH - amp, h, uv.y);      // darker toward the base
  vec3 body = mix(near * 0.82, near, shade);
  body = mix(body, far, depth);                        // atmospheric perspective
  float snow = smoothstep(h - snowT, h - snowT * 0.15, uv.y);
  body = mix(body, SNOW, snow * (0.85 - depth * 0.45));
  return mix(col, body, m);
}

void main(){
  vec2 uv = vUv;
  float aspect = uRes.x / uRes.y;

  /* cinematic camera: micro-breathing + drone-hover drift + tiny scroll push */
  vec2 cam = vec2(
    sin(uTime * 0.11) * 0.006 + uMouse.x * 0.010,
    cos(uTime * 0.09) * 0.004 + uMouse.y * 0.008 - uScroll * 0.05
  );
  uv += cam;

  /* ---------- sky + atmospheric scattering ---------- */
  vec3 col = mix(SKY_MID, SKY_TOP, smoothstep(0.42, 1.0, uv.y));
  col = mix(col, SKY_LOW, smoothstep(0.55, 0.30, uv.y));

  vec2 sunPos = vec2(0.30 + uMouse.x * 0.02, 0.62 + uScroll * 0.05);
  float sd = distance(vec2(uv.x * aspect, uv.y), vec2(sunPos.x * aspect, sunPos.y));

  float horizonGlow = smoothstep(0.62, 0.30, uv.y);
  col = mix(col, GOLD, horizonGlow * 0.55 * smoothstep(1.1, 0.1, sd));
  col += SUN * exp(-sd * 3.2) * 0.45;                  // soft bloom around the sun
  col += SUN * exp(-sd * 12.0) * 0.9;                  // core

  /* volumetric god rays sweeping from the sun */
  vec2 rd = vec2(uv.x * aspect, uv.y) - vec2(sunPos.x * aspect, sunPos.y);
  float ang = atan(rd.y, rd.x);
  float rays = fbm(vec2(ang * 3.5 + uTime * 0.025, 1.7))
             * fbm(vec2(ang * 8.0 - uTime * 0.015, 4.2));
  col += GOLD * rays * smoothstep(1.0, 0.05, sd) * 0.30;

  /* thin drifting high clouds */
  float cloudRegion = smoothstep(0.52, 0.95, uv.y);
  float cl = fbm(vec2(uv.x * 1.6 - uTime * 0.010, uv.y * 2.2 + 3.0));
  col = mix(col, MIST, cloudRegion * smoothstep(0.55, 0.92, cl) * 0.35);

  /* ---------- mountain depth layers (far → near) ---------- */
  float mx = uMouse.x, sc = uScroll;
  // far range
  col = ridge(col, uv, aspect, 0.470, 0.10, 0.55, 21.0, ICE, MIST,
              0.72, mx * 0.012 + sc * 0.02, mx * 0.0, 0.045);
  col = ridge(col, uv, aspect, 0.430, 0.13, 0.75, 47.0, mix(ICE, SKY_MID, 0.4),
              MIST, 0.55, mx * 0.020 + sc * 0.035, uMouse.y * 0.004, 0.055);
  // mid range
  col = ridge(col, uv, aspect, 0.380, 0.17, 1.05, 73.0, mix(SKY_MID, EMERALD, 0.25),
              ICE, 0.34, mx * 0.032 + sc * 0.06, uMouse.y * 0.007, 0.06);
  // near range
  col = ridge(col, uv, aspect, 0.310, 0.22, 1.45, 95.0, SKY_TOP * 1.4,
              mix(SKY_MID, EMERALD, 0.35), 0.16, mx * 0.050 + sc * 0.10,
              uMouse.y * 0.010, 0.05);

  /* ---------- rising valley mist between ridges ---------- */
  float band = smoothstep(0.22, 0.40, uv.y) * (1.0 - smoothstep(0.40, 0.60, uv.y));
  vec2 mq = vec2(uv.x * 2.2 - uTime * 0.020, uv.y * 3.2 + uTime * 0.012);
  float mistN = fbm(mq + fbm(mq));
  col = mix(col, MIST, band * smoothstep(0.42, 0.95, mistN) * 0.6);

  /* depth haze toward the horizon */
  col = mix(col, MIST, smoothstep(0.44, 0.34, uv.y) * 0.18);

  /* ---------- floating atmospheric particles (snow dust / pollen) ---------- */
  float p = 0.0;
  for (int k = 0; k < 3; k++){
    float fk = float(k);
    float scale = 26.0 + fk * 34.0;
    float speed = 0.020 + fk * 0.016;
    vec2 g = vec2(uv.x * aspect, uv.y) * scale;
    g.y += uTime * speed * scale;
    g.x += sin(uTime * 0.2 + floor(g.y) + fk) * 0.6 + uMouse.x * (1.0 + fk);
    vec2 id = floor(g), f = fract(g);
    vec2 c = vec2(hash(id + fk * 3.1), hash(id + fk * 7.7 + 1.0));
    float d = length(f - c);
    float on = step(0.86 - fk * 0.06, hash(id + fk * 13.0));
    p += smoothstep(0.14 + fk * 0.05, 0.0, d) * on * (0.5 - fk * 0.12);
    if (k >= 1 && uQual < 0.5) break;
  }
  col += MIST * p * 0.6;

  /* ---------- grade: bloom lift, film grain, vignette ---------- */
  col += pow(max(col - 0.75, 0.0), vec3(1.4)) * 0.6;   // gentle highlight bloom
  float grain = (hash(uv * uRes + uTime) - 0.5) * 0.045;
  col += grain;
  vec2 vc = uv - 0.5; vc.x *= aspect;
  col *= 1.0 - dot(vc, vc) * 0.55;                      // soft vignette

  col = clamp(col, 0.0, 1.0);
  gl_FragColor = vec4(col, 1.0);
}`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    // Fail silently in production — the hero photo remains as the fallback.
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('HeroAnimatedBackground shader error:', gl.getShaderInfoLog(s));
    }
    gl.deleteShader(s);
    return null;
  }
  return s;
}

export default function HeroAnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const section = canvas.parentElement; // the hero <section>

    const gl =
      canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: false, powerPreference: 'high-performance' }) ||
      canvas.getContext('experimental-webgl');
    if (!gl) return; // no WebGL → photo fallback

    // ── device / preference gating ──────────────────────────────────────
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowEnd =
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
      window.matchMedia('(pointer: coarse)').matches;
    const quality = lowEnd ? 0.0 : 1.0;
    const dprCap = lowEnd ? 1.0 : 1.5;
    const frameInterval = lowEnd ? 1000 / 30 : 0; // throttle weak GPUs to 30fps

    // ── program ─────────────────────────────────────────────────────────
    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      gl.deleteProgram(prog);
      return;
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uMouse = gl.getUniformLocation(prog, 'uMouse');
    const uScroll = gl.getUniformLocation(prog, 'uScroll');
    const uQual = gl.getUniformLocation(prog, 'uQual');
    gl.uniform1f(uQual, quality);

    // ── state ───────────────────────────────────────────────────────────
    let raf = 0;
    let running = true;
    let last = 0;
    const start = performance.now();
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let scroll = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      const w = Math.max(1, Math.round(section.clientWidth * dpr));
      const h = Math.max(1, Math.round(section.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uRes, w, h);
    };

    const onPointer = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    const onScroll = () => {
      const r = section.getBoundingClientRect();
      scroll = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
    };

    const draw = (now) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);
      if (frameInterval && now - last < frameInterval) return;
      last = now;

      // ease pointer toward target (subconscious, <2% influence)
      mouse.x += (mouse.tx - mouse.x) * 0.045;
      mouse.y += (mouse.ty - mouse.y) * 0.045;

      gl.uniform1f(uTime, (now - start) / 1000);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uScroll, scroll);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    resize();
    onScroll();

    const ro = new ResizeObserver(resize);
    ro.observe(section);

    if (reduce) {
      // Respect reduced motion: paint a single still frame, no animation loop.
      gl.uniform1f(uTime, 8.0);
      gl.uniform2f(uMouse, 0, 0);
      gl.uniform1f(uScroll, 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    } else {
      window.addEventListener('pointermove', onPointer, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });
      raf = requestAnimationFrame(draw);
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce && !running) {
        running = true;
        last = 0;
        raf = requestAnimationFrame(draw);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    // ── cleanup ─────────────────────────────────────────────────────────
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('scroll', onScroll);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      // NOTE: deliberately do NOT call WEBGL_lose_context.loseContext() here.
      // React reuses this canvas DOM node across remounts (e.g. StrictMode's
      // mount→cleanup→mount in dev); a force-lost context poisons the canvas so
      // the next getContext() returns the dead context and every shader compile
      // fails. Deleting the program/shaders/buffer already frees the GPU
      // resources; the context is reclaimed when the canvas leaves the DOM.
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
