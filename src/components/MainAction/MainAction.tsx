'use client';
import React from 'react';
import Card from '../Card/Card';

const MainAction = () => {
  return (
    <div className="flex justify-between">
      {/* Enter Deposit */}
      <Card
        title="Deposit"
        onClick={() => console.log('take me to deposit route')}
        buttonName="Cash In"
      />
      {/* Enter Withdraw */}
      <Card
        title="Withdraw"
        onClick={() => console.log('take me to withdraw route')}
        buttonName="Cash Out"
      />
    </div>
  );
};

export default MainAction;
