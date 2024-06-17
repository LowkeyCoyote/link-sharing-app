import Button from '@components/shared/ui/Button';
import useLogout from '@hooks/useLogout';

interface ActionButtonsProps {
  onSubmit?: () => void;
  isDemo?: boolean;
  disableSubmit?: boolean;
}

const FooterHome = ({ onSubmit, isDemo, disableSubmit = false }: ActionButtonsProps) => {
  const logout = useLogout();
  return (
    <div className="-px-10 flex justify-between self-end border-t border-border sm:flex-col-reverse">
      <Button variant="logout" className="ml-10 mt-6 px-6 py-3 sm:mx-auto sm:mt-10 sm:w-auto" onClick={logout}>
        Logout
      </Button>
      <Button
        variant={isDemo ? 'demo' : 'primary'}
        type="submit"
        disabled={disableSubmit}
        className={`mr-10 mt-6 px-7 align-middle sm:mx-auto sm:w-full ${disableSubmit ? 'pointer-events-none bg-light-purple' : ''}`}
        onClick={onSubmit}
      >
        Save
        {isDemo && <span className="ml-3 text-[12px] font-thin">( Not available on demo )</span>}
      </Button>
    </div>
  );
};

export default FooterHome;
