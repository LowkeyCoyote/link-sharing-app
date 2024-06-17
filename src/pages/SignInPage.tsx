import SignIn from '@components/signin/SignIn';
import {  useDispatch } from 'react-redux';
import { loggoutDemoUser } from '@redux/userSlice';

const SignInPage = () => {

  const dispatch = useDispatch()
  dispatch(loggoutDemoUser())

  return (
    <section className="sm:place-content-normal grid min-h-screen place-content-center bg-[#fafafa] sm:bg-white">
      <SignIn />
    </section>
  );
};

export default SignInPage;
