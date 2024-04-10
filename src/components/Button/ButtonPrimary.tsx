'use client';
import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonName: string;
  onClick: () => void;
}

const ButtonPrimary = ({
  buttonName,
  onClick,
  ...restButtonProps
}: ButtonProps) => {
  return (
    <div>
      <button
        className="btn bg-secondary"
        onClick={onClick}
        {...restButtonProps}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default ButtonPrimary;
