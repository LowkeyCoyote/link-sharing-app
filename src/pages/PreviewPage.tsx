import CardPreview from '@components/preview/CardPreview';
import NavbarPreview from '@components/preview/NavbarPreview';
import { useSelector } from 'react-redux';


const PreviewPage = () => {

  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  return (
    <section className="relative !sm:bg-white pt-6">
      <div className="absolute h-[357px] bg-purple w-full top-0 rounded-b-[32px] -z-10 sm:hidden"> </div>
      <NavbarPreview />
      <CardPreview
      userInfo={userInfo}
       />
    </section>
  );
};

export default PreviewPage;
