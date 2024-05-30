import Button from '@components/shared/ui/Button';
import FormField from '@components/shared/ui/FormField';
import { useForm } from 'react-hook-form';
import { UpdateFormType } from 'src/types/types';

const FormUpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateFormType>({
    mode: 'onSubmit',
  });

  const onSubmit = () => {
    console.log('hello');
  };

  return (
    <div>
      <div className="p-10">
        <h1 className="pb-2">Profile Details</h1>
        <p className="pb-10">Add your details to create a personal touch to your profile.</p>
        
        <form onChange={() => console.log(errors)} onSubmit={handleSubmit(onSubmit)}>
          <div className="h-[100px] rounded-xl bg-red mb-6"></div>

          <div className="p-5 mb-28 rounded-xl bg-light-grey">
            <div className="flex justify-between items-center">
              <label htmlFor="firstname" className="text-grey">
                First name*
              </label>
              <FormField
                name="firstname"
                label="firstname"
                type="text"
                placeholder="e.g. John"
                maxLength={40}
                register={register}
                className={`mb-3 w-[423px]`}
                error={errors.email && 'wrong format'}
                validationPattern={/^[A-ZÀ-ÖØ-Ýà-öø-ý'][a-zA-ZÀ-ÖØ-Ýà-öø-ý'-]{1,49}$/}
                labelVisible={false}
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="lastname" className="text-grey">
                Last name*
              </label>
              <FormField
                name="lastname"
                label="lastname"
                type="text"
                placeholder="e.g. Appleseed"
                maxLength={40}
                register={register}
                className={`mb-3 w-[423px]`}
                error={errors.lastname && 'wrong format'}
                validationPattern={/^[A-ZÀ-ÖØ-Ýà-öø-ý'][a-zA-ZÀ-ÖØ-Ýà-öø-ý'-]{1,49}$/}
                labelVisible={false}
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-grey" htmlFor="email">
                Email
              </label>
              <FormField
                name="email"
                label="Email address"
                type="text"
                placeholder="e.g. alex@email.com"
                maxLength={40}
                register={register}
                className={`mb-3 w-[423px]`}
                validationPattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                labelVisible={false}
                required={false}
              />
            </div>
          </div>
        </form>
      </div>

      <div className="border-t border-border justify-end flex -px-10 self-end">
        <Button type="submit" onClick={handleSubmit(onSubmit)} className="px-7 mr-10 mt-6">
          Save
        </Button>
      </div>
    </div>
  );
};

export default FormUpdateProfile;
