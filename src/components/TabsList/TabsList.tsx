import React from 'react';
import TabContainer from '../Tabs/Tabs';
import AccountDetails from '../AccountDetails/AccountDetails';
import { fetchAccounts } from '@/app/db/queries/account';


const TabsList = async () => {

  const accounts = await fetchAccounts() // Fetching the accounts from the database.
  
  return (
    <TabContainer
      tabDetails={[
        {
          tabName: 'All Transactions',
          order: 1,
          children: (
            <AccountDetails
              accountData={[...accounts]}
            />
          ),
        },
      ]}
    />
  );
};

export default TabsList;
