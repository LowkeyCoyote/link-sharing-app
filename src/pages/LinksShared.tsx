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
    <section className="relative bg-[#fafafa] sm:bg-white grid place-content-center min-h-screen">
      <div className="absolute h-[357px] bg-purple w-full top-0 rounded-b-[32px] -z-10 sm:hidden"> </div>
      <CardPreview userInfo={dataLinkShared} />
    </section>
  );
};

export default LinkShared;
