import Navbar from '@components/shared/layout/Navbar';
import MockupLinks from '@components/shared/MockupLinks';
import GestionLinks from '@components/home/GestionLinks';
import { useState } from 'react';
import FormUpdateProfile from '@components/profile/FormUpdateProfile';

const HomePage = () => {
  const [selectedTab, setSelectedTab] = useState<string>('home');
  const handleTabSelectedChange = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <div className='bg-[#fafafa]'>
      <Navbar handleChangeTab={handleTabSelectedChange} />
      <div className="flex px-6 gap-6 sm:px-4">
        <div className="bg-white flex justify-center w-[35%] rounded-xl md:hidden relative">
          <MockupLinks />
        </div>
        <div className="bg-white w-[65%] rounded-xl md:w-full p-10 sm:p-6">
          {selectedTab === 'home' && <GestionLinks />}
          {selectedTab === 'profile' && <FormUpdateProfile />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
