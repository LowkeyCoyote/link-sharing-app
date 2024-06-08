import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface FormFieldProps extends HTMLAttributes<HTMLAllCollection> {
  label: string;
  name: string;
  type: string;
  icon?: boolean;
  labelVisible?: boolean;
  placeholder: string;
  error?: string;
  register: any;
  validationPattern?: RegExp;
  maxLength?: number;
  required?: boolean;
  profilePage?: boolean;
}

const FormField = ({
  label,
  labelVisible,
  name,
  type,
  icon,
  placeholder,
  className,
  error,
  register,
  validationPattern,
  maxLength,
  required = true,
  profilePage = false,
}: FormFieldProps) => {
  return (
    <div className={`flex flex-col ${profilePage ? 'sm:w-full' : ''}`}>
      {labelVisible ? (
        <label className={`${error ? `text-red` : `text-grey`} pb-1 text-p-small`} htmlFor={name}>
          {label}
        </label>
      ) : (
        ''
      )}
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        className={twMerge(
          `${icon ? `bg-${icon} bg-no-repeat  pl-11 text-dark-grey  ${error ? `!border-[#FF3939]` : ``}` : `px-4`}`,
          className
        )}
        id={name}
        {...register(name, {
          required: required,
          maxLength: maxLength,
          pattern: validationPattern,
        })}
        aria-invalid={error ? 'true' : 'false'}
      />
    </div>
  );
};

export default FormField;
