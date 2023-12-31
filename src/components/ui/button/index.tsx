import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="cursor-pointer rounded-lg border border-transparent bg-[#f9f9f9] px-5 py-2 font-medium hover:border-primary focus:outline-1 dark:bg-[#1a1a1a]"
    >
      {children}
    </button>
  );
}
