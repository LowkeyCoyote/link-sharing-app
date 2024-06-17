import SignUp from '@components/signup/SignUp';
import {  useDispatch } from 'react-redux';
import { loggoutDemoUser } from '@redux/userSlice';

const SignUpPage = () => {

  const dispatch = useDispatch()
  dispatch(loggoutDemoUser())
  
  return (
    <section className="sm:place-content-normal grid min-h-screen place-content-center bg-[#fafafa] sm:bg-white">
      <SignUp />
    </section>
  );
};

export default SignUpPage;
