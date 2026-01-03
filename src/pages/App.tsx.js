import React, { useEffect, useState } from 'react';
import ResponsiveFrame from './components/ResponsiveFrame';
import MainApp from './pages/App';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 例として2秒後に切り替え

    return () => clearTimeout(timer);
  }, []);

  return (
    <ResponsiveFrame isLoading={loading}>
      {!loading && <MainApp />}
    </ResponsiveFrame>
  );
};

export default App;
