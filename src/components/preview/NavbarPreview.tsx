import Button from '@components/shared/ui/Button';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const NavbarPreview = () => {

  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const isDemo = useSelector((state : any) => state.authSlice.isDemo)

  console.log(isDemo);  

  const copyLinksToClickoard = () => {
    navigator.clipboard.writeText(`https://lowkey-coyote-link-sharing-app.netlify.app/link/${userInfo.ranking}`)
    toast.success('The link has been copied to your clipboard!', {
      position: 'bottom-right',
    });
  }

  return (
    <div className="mx-6 mb-20 md:mb-24  py-4 px-6 bg-white rounded-lg flex items-center justify-between sm:mb-16 sm:mx-0 sm:gap-4 sm:rounded-none">
      <Button variant={'secondary'} className="px-7 sm:px-0  sm:w-full" link="/home">
        Back to Editor
      </Button>
      <Button 
      variant={isDemo ? 'demo' : 'primary'}
      className="px-7  border-2 border-purple outline-2 outline-purple sm:w-full sm:px-0 align-middle"
      onClick={!isDemo ? copyLinksToClickoard : undefined }
      >Share Link {isDemo && (
        <span className=' font-thin text-[12px]'>( Not in on demo )</span>
      )}</Button>
    </div>
  );
};

export default NavbarPreview;
