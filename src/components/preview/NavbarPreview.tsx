import Button from '@components/shared/ui/Button';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const NavbarPreview = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const isDemo = useSelector((state: any) => state.authSlice.isDemo);

  const copyLinksToClickoard = () => {
    navigator.clipboard.writeText(`https://lowkey-coyote-link-sharing-app.netlify.app/link/${userInfo.ranking}`);
    toast.success('The link has been copied to your clipboard!', {
      position: 'bottom-right',
    });
  };

  return (
    <div className="mx-6 mb-20 flex items-center justify-between rounded-lg bg-white px-6 py-4 md:mb-24 sm:mx-0 sm:mb-16 sm:gap-4 sm:rounded-none">
      <Button variant={'secondary'} className="px-7 sm:w-full sm:px-0" link="/home">
        Back to Editor
      </Button>
      <Button
        variant={isDemo ? 'demo' : 'primary'}
        className="border-2 border-purple px-7 align-middle hover:border-light-purple sm:w-full sm:px-0"
        onClick={!isDemo ? copyLinksToClickoard : undefined}
      >
        Share Link {isDemo && <span className="text-[12px] font-thin">( Not in on demo )</span>}
      </Button>
    </div>
  );
};

export default NavbarPreview;
