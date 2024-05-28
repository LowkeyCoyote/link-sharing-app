import { useForm } from 'react-hook-form';
import { SignUpFormType } from 'src/types/types';
import FormField from '@components/shared/ui/FormField';

import logoDevlinksLarge from '@assets/shared/logo/logo-devlinks-large.svg';
import Button from '@components/shared/ui/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = () => console.log(errors);

  return (
    <div className="w-[476px] sm:w-[311px]">
      <img src={logoDevlinksLarge} alt="devlinks" className="pb-12" />
      <div className="bg-white rounded-xl text-left p-10">
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
          />

          <FormField
            name="password"
            label="Password"
            type="password"
            placeholder="At least 8 characters"
            maxLength={40}
            register={register}
            className={`mb-6 bg-icon-password`}
            icon={true}
            error={errors.password && 'wrong format'}
            validationPattern={/.{8,}/}
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
          />
          <Button className="w-full">Create new account</Button>
        </form>

        <p className="pt-6 text-center">
          Already have an account?{' '}
          <Link className="text-purple cursor-pointer" to={'/signin'}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
