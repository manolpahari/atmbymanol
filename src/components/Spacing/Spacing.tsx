import React from 'react';

type SpacingProps = {
  h?: '1' | '2' | '3' | '4' | '5' | '6';
  className?: string;
};

const Spacing = ({ h, className }: SpacingProps) => {
  switch (h) {
    case '1':
      return <div className="mt-1"></div>;
    case '2':
      return <div className="mt-2"></div>;
    case '3':
      return <div className="mt-4"></div>;
    case '4':
      return <div className="mt-6"></div>;
    case '5':
      return <div className="mt-8"></div>;
    case '6':
      return <div className="mt-16"></div>;
    default:
      return <div className={className}></div>;
  }
};

export default Spacing;
