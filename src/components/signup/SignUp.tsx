import { useForm } from 'react-hook-form';
import { SignUpFormType } from 'src/types/types';
import FormField from '@components/shared/ui/FormField';
import { useNavigate } from 'react-router-dom';
import logoDevlinksLarge from '@assets/shared/logo/logo-devlinks-large.svg';
import Button from '@components/shared/ui/Button';
import { unwrapResult } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '@redux/userSlice';
import { AppDispatch } from '@redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (data: SignUpFormType) => {
    const { email, password, validatePassword } = data;
    if (password !== validatePassword) {
      toast.error('Passwords do not match');
      return;
    }
    try {
      const action = await dispatch(registerUser({ email, password }));
      unwrapResult(action);
      toast.success('Your account has been created. Click here to sign in', {
        onClick: () => navigate('/signin'),
        style: { cursor: 'pointer' },
      });
    } catch (error) {
      toast.error('An error occurred during account creation');
    }
  };

  return (
    <div className="w-[476px] sm:mx-auto sm:w-[311px]">
      <img src={logoDevlinksLarge} alt="devlinks" className="pb-12" />
      <div className="rounded-xl bg-white p-10 text-left sm:p-0">
        <h1 className="pb-2">Create account</h1>
        <p className="pb-10">Let’s get you started sharing your links!</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="email"
            label="Email address"
            type="text"
            placeholder="e.g. alex@email.com"
            maxLength={40}
            register={register}
            className={`mb-6 bg-icon-mail`}
            icon={true}
            error={errors.email && 'wrong format'}
            validationPattern={/^\S+@\S+\.\S+$/}
            labelVisible={true}
          />
          <FormField
            name="password"
            label="Create password"
            type="password"
            placeholder="At least 8 characters"
            maxLength={40}
            register={register}
            className={`mb-6 bg-icon-password`}
            icon={true}
            error={errors.password && 'wrong format'}
            validationPattern={/.{8,}/}
            labelVisible={true}
          />
          <FormField
            name="validatePassword"
            label="Confirm password"
            type="password"
            placeholder="At least 8 characters"
            maxLength={40}
            register={register}
            className={`mb-6 bg-icon-password`}
            icon={true}
            error={errors.password && 'wrong format'}
            validationPattern={/.{8,}/}
            labelVisible={true}
          />
          <Button className="w-full">Create new account</Button>
        </form>
        <p className="pt-6 text-center">
          Already have an account?{' '}
          <Link className="cursor-pointer text-purple" to={'/signin'}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
