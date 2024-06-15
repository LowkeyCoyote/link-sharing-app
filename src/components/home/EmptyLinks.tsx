import illustrationEmptyLinks from '@assets/shared/illustration-empty.svg';
import FooterHome from './FooterHome';
import { useSelector } from 'react-redux';

const EmptyLinks = () => {
  const isDemo = useSelector((state: any) => state.authSlice.isDemo);
  return (
    <section>
      <div className="flex flex-col items-center bg-light-grey rounded-lg pt-16 pb-16 mb-10">
        <img src={illustrationEmptyLinks} className="mb-10" alt="no links" />
        <h1 className="mb-6"> Let’s get you started</h1>
        <p className="w-9/12 text-center sm:w-full">
          Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them.
          We’re here to help you share your profiles with everyone!
        </p>
      </div>
      <FooterHome isDemo={isDemo} disableSubmit={true} />
    </section>
  );
};

export default EmptyLinks;
