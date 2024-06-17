import { useParams } from 'react-router-dom';
import CardPreview from '@components/preview/CardPreview';
import useFetchUser from '@hooks/useFetchUser';

const LinkShared = () => {
  const { id } = useParams();
  const { dataLinkShared, isLoading, error } = useFetchUser(id);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Error ...</p>;
  }

  return (
    <section className="relative grid min-h-screen place-content-center bg-[#fafafa] sm:bg-white">
      <div className="-b-[32px] absolute top-0 -z-10 h-[357px] w-full rounded bg-purple sm:hidden"> </div>
      <CardPreview userInfo={dataLinkShared} />
    </section>
  );
};

export default LinkShared;
