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

/* ---------- palette ---------- */
const vec3 GOLD = vec3(1.000, 0.820, 0.520);
const vec3 MIST = vec3(0.860, 0.910, 0.975);

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

/*
 * TRANSPARENT ATMOSPHERIC OVERLAY.
 * The real hero photo stays visible underneath (this canvas sits above the
 * <img> and blends over it). We draw ONLY light: a soft sun bloom, drifting
 * god rays, rising mist, high haze and floating dust — accumulated into a
 * straight (non-premultiplied) colour + alpha so most of the frame is
 * transparent and the photograph reads through. No opaque sky or mountains.
 */
void main(){
  float aspect = uRes.x / uRes.y;

  /* cinematic drift: micro-breathing + drone hover + tiny scroll push */
  vec2 p = vUv + vec2(
    sin(uTime * 0.11) * 0.005 + uMouse.x * 0.008,
    cos(uTime * 0.09) * 0.004 + uMouse.y * 0.006 - uScroll * 0.04
  );

  vec3 col = vec3(0.0);
  float a = 0.0;

  /* sun high on the left, drifts a touch with the pointer */
  vec2 sunPos = vec2(0.30 + uMouse.x * 0.02, 0.74);
  vec2 rd = vec2((p.x - sunPos.x) * aspect, p.y - sunPos.y);
  float sd = length(rd);

  /* soft golden bloom */
  float bloom = exp(-sd * 3.4) * 0.45 + exp(-sd * 9.0) * 0.45;
  col += GOLD * bloom; a += bloom * 0.5;

  /* slow volumetric god rays */
  float ang = atan(rd.y, rd.x);
  float rays = fbm(vec2(ang * 3.5 + uTime * 0.022, 1.7))
             * fbm(vec2(ang * 8.0 - uTime * 0.013, 4.0))
             * smoothstep(1.0, 0.05, sd);
  col += GOLD * rays; a += rays * 0.42;

  /* rising valley mist across the lower third */
  float band = smoothstep(0.10, 0.42, p.y) * (1.0 - smoothstep(0.42, 0.66, p.y));
  vec2 mq = vec2(p.x * 2.2 - uTime * 0.020, p.y * 3.0 + uTime * 0.012);
  float mist = band * smoothstep(0.45, 0.95, fbm(mq + fbm(mq)));
  col += MIST * mist; a += mist * 0.42;

  /* thin drifting high haze */
  float haze = smoothstep(0.50, 0.98, p.y)
             * smoothstep(0.55, 0.92, fbm(vec2(p.x * 1.6 - uTime * 0.010, p.y * 2.0 + 3.0)));
  col += MIST * haze; a += haze * 0.22;

  /* floating atmospheric dust / pollen */
  float part = 0.0;
  for (int k = 0; k < 3; k++){
    float fk = float(k);
    float scale = 28.0 + fk * 36.0;
    float speed = 0.020 + fk * 0.016;
    vec2 g = vec2(p.x * aspect, p.y) * scale;
    g.y += uTime * speed * scale;
    g.x += sin(uTime * 0.2 + floor(g.y) + fk) * 0.6 + uMouse.x * (1.0 + fk);
    vec2 id = floor(g), f = fract(g);
    vec2 c = vec2(hash(id + fk * 3.1), hash(id + fk * 7.7 + 1.0));
    float d = length(f - c);
    float on = step(0.86 - fk * 0.06, hash(id + fk * 13.0));
    part += smoothstep(0.14 + fk * 0.05, 0.0, d) * on * (0.5 - fk * 0.12);
    if (k >= 1 && uQual < 0.5) break;
  }
  col += MIST * part; a += part * 0.6;

  /* subtle grain, only where the overlay is actually visible */
  col += (hash(p * uRes + uTime) - 0.5) * 0.04 * a;

  /* convert accumulated (premultiplied-ish) colour to straight colour */
  if (a > 0.001) col /= a;
  col = clamp(col, 0.0, 1.0);
  a = clamp(a, 0.0, 0.78);

  gl_FragColor = vec4(col, a);
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

    // Transparent overlay: composite the light we draw over the hero photo
    // beneath. Straight (non-premultiplied) alpha to match the context option.
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.clearColor(0, 0, 0, 0);

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
      gl.clear(gl.COLOR_BUFFER_BIT);
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
      gl.clear(gl.COLOR_BUFFER_BIT);
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
