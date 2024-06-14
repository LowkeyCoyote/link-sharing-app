import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CardPreview from '@components/preview/CardPreview';
import axios from 'axios';
import { LinkInfo } from 'src/types/types';

const LinkShared = () => {
  const { id } = useParams();
  const [dataLinkShared, setDataLinkedShared] = useState<LinkInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchDataUser = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://link-sharing.joska-gyuricza.fr/api/users/link`, {
          params: {
            position: id,
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

  if (isLoading) {
    return <p>Loadind ...</p>;
  }

  if (error) {
    return <p>Error ...</p>;
  }

  return (
    <section className="relative !sm:bg-white grid place-content-center min-h-screen">
      <div className="absolute h-[357px] bg-purple w-full top-0 rounded-b-[32px] -z-10 sm:hidden"> </div>
      <CardPreview userInfo={dataLinkShared} />
    </section>
  );
};

export default LinkShared;
