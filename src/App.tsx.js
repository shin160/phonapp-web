// src/App.tsx
import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';
import ResponsiveFrame from './components/ResponsiveFrame';
import Root from './components/Root';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2秒後にローディングを解除
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // スマホ幅かどうかを判定
  const isMobile = window.innerWidth <= 800;

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ResponsiveFrame isMobile={isMobile}>
          <Root />
        </ResponsiveFrame>
      )}
    </div>
  );
};

export default App;
