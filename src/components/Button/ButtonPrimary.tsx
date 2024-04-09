'use client';
import React from 'react';

const ButtonPrimary = ({
  buttonName,
  onClick,
}: {
  buttonName: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <button className="btn bg-purple-900" onClick={onClick}>
        {buttonName}
      </button>
    </div>
  );
};

export default ButtonPrimary;
