import React from "react";
import TabContainer from "../Tabs/Tabs";
import AccountDetails from "../AccountDetails/AccountDetails";
import { fetchAccountById, fetchAccounts } from "@/app/db/queries/account";
import { PageParams } from "@/app/dashboard/[id]/page";

const TabsList = async ({ params }: PageParams) => {
  const accountDetails = await fetchAccountById(params.id);
  return (
    <TabContainer
      tabDetails={[
        {
          tabName: "Account Details",
          order: 1,
          children: <AccountDetails id={params?.id} />,
        },
        {
          tabName: "Show Balance",
          order: 2,
          children: (
            <h3>
              Your account balance is <strong>${accountDetails?.amount}</strong>
            </h3>
          ),
        },
      ]}
    />
  );
};

export default TabsList;
