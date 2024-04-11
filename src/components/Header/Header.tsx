import React from 'react';

const Header = ({
  name,
  accountType,
}: {
  name: string | undefined;
  accountType: string | undefined;
}) => {
  return (
    <div className="flex justify-between md:text-xl text-lg">
      <h1>
        Welcome: {name}
      </h1>
      <h1>Account: {accountType}</h1>
    </div>
  );
};

export default Header;
