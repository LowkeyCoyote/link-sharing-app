import CardPreview from '@components/preview/CardPreview';
import NavbarPreview from '@components/preview/NavbarPreview';
import { useSelector } from 'react-redux';

const PreviewPage = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  return (
    <section className="relative bg-[#fafafa] pt-6 sm:bg-white">
      <div className="absolute top-0 -z-10 h-[357px] w-full rounded-b-[32px] bg-purple sm:hidden"> </div>
      <NavbarPreview />
      <CardPreview userInfo={userInfo} />
    </section>
  );
};

export default PreviewPage;
