import logoDevlinksLarge from '@assets/shared/logo/logo-devlinks-large.svg';
import logoDevLinksSmall from '@assets/shared/logo/logo-devlinks-small.svg';
import Button from '@components/shared/ui/Button';
import iconLink from '@assets/shared/icon/icon-link.svg';
import iconProfile from '@assets/shared/icon/icon-profile-details-header.svg';
import iconPreview from '@assets/shared/icon/icon-preview-header.svg';
import { useState } from 'react';
import useIsMobile from '@hooks/useIsMobile';

interface NavbarProps {
  handleChangeTab: (tab: string) => void;
}

const Navbar = ({ handleChangeTab }: NavbarProps) => {
  const [selectedLink, setSelectedLink] = useState<string>('home');

  const handleChangeTabSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedLink(e.currentTarget.value);
    handleChangeTab(e.currentTarget.value);
  };

  let isMobile = useIsMobile();

  return (
    <div className="m-6 flex items-center justify-between bg-white p-4 sm:m-4 sm:mx-0 sm:mb-6 sm:mt-0 sm:pl-6 sm:pr-4">
      <img src={isMobile ? logoDevLinksSmall : logoDevlinksLarge} alt="devlinks" className="sm:h-[32px] sm:w-[32px]" />

      <nav>
        <ul className="flex items-center gap-4 md:gap-0">
          <li>
            <button onClick={handleChangeTabSelected} value="home">
              <div
                className={`div-filter group flex items-center gap-2 rounded-lg px-7 py-3 duration-100 ease-in-out hover:bg-light-purple ${
                  selectedLink === 'home' ? 'bg-light-purple' : ''
                }`}
              >
                <img
                  src={iconLink}
                  className={`filter-purple h-[20px] w-[20px] ${
                    selectedLink === 'home' ? 'filter-purple-selected' : ''
                  }`}
                  alt="link"
                />
                <p
                  className={`semibold group-hover:text-purple ${selectedLink === 'home' ? 'text-purple' : ''} ${
                    isMobile ? 'hidden' : ''
                  } `}
                >
                  Links
                </p>
              </div>
            </button>
          </li>
          <li>
            <button onClick={handleChangeTabSelected} value="profile">
              <div
                className={`div-filter group flex items-center gap-2 rounded-lg px-7 py-3 duration-100 ease-in-out hover:bg-light-purple ${
                  selectedLink === 'profile' ? 'bg-light-purple' : ''
                }`}
              >
                <img
                  src={iconProfile}
                  className={`filter-purple h-[20px] w-[20px] ${
                    selectedLink === 'profile' ? 'filter-purple-selected' : ''
                  }`}
                  alt="profile"
                />
                <p
                  className={`semibold group-hover:text-purple ${selectedLink === 'profile' ? 'text-purple' : ''} ${
                    isMobile ? 'hidden' : ''
                  } `}
                >
                  Profile
                </p>
              </div>
            </button>
          </li>
        </ul>
      </nav>

      <div>
        <Button variant="secondary" className="px-4 py-3 md:px-0 sm:px-4" link="/preview">
          {isMobile ? (
            <img className="min-h-[20px] min-w-[20px]" src={iconPreview} alt="preview" />
          ) : (
            <p className="px-7 font-medium text-purple md:px-2 sm:px-7">Preview</p>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
