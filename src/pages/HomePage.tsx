import Navbar from '@components/shared/layout/Navbar';
import MockupLinks from '@components/shared/MockupLinks';
import GestionLinks from '@components/home/GestionLinks';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex px-6 gap-6">
        <div className="bg-white flex justify-center items-center  w-[35%] rounded-xl md:hidden relative">
          <MockupLinks />
        </div>
        <div className="bg-white w-[65%] rounded-xl md:w-full p-10">
        <GestionLinks />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
