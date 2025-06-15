import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    iFrameResize?: (options?: any, elements?: HTMLIFrameElement | HTMLIFrameElement[]) => void;
  }
}

const ReviewsWidget: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Charger le script iframe-resizer
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.2.10/iframeResizer.min.js';
    script.async = true;
    
    script.onload = () => {
      // Appliquer iFrameResize une fois que le script est chargé
      if (iframeRef.current && window.iFrameResize) {
        window.iFrameResize({}, iframeRef.current);
      }
    };
    
    document.body.appendChild(script);
    
    // Nettoyer le script lors du démontage du composant
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe 
      ref={iframeRef}
      src="https://bff2cdc683ca4309a438d969d07781ce.elf.site"
      style={{ border: 'none', width: '100%', minHeight: '200px' }}
      title="Avis clients Pain Patisserie"
    />
  );
};

export default ReviewsWidget;