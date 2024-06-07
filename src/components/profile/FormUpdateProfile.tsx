import { useRef, useState, useEffect, ChangeEvent } from 'react';
import Button from '@components/shared/ui/Button';
import FormField from '@components/shared/ui/FormField';
import { updateCurrentUser } from '@redux/authSlice';
import { AppDispatch } from '@redux/store';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { UpdateFormType } from 'src/types/types';
import iconUploadImage from '@assets/shared/icon/icon-upload-image.svg';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const FormUpdateProfile = () => {

  const userInfo = useSelector((state: any) => state.authSlice.currentUser);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

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
      image: undefined,
    },
  });

  useEffect(() => {
    console.log('hello');
    if (userInfo) {
      reset({
        firstname: userInfo.firstname,
        lastname: userInfo.lastname,
        email: userInfo.email,
        image: undefined,
      });
      console.log('hello');
      setImagePreview(userInfo.url);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [userInfo, reset]);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const img = new Image();
      img.onload = function () {
        const image = this as HTMLImageElement;
        if (image.width <= 1024 && image.height <= 1024) {
          setSelectedImage(file);
          setImagePreview(imageUrl);
        } else {
          toast.warning('Image width and height must be inferior to 1024 pixel');
        }
      };
      img.src = imageUrl;
    }
  };

  const onSubmit = async (data: UpdateFormType) => {
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
      toast.success('Your profile has been modified', {
        position: 'bottom-right',
      });
      window.location.reload();
    } catch (error) {
      toast.error('An error occurred while updating profile', {
        position: 'bottom-right',
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-10 sm:p-6 rounded-lg bg-white">
        <h1 className="pb-2">Profile Details</h1>
        <p className="pb-10">Add your details to create a personal touch to your profile.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-5 rounded-xl bg-light-grey mb-6">
            <div className="flex items-center justify-between sm:flex-col sm:items-start">
              <label className="text-grey font-medium sm:pb-4" htmlFor="image">
                Profile Picture
              </label>
              <div
                onClick={handleDivClick}
                className={`h-[193px] w-[193px] bg-light-purple overflow-hidden rounded-xl cursor-pointer flex flex-col items-center justify-center bg-no-repeat bg-center bg-cover relative
                md:ml-10 sm:ml-0 sm:mb-6
                `}
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
                <p className={`text-purple font-semibold ${imagePreview ? `text-white z-10` : ``}`}>+ Upload Image</p>
                {imagePreview && <div className="overlay-dark-profile"></div>}
              </div>
              <p className="max-w-[200px] text-p-small sm:max-w-full">Image must be below 1024x1024px. Use PNG or JPG format.</p>
            </div>
          </div>

          <div className="p-5 mb-28 rounded-xl bg-light-grey sm:mb-6 ">
            <div className="flex justify-between items-center sm:flex-col sm:items-start sm:w-full">
              <label htmlFor="firstname" className={`text-grey sm:mb-0.5 sm:text-[12px] ${errors.firstname ? 'text-red' : ''}`}>
                First name* 
              </label>
              <FormField
                name="firstname"
                label="firstname"
                type="text"
                placeholder="e.g. John"
                maxLength={40}
                register={register}
                className={`mb-3 w-[423px] md:w-[344px] sm:w-full ${errors.firstname ? '!border-[#FF3939] !shadow-none' : ''}`}
                error={errors.firstname && 'empty'}
                validationPattern={/^[A-ZÀ-ÖØ-Ýà-öø-ý][a-zA-ZÀ-ÖØ-Ýà-öø-ý-]{1,49}$/}
                labelVisible={false}
                profilePage = {true}

              />
            </div>

            <div className="flex justify-between items-center sm:flex-col sm:items-start ">
              <label htmlFor="lastname" className={`text-grey sm:mb-0.5 sm:text-[12px] ${errors.lastname ? 'text-red' : ''}`}>
                Last name* 
              </label>
              <FormField
                name="lastname"
                label="lastname"
                type="text"
                placeholder="e.g. Appleseed"
                maxLength={40}
                register={register}
                className={`mb-3 w-[423px] md:w-[344px] sm:w-full ${errors.lastname ? '!border-[#FF3939] !shadow-none' : ''}`}
                error={errors.lastname && 'wrong format'}
                validationPattern={/^[A-ZÀ-ÖØ-Ýà-öø-ý][a-zA-ZÀ-ÖØ-Ýà-öø-ý'-]{1,49}$/}
                labelVisible={false}
                profilePage = {true}
              />
            </div>

            <div className="flex justify-between items-center sm:flex-col sm:items-start">
              <label className={`text-grey mb-0.5 sm:text-[12px] ${errors.email ? 'text-red' : ''}`} htmlFor="email">
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
                profilePage = {true}

              />
            </div>
          </div>
          <div className="border-t border-border justify-end flex -px-10 self-end">
            <Button type="submit" className="px-7 mr-10 mt-6 sm:w-full sm:mx-auto">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUpdateProfile;
