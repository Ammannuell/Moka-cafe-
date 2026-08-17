import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out';
  const sizeStyles = 'px-8 py-4 text-sm tracking-wide rounded-full';
  
  const variants = {
    primary: 'bg-coffee-950 text-white hover:bg-coffee-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]',
    secondary: 'bg-coffee-100 dark:bg-coffee-800 transition-colors duration-300 text-coffee-950 dark:text-white transition-colors duration-300 hover:bg-coffee-200',
    outline: 'border border-coffee-950 text-coffee-950 dark:text-white transition-colors duration-300 hover:bg-coffee-950 hover:text-white',
    ghost: 'text-coffee-950 dark:text-white transition-colors duration-300 hover:text-coffee-600',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:')) {
      return (
        <a href={href} className={combinedStyles}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
