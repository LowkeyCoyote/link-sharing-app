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
    <div className="bg-[#fafafa]">
      <Navbar handleChangeTab={handleTabSelectedChange} />
      <div className="flex gap-6 px-6 sm:px-4">
        <div className="relative flex w-[35%] justify-center rounded-xl bg-white md:hidden">
          <MockupLinks />
        </div>
        <div className="w-[65%] rounded-xl bg-white p-10 md:w-full sm:p-6">
          {selectedTab === 'home' && <GestionLinks />}
          {selectedTab === 'profile' && <FormUpdateProfile />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
