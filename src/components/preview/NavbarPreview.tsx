import Button from '@components/shared/ui/Button';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const NavbarPreview = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  console.log(userInfo)

  const copyLinksToClickoard = () => {
    navigator.clipboard.writeText(`http://localhost:5173/link/${userInfo.ranking}`)
    toast.success('Your profile has been modified', {
      position: 'bottom-right',
    });
  }

  return (
    <div className="m-6 mb-20 md:mb-24  py-4 px-6 bg-white rounded-lg flex items-center justify-between sm:m-0 sm:rounded-none">
      <Button variant={'secondary'} className="px-7" link="/home">
        Back to Editor
      </Button>
      <Button 
      className="px-7 border-2 border-purple"
      onClick={copyLinksToClickoard}
      >Share Link</Button>
    </div>
  );
};

export default NavbarPreview;
