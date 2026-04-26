'use client';
import { useEffect, useRef } from 'react';

const API_KEY  = 'AIzaSyC-PAFE2BH4Rv9U1KSfytoZI6_oP-usBuI';
const PLACE_ID = 'ChIJcbRpbaBHCTkRsh3aBCyZEt8';

export default function GoogleMapEmbed({ height = 340 }) {
  const containerRef = useRef(null);
  const loadedRef   = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    // Inject the Extended Component Library script once
    const existingScript = document.querySelector('[data-gmp-ecl]');
    const scriptPromise = existingScript
      ? Promise.resolve()
      : new Promise((resolve) => {
          const s = document.createElement('script');
          s.type   = 'module';
          s.src    = 'https://ajax.googleapis.com/ajax/libs/@googlemaps/extended-component-library/0.6.11/index.min.js';
          s.setAttribute('data-gmp-ecl', 'true');
          s.onload = resolve;
          document.head.appendChild(s);
        });

    scriptPromise.then(async () => {
      // Wait for the custom elements to be defined
      await customElements.whenDefined('gmpx-store-locator').catch(() => {});

      const container = containerRef.current;
      if (!container) return;

      // Build HTML inside the container
      container.innerHTML = `
        <gmpx-api-loader
          key="${API_KEY}"
          solution-channel="GMP_QB_locatorplus_v11_c">
        </gmpx-api-loader>
        <gmpx-store-locator map-id="DEMO_MAP_ID"></gmpx-store-locator>
      `;

      // Configure after both elements are ready
      await customElements.whenDefined('gmpx-store-locator');
      const locator = container.querySelector('gmpx-store-locator');
      if (locator && locator.configureFromQuickBuilder) {
        locator.configureFromQuickBuilder({
          locations: [{
            title:   'Shiv Ganga Travels',
            address1:'Saptrishi Road, Near Shantikunj Gate No. 1',
            address2:'Bhupatwala, Haridwar, Uttarakhand 249410, India',
            coords:  { lat: 29.9896838, lng: 78.1927454 },
            placeId: PLACE_ID,
          }],
          mapOptions: {
            center:           { lat: 29.9896838, lng: 78.1927454 },
            zoom:             16,
            maxZoom:          18,
            zoomControl:      true,
            fullscreenControl:true,
            mapTypeControl:   false,
            streetViewControl:true,
            mapId:            '',
          },
          mapsApiKey:   API_KEY,
          capabilities: {
            input:          false,
            autocomplete:   false,
            directions:     true,
            distanceMatrix: false,
            details:        true,
            actions:        true,
          },
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width:   '100%',
        height:  height,
        borderRadius: 14,
        overflow:'hidden',
        border:  '1px solid var(--border)',
        // Colour overrides for the panel to match site theme
        '--gmpx-color-primary':       '#0F2B5B',
        '--gmpx-color-surface':       '#ffffff',
        '--gmpx-color-on-surface':    '#212121',
        '--gmpx-color-outline':       '#e0e0e0',
        '--gmpx-rating-color':        '#E8920A',
        '--gmpx-hours-color-open':    '#15803D',
        '--gmpx-hours-color-closed':  '#D50000',
        '--gmpx-font-family-base':    'var(--font), Roboto, sans-serif',
        '--gmpx-font-family-headings':'var(--font-display), Roboto, sans-serif',
      }}
      aria-label="Google Map showing Shiv Ganga Travels office location"
    />
  );
}
