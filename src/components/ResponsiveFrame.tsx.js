import React, { ReactNode } from 'react';
import './ResponsiveFrame.css';

interface ResponsiveFrameProps {
  isLoading: boolean;
  children: ReactNode;
}

const ResponsiveFrame: React.FC<ResponsiveFrameProps> = ({ isLoading, children }) => {
  return (
    <div className="responsive-container">
      {isLoading ? (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="content-frame">
          {children}
        </div>
      )}
    </div>
  );
};

export default ResponsiveFrame;
