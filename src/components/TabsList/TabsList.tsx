import React from 'react';
import TabContainer from '../Tabs/Tabs';
import Deposits from '../Deposit/Deposit';
import Withdraws from '../Withdraw/Withdraw';

const TabsList = () => {
  return (
    <TabContainer
      tabDetails={[
        {
          tabName: 'Deposits',
          order: 1,
          children: (
            <Deposits
              depositsData={[
                {
                  amount: 20,
                  depositsDate: new Date().toLocaleString(),
                  id: crypto.randomUUID() as string,
                  depositsCount: 0,
                },
                {
                  amount: 10,
                  depositsDate: new Date().toLocaleString(),
                  id: crypto.randomUUID() as string,
                  depositsCount: 1,
                },
              ]}
            />
          ),
        },
        {
          tabName: 'Withdrawals',
          order: 2,
          children: (
            <Withdraws
              withDrawsData={[
                {
                  amount: 5,
                  withdrawsDate: new Date().toLocaleString(),
                  id: crypto.randomUUID() as string,
                  withdrawsCount: 1,
                },
                {
                  amount: 15,
                  withdrawsDate: new Date().toLocaleString(),
                  id: crypto.randomUUID() as string,
                  withdrawsCount: 2,
                },
              ]}
            />
          ),
        },
      ]}
    />
  );
};

export default TabsList;
