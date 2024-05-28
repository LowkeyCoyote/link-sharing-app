import { useForm } from 'react-hook-form';
import { SignInFormType } from 'src/types/types';
import { Link } from 'react-router-dom';

import logoDevlinksLarge from '@assets/shared/logo/logo-devlinks-large.svg';
import Button from '@components/shared/ui/Button';
import FormField from '@components/shared/ui/FormField';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  });

  const onSubmit = () => console.log(errors);

  return (
    <div className='w-[476px] sm:w-[311px]'>
      <img src={logoDevlinksLarge} alt="devlinks" className="pb-12" />
      <div className="bg-white rounded-xl text-left p-10">
        <h1 className="pb-2">Login</h1>
        <p className="pb-10">Add your details below to get back into the app</p>
        <form onChange={() => console.log(errors)} onSubmit={handleSubmit(onSubmit)}>
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
          />

          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            maxLength={40}
            register={register}
            className={`mb-6 bg-icon-password`}
            icon={true}
            error={errors.password && 'wrong format'}
            validationPattern={/.{8,}/}
          />
          <Button className="w-full" type="submit">
            Login
          </Button>
          <p className="pt-6 text-center">
            Don’t have an account?{' '}
            <Link className="text-purple cursor-pointer" to={'/signup'}>
              {' '}
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;