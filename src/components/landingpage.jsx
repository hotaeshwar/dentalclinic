import React, { useEffect, useRef, useState } from 'react';
import expertCareImage from '../assets/images/pexels-fr3nks-287227.jpg';

const LandingPage = () => {
  const imageRef = useRef(null);
  const [screenInfo, setScreenInfo] = useState({ width: 0, height: 0, deviceType: 'desktop' });

  useEffect(() => {
    const updateScreenInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let deviceType = 'desktop';

      // Mobile detection
      if (width < 768) {
        deviceType = 'mobile';
      } 
      // iPad detection - more comprehensive
      else if (
        (width >= 768 && width <= 1024 && height >= 1024) ||
        (height >= 768 && height <= 1024 && width >= 1024) ||
        navigator.userAgent.includes('iPad') ||
        (navigator.userAgent.includes('Macintosh') && 'ontouchend' in document)
      ) {
        deviceType = 'ipad';
      }

      setScreenInfo({ width, height, deviceType });
    };

    updateScreenInfo();
    window.addEventListener('resize', updateScreenInfo);

    return () => window.removeEventListener('resize', updateScreenInfo);
  }, []);

  // Get image positioning based on device
  const getImageStyles = () => {
    return {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
      display: 'block'
    };
  };

  const getContainerStyles = () => {
    const { deviceType } = screenInfo;
    
    return {
      height: deviceType === 'mobile' ? '100vh' : '100vh',
      width: '100vw',
      position: 'relative',
      // Remove marginTop that was causing white space
      marginTop: '0',
      // Ensure no padding that could cause gaps
      padding: '0',
      // Prevent zoom on container level
      touchAction: 'pan-y',
      overflow: 'hidden'
    };
  };

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={getContainerStyles()}
    >
      {/* Image container - removed the top: '80px' that was causing white space */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <img
          ref={imageRef}
          className="w-full h-full block"
          src={expertCareImage}
          alt="Lavaang Dental - Expert Care"
          loading="eager"
          style={getImageStyles()}
        />
      </div>

      {/* Minimal gradient overlay for readability - reduced for iPad */}
      {screenInfo.deviceType !== 'ipad' && (
        <div 
          className="absolute bottom-0 left-0 w-full z-10"
          style={{
            height: screenInfo.deviceType === 'mobile' ? '10%' : '15%',
            background: `linear-gradient(to top, ${
              screenInfo.deviceType === 'mobile' ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.2)'
            } 0%, transparent 100%)`
          }}
        />
      )}
    </div>
  );
};

export default LandingPage;