import logoDevlinksLarge from '@assets/shared/logo/logo-devlinks-large.svg';
import logoDevLinksSmall from '@assets/shared/logo/logo-devlinks-small.svg';
import Button from '@components/shared/ui/Button';
import iconLink from '@assets/shared/icon/icon-link.svg';
import iconProfile from '@assets/shared/icon/icon-profile-details-header.svg';
import iconPreview from '@assets/shared/icon/icon-preview-header.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useIsMobile from '@hooks/useIsMobile';

const Navbar = () => {
  const actualLocation = window.location.href.split('/')[window.location.href.split('/').length - 1];
  const [selectedLink, setSelectedLink] = useState<string>(actualLocation);

  const handleSelectedLink = (linkSelected: string) => {
    setSelectedLink(linkSelected);
  };

  let isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-between m-6 p-4 bg-white sm:m-0 sm:pr-4 sm:pl-6">
      <img src={isMobile ? logoDevLinksSmall : logoDevlinksLarge} alt="devlinks" className="sm:h-[32px] sm:w-[32px]" />

      <nav>
        <ul className="flex items-center gap-4 md:gap-0">
          <li>
            <Link to="/home" onClick={() => handleSelectedLink('/home')}>
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
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={() => handleSelectedLink('/profile')}>
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
            </Link>
          </li>
        </ul>
      </nav>

      <Button variant="secondary" className="px-4 py-3" link="/preview">
        {isMobile ? (
          <img className="min-w-[20px] min-h-[20px]" src={iconPreview} alt="preview" />
        ) : (
          <p className="px-7 text-purple">Preview</p>
        )}
      </Button>
    </div>
  );
};

export default Navbar;
