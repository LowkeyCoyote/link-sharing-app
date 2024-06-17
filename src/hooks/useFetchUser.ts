import { useState, useEffect } from 'react';
import axios from 'axios';
import { LinkInfo } from 'src/types/types';

const useFetchUser = (idUser: string | undefined) => {
  const [dataLinkShared, setDataLinkedShared] = useState<LinkInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchDataUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://link-sharing.joska-gyuricza.fr/api/users/link`, {
          params: {
            position: idUser,
          },
        });
        const json = await response.data.user;
        setIsLoading(false);
        setDataLinkedShared(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchDataUser();
  }, []);

  return {
    dataLinkShared,
    isLoading,
    error,
  };
};

export default useFetchUser;
