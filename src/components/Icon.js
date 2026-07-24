/**
 * Icon — the site's single line-icon system.
 * One stroke weight (1.8), currentColor, 24px grid.
 * Replaces the old emoji "icon set" so iconography renders identically
 * on every OS and reads as one designed voice. Server-safe (no hooks).
 */

const PATHS = {
  // Communication
  phone:      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>,
  chat:       <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>,
  mail:       <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></>,
  headset:    <><path d="M3 12v-1a9 9 0 0 1 18 0v1"/><path d="M21 16a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3zM3 16a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H3z"/></>,

  // Journey & transport
  car:        <><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11"/><rect x="3" y="11" width="18" height="7" rx="2"/><circle cx="7.5" cy="18" r="1.8"/><circle cx="16.5" cy="18" r="1.8"/></>,
  helicopter: <><path d="M3 4h18M12 4v4"/><rect x="6" y="8" width="12" height="7" rx="3.5"/><path d="M18 11h3v2M6 20h9M10.5 15v5"/></>,
  route:      <><circle cx="6" cy="19" r="2.4"/><circle cx="18" cy="5" r="2.4"/><path d="M8.4 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.6"/></>,
  map:        <><path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z"/><path d="M9 4v13M15 6.5v13"/></>,
  mountain:   <><path d="m8 3 5.5 9L17 7l5 9H2L8 3z"/><path d="m6.3 5.8 1.7 2 1.7-2"/></>,
  temple:     <><path d="M12 2l1 3h-2l1-3zM7 8c0-1.7 2.2-3 5-3s5 1.3 5 3M5 8h14M6 8v4h12V8M4 12h16M5 12v9M19 12v9M3 21h18M10 21v-4a2 2 0 0 1 4 0v4"/></>,
  compass:    <><circle cx="12" cy="12" r="10"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8z"/></>,

  // Trust & practice
  shield:     <path d="M12 22s8-3.6 8-10V5.4L12 2 4 5.4V12c0 6.4 8 10 8 10z"/>,
  shieldCheck:<><path d="M12 22s8-3.6 8-10V5.4L12 2 4 5.4V12c0 6.4 8 10 8 10z"/><path d="m8.8 11.8 2.3 2.3 4.1-4.4"/></>,
  badgeCheck: <><path d="M12 2.5 14.4 5l3.4-.4.5 3.4 3 1.7-1.5 3.1 1.5 3.1-3 1.7-.5 3.4-3.4-.4L12 23l-2.4-2.4-3.4.4-.5-3.4-3-1.7 1.5-3.1L2.7 9.7l3-1.7.5-3.4 3.4.4L12 2.5z"/><path d="m8.8 12.3 2.2 2.2 4.2-4.5"/></>,
  medal:      <><circle cx="12" cy="14.5" r="5.5"/><path d="m8.2 10.2-3-6.2h4.6L12 8.5 14.2 4h4.6l-3 6.2M12 12.2l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8z"/></>,
  star:       <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9 2.9-6z"/>,
  calendar:   <><rect x="3" y="5" width="18" height="17" rx="2"/><path d="M16 2.5V7M8 2.5V7M3 10.5h18"/></>,
  clipboard:  <><rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4a2 2 0 0 1 6 0M9 11h6M9 15.5h6"/></>,
  receipt:    <><path d="M5 2h14v20l-2.3-1.6L14.4 22l-2.4-1.6L9.6 22l-2.3-1.6L5 22V2z"/><path d="M9 7.5h6M9 11.5h6M9 15.5h3.5"/></>,
  rupee:      <><path d="M6 3h12M6 8h12M14.5 3a5 5 0 0 1 0 10H6l8 8"/></>,
  handshake:  <><path d="m11 17.5 2 1.8a2 2 0 0 0 2.7 0l4.8-4.5a2 2 0 0 0 0-2.9L16 7.7a2 2 0 0 0-2.7 0L11 9.9"/><path d="m3.5 11.9 4.9-4.6a2 2 0 0 1 2.7 0l4.4 4.2a1.8 1.8 0 0 1-2.5 2.6l-2-1.9-3.4 3.2a1.7 1.7 0 0 1-2.4-.1 1.7 1.7 0 0 1-1.7-3.4z"/></>,

  // Care on the road
  medical:    <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M12 11v6M9 14h6"/></>,
  meal:       <><path d="M4 13a8 8 0 0 1 16 0H4z"/><path d="M2.5 16.5h19M12 5V3M8.5 5.6l-.8-1.4M15.5 5.6l.8-1.4M5 20h14"/></>,
  users:      <><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.1a3.5 3.5 0 0 1 0 5.8M17.8 14.2a6.5 6.5 0 0 1 3.7 5.8"/></>,
  user:       <><circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></>,
  ticket:     <><path d="M3 9V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2.5 2.5 0 0 0 0 6v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2.5 2.5 0 0 0 0-6z"/><path d="M13 5v2.3M13 11v2M13 16.7V19"/></>,
  oxygen:     <><rect x="8" y="6" width="8" height="16" rx="3"/><path d="M10 6V4a2 2 0 0 1 4 0v2M12 11v6"/></>,
  sun:        <><circle cx="12" cy="12" r="4.5"/><path d="M12 2.5V5M12 19v2.5M4.9 4.9 6.7 6.7M17.3 17.3l1.8 1.8M2.5 12H5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></>,

  // Content & tools
  calculator: <><rect x="4" y="2" width="16" height="20" rx="2"/><rect x="7.5" y="5" width="9" height="4" rx="1"/><path d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/></>,
  book:       <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></>,
  backpack:   <><path d="M8 6a4 4 0 0 1 8 0"/><rect x="4" y="6" width="16" height="16" rx="3"/><path d="M4 13h16M9 13v3M15 13v3"/></>,
  megaphone:  <><path d="m3 11 15-6v14L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6M18 8.5a3.5 3.5 0 0 1 0 5"/></>,
  alert:      <><path d="M12 3 2.5 20h19L12 3z"/><path d="M12 9.5V14M12 17h.01"/></>,
  info:       <><circle cx="12" cy="12" r="10"/><path d="M12 8h.01M12 11v6"/></>,
  check:      <path d="m4.5 12.5 5 5 10-11"/>,
  arrowRight: <path d="M4 12h16m-6-6 6 6-6 6"/>,
  external:   <><path d="M15 3h6v6M21 3l-9 9"/><path d="M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/></>,
  city:       <><path d="M3 21V8l6-4v17M9 21V10h6v11M15 21v-8h6v8M2 21h20"/><path d="M5.5 9.5h.01M5.5 13h.01M5.5 16.5h.01M12 13.5h.01M12 17h.01M18 16h.01"/></>,
  flower:     <><circle cx="12" cy="12" r="2.6"/><path d="M12 9.4C12 6 9.5 4.5 9.5 4.5S7 6 7 9.4c0 0 2.5-.4 5 0zM14.6 12c3.4 0 4.9-2.5 4.9-2.5S18 7 14.6 7c0 0 .4 2.5 0 5zM12 14.6c0 3.4 2.5 4.9 2.5 4.9s2.5-1.5 2.5-4.9c0 0-2.5.4-5 0zM9.4 12c-3.4 0-4.9 2.5-4.9 2.5S6 17 9.4 17c0 0-.4-2.5 0-5z"/></>,
  water:      <path d="M12 2.8s6.5 7 6.5 11.7a6.5 6.5 0 0 1-13 0C5.5 9.8 12 2.8 12 2.8z"/>,
  leaf:       <><path d="M4 20S3 8 12 5c7-2.3 9-2 9-2s.3 2-2 9c-3 9-15 8-15 8z"/><path d="M4 20c4-6 8-9 12-11"/></>,
  pray:       <><path d="M12 3c-1.5 2.5-2.5 5-2.5 7.5S10.5 15 12 16.5c1.5-1.5 2.5-3.5 2.5-6S13.5 5.5 12 3z"/><path d="M8.5 9.5C6 10.5 4.5 13 4.5 16c0 3 2 5 4.5 5 1.2 0 2.3-.5 3-1.3.7.8 1.8 1.3 3 1.3 2.5 0 4.5-2 4.5-5 0-3-1.5-5.5-4-6.5"/></>,
};

export default function Icon({ name, size = 20, strokeWidth = 1.8, style, className }) {
  const path = PATHS[name] || PATHS.info;
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" style={style} className={className}
    >
      {path}
    </svg>
  );
}

/* Filled WhatsApp glyph — brand mark, not a line icon */
export function WhatsAppIcon({ size = 16, color = 'currentColor', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true" style={style}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.526 5.85L0 24l6.335-1.503A11.951 11.951 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.897 0-3.68-.49-5.23-1.35l-.374-.213-3.884.921.977-3.775-.233-.387A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}
