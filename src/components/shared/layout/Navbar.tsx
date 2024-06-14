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
    <div className="flex items-center justify-between m-6 p-4 bg-white sm:m-4 sm:pr-4 sm:pl-6 sm:mb-6 sm:mx-0 sm:mt-0">
      <img src={isMobile ? logoDevLinksSmall : logoDevlinksLarge} alt="devlinks" className="sm:h-[32px] sm:w-[32px]" />

      <nav>
        <ul className="flex items-center gap-4 md:gap-0">
          <li>
            <button onClick={handleChangeTabSelected} value="home">
              <div
                className={`group div-filter py-3 px-7 flex items-center gap-2 rounded-lg hover:bg-light-purple duration-100 ease-in-out ${
                  selectedLink === 'home' ? 'bg-light-purple' : ''
                }`}
              >
                <img
                  src={iconLink}
                  className={`filter-purple w-[20px] h-[20px] ${
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
                className={`group div-filter py-3 px-7 flex items-center gap-2 rounded-lg hover:bg-light-purple duration-100 ease-in-out ${
                  selectedLink === 'profile' ? 'bg-light-purple' : ''
                }`}
              >
                <img
                  src={iconProfile}
                  className={`filter-purple w-[20px] h-[20px] ${
                    selectedLink === 'profile' ? 'filter-purple-selected' : ''
                  }`}
                  alt="profile"
                />
                <p
                  className={`semibold group-hover:text-purple ${selectedLink === 'profile' ? 'text-purple' : ''} ${
                    isMobile ? 'hidden' : ''
                  }  `}
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
            <img className="min-w-[20px] min-h-[20px]" src={iconPreview} alt="preview" />
          ) : (
            <p className="px-7 md:px-2 sm:px-7 text-purple font-medium">Preview</p>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
