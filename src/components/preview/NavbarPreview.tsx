import Button from '@components/shared/ui/Button';

const NavbarPreview = () => {
  return (
    <div className="m-6 py-4 px-6 bg-white rounded-lg flex items-center justify-between sm:m-0 sm:rounded-none">
      <Button variant={'secondary'} className="px-7" link="/home">
        Back to Editor
      </Button>
      <Button className="px-7 border-2 border-purple">Share Link</Button>
    </div>
  );
};

export default NavbarPreview;
