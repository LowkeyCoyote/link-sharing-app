
import Button from '@components/shared/ui/Button';
import useLogout from '@hooks/useLogout';

interface ActionButtonsProps {
  onSubmit?: () => void;
  isDemo?: boolean;
  disableSubmit?: boolean;
}

const FooterHome = ({  onSubmit, isDemo, disableSubmit = false } : ActionButtonsProps) => {
    const logout = useLogout()
    return (
      <div className="border-t border-border justify-between flex -px-10 self-end sm:flex-col-reverse">
        <Button variant="logout" className="ml-10 px-6 py-3 mt-6 sm:w-auto sm:mt-10 sm:mx-auto" onClick={logout}>
          Logout
        </Button>
        <Button
          variant={isDemo ? 'demo' : 'primary'}
          type="submit"
          disabled={disableSubmit}
          className={`px-7 mr-10 mt-6 sm:w-full sm:mx-auto align-middle ${disableSubmit ? 'pointer-events-none bg-light-purple' : ''}`}
          onClick={onSubmit}
        >
          Save
          {isDemo && <span className="font-thin text-[12px] ml-3">( Not available on demo )</span>}
        </Button>
      </div>
    );
  };
  
  export default FooterHome;