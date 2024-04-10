import React from 'react';

const Header = ({
  firstName,
  lastName,
  accountType,
}: {
  firstName: string;
  lastName: string;
  accountType: string;
}) => {
  return (
    <div className="flex justify-between md:text-xl text-lg">
      <h1>
        Welcome: {firstName} {lastName}{' '}
      </h1>
      <h1>Account: {accountType}</h1>
    </div>
  );
};

export default Header;
