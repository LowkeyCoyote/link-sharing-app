import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 640);

  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []); 

  return isMobile;
};

export default useIsMobile;