'use client';
import dynamic from 'next/dynamic';

// ssr: false requires a Client Component in Next.js 15+
// This wrapper is 'use client' so dynamic() with ssr:false is permitted here

export const LeadPopup = dynamic(() => import('@/components/LeadPopup'), {
  ssr: false,
  loading: () => null,
});

export const ChatBot = dynamic(() => import('@/components/ChatBot'), {
  ssr: false,
  loading: () => null,
});
