import { useState, useEffect } from 'react';

const useIsTablet = () => {
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth <= 1024);

  useEffect(() => {
    const updateIsTablet = () => {
      setIsTablet(window.innerWidth <= 1024);
    };

    updateIsTablet();
    window.addEventListener('resize', updateIsTablet);

    return () => {
      window.removeEventListener('resize', updateIsTablet);
    };
  }, []); 

  return isTablet;
};

export default useIsTablet;