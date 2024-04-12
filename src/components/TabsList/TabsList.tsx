import React from "react";
import TabContainer from "../Tabs/Tabs";
import AccountDetails from "../AccountDetails/AccountDetails";
import { fetchAccountById, fetchAccounts } from "@/app/db/queries/account";
import { PageParams } from "@/app/dashboard/[id]/page";

const TabsList = async ({ params }: PageParams) => {
  return (
    <TabContainer
      tabDetails={[
        {
          tabName: "Account Details",
          order: 1,
          children: <AccountDetails id={params?.id} />,
        },
      ]}
    />
  );
};

export default TabsList;
