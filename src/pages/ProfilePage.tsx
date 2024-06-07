import FormUpdateProfile from '@components/profile/FormUpdateProfile';
import MockupLinks from '@components/shared/MockupLinks';
import Navbar from '@components/shared/layout/Navbar';

const ProfilePage = () => {
  return (
    <section className="max-h-screen overflow-y-auto">
      <Navbar />
      <div className="flex px-6 gap-6 sm:px-4">
        <div className="bg-white flex justify-center items-center  w-[35%] rounded-xl md:hidden relative">
          <MockupLinks />
        </div>
        <div className="bg-white w-[65%] rounded-xl md:w-full">
          <FormUpdateProfile />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
