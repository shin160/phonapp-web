// src/components/ResponsiveFrame.tsx
import React from 'react';

interface ResponsiveFrameProps {
  isMobile: boolean;
  children: React.ReactNode;
}

const ResponsiveFrame: React.FC<ResponsiveFrameProps> = ({ isMobile, children }) => {
  return (
    <div style={{ width: isMobile ? '100%' : '800px', margin: '0 auto' }}>
      {children}
    </div>
  );
};

export default ResponsiveFrame;
