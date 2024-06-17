import { useEffect } from 'react';
import FormField from '@components/shared/ui/FormField';
import { getCurrentUser, updateCurrentUser } from '@redux/userSlice';
import { AppDispatch } from '@redux/store';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { UpdateFormType } from 'src/types/types';
import iconUploadImage from '@assets/shared/icon/icon-upload-image.svg';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import useImageUpload from '@hooks/useImageUpload';
import FooterHome from '@components/home/FooterHome';

const FormUpdateProfile = () => {
  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const isDemo = useSelector((state: any) => state.authSlice.isDemo);
  const dispatch = useDispatch<AppDispatch>();
  const { selectedImage, imagePreview, fileInputRef, handleDivClick, handleImageChange } = useImageUpload(
    userInfo?.url
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateFormType>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',

    defaultValues: {
      firstname: userInfo?.firstname || '',
      lastname: userInfo?.lastname || '',
      email: userInfo?.email || '',
      image: userInfo?.url || '',
    },
  });

  useEffect(() => {
    if (userInfo) {
      reset({
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        email: userInfo.email,
        image: userInfo.url,
      });
    } else {
      reset({
        firstname: '',
        lastname: '',
        email: '',
        image: undefined,
      });
    }
  }, [userInfo, reset]);

  const onSubmit = async (data: UpdateFormType) => {
    if (isDemo) {
      return;
    }
    try {
      const formData = new FormData();
      formData.append('firstname', data.firstname);
      formData.append('lastname', data.lastname);
      if (data.email) {
        formData.append('email', data.email);
      }

      if (selectedImage) formData.append('image', selectedImage);

      const actionResult = await dispatch(updateCurrentUser(formData));
      unwrapResult(actionResult);
      await dispatch(getCurrentUser());

      toast.success('Your profile has been modified');
    } catch (error) {
      toast.error('An error occurred while updating profile');
    }
  };

  return (
    <div>
      <div className="rounded-lg bg-white">
        <h1 className="pb-2">Profile Details</h1>
        <p className="pb-10">Add your details to create a personal touch to your profile.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 rounded-xl bg-light-grey p-5">
            <div className="flex items-center justify-between sm:flex-col sm:items-start">
              <label className="font-medium text-grey sm:pb-4" htmlFor="image">
                Profile Picture
              </label>
              <div
                onClick={handleDivClick}
                className={`relative flex h-[193px] w-[193px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl bg-light-purple bg-cover bg-center bg-no-repeat md:ml-10 sm:mb-6 sm:ml-0`}
                style={{
                  backgroundImage: imagePreview ? `url(${imagePreview})` : 'none',
                }}
              >
                <input
                  {...register('image')}
                  ref={(e) => {
                    if (e) fileInputRef.current = e;
                  }}
                  className="hidden"
                  type="file"
                  id="image"
                  accept="image/png, image/jpeg"
                  name="image"
                  onChange={handleImageChange}
                  required={false}
                />
                <img className={`${imagePreview ? `filter-white z-10` : ``}`} src={iconUploadImage} alt="upload" />
                <p className={`font-semibold text-purple ${imagePreview ? `z-10 text-white` : ``}`}>+ Upload Image</p>
                {imagePreview && <div className="overlay-dark-profile"></div>}
              </div>
              <p className="max-w-[200px] text-p-small sm:max-w-full">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </div>

          <div className="mb-28 rounded-xl bg-light-grey p-5 sm:mb-6">
            <div className="flex items-center justify-between sm:w-full sm:flex-col sm:items-start">
              <label
                htmlFor="firstname"
                className={`text-grey sm:mb-0.5 sm:text-[12px] ${errors.firstname ? 'text-red' : ''}`}
              >
                First name*
              </label>
              <FormField
                name="firstname"
                label="firstname"
                type="text"
                placeholder="e.g. John"
                maxLength={25}
                register={register}
                className={`mb-3 w-[423px] md:w-[344px] sm:w-full ${errors.firstname ? '!border-[#FF3939] !shadow-none' : ''}`}
                error={errors.firstname && 'empty'}
                validationPattern={/^[a-zA-ZÀ-ÖØ-Ýà-öø-ý][a-zA-ZÀ-ÖØ-Ýà-öø-ý-]{1,49}$/}
                labelVisible={false}
                profilePage={true}
              />
            </div>

            <div className="flex items-center justify-between sm:flex-col sm:items-start">
              <label
                htmlFor="lastname"
                className={`text-grey sm:mb-0.5 sm:text-[12px] ${errors.lastname ? 'text-red' : ''}`}
              >
                Last name*
              </label>
              <FormField
                name="lastname"
                label="lastname"
                type="text"
                placeholder="e.g. Appleseed"
                maxLength={25}
                register={register}
                className={`mb-3 w-[423px] md:w-[344px] sm:w-full ${errors.lastname ? '!border-[#FF3939] !shadow-none' : ''}`}
                error={errors.lastname && 'wrong format'}
                validationPattern={/^[a-zA-ZÀ-ÖØ-Ýà-öø-ý][a-zA-ZÀ-ÖØ-Ýà-öø-ý'-]{1,49}$/}
                labelVisible={false}
                profilePage={true}
              />
            </div>

            <div className="flex items-center justify-between sm:flex-col sm:items-start">
              <label className={`mb-0.5 text-grey sm:text-[12px] ${errors.email ? 'text-red' : ''}`} htmlFor="email">
                Email
              </label>
              <FormField
                name="email"
                label="Email address"
                type="text"
                placeholder="e.g. alex@email.com"
                maxLength={40}
                register={register}
                className={`mb-3 w-[423px] md:w-[344px] sm:w-full ${errors.email ? '!border-[#FF3939] !shadow-none' : ''}`}
                validationPattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                labelVisible={false}
                required={false}
                error={errors.email && 'wrong format'}
                profilePage={true}
              />
            </div>
            <p className='text-p-small'>Changing your email will modify your credentials</p>
          </div>
 
          <FooterHome isDemo={isDemo} onSubmit={undefined} disableSubmit={isDemo} />
        </form>
      </div>
    </div>
  );
};

export default FormUpdateProfile;
