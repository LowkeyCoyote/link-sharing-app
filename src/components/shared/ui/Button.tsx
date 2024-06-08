import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  link?: string;
  onClick?: () => void;
}

const Button = ({ children, variant, link, onClick, className }: ButtonProps) => {
  const navigate = useNavigate();

  const actionOnButtonClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      navigate(link);
    }
  };

  return (
    <button className={cn(buttonVariants({ variant, className }))} onClick={actionOnButtonClick}>
      {children}
    </button>
  );
};

const buttonVariants = cva('py-4 duration-100 ease-in-out text-center font-semibold cursor-pointer rounded-lg', {
  variants: {
    variant: {
      primary: 'bg-purple text-white hover:bg-purple-hover',
      secondary: 'bg-white text-purple border-2 border-purple hover:bg-light-purple',
      logout: 'bg-white text-red border-2 border-red hover:bg-red hover:bg-opacity-10',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export default Button;
