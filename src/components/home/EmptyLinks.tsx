import illustrationEmptyLinks from '@assets/shared/illustration-empty.svg';
import Button from '@components/shared/ui/Button';
import { useNavigate } from 'react-router-dom';

const EmptyLinks = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('demo')
    localStorage.removeItem('token')
    navigate('/signin')
}

  return (
    <section>
      <div className="flex flex-col items-center bg-light-grey rounded-lg pt-16 pb-16 mb-10">
        <img src={illustrationEmptyLinks} className="mb-10" alt="no links" />
        <h1 className="mb-6"> Let’s get you started</h1>
        <p className="w-9/12 text-center sm:w-full">
          Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them.
          We’re here to help you share your profiles with everyone!
        </p>
      </div>


        <div className="border-t border-border justify-between flex -px-10 self-end sm:flex-col-reverse">
          <Button variant="logout" className="ml-10 px-6 py-3 mt-6 sm:w-auto sm:mt-10 sm:mx-auto" onClick={logout}>
            Logout
          </Button>
          <Button type="submit" className="px-7 mr-10 mt-6 pointer-events-none bg-purple-hover">
            Save
          </Button>
        </div>

    </section>
  );
};

export default EmptyLinks;
