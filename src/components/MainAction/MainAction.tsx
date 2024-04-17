"use client";
import React from "react";
import Card from "../Card/Card";
import { usePathname, useRouter } from "next/navigation";
import { LocalStorage, isPassedOneDay } from "@/app/utils/appFunctions";
import { Account } from "@prisma/client";
import { resetAmount } from "@/app/db/queries/account";

const MainAction = ({
  id,
  account,
}: {
  id: string;
  account: Account | null;
}) => {
  const route = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between gap-4">
      {/* Enter Deposit */}
      <Card
        title="Deposit"
        onClick={async () => {
          const isDepositAmtReset =
            LocalStorage.getLocalStorage("isDepositAmtReset");
          const isAnotherDay = await isPassedOneDay({
            accountDetails: account!,
          });
          if (!isDepositAmtReset || isAnotherDay)
            await resetAmount(id, "deposit"); //only reset the first time or if its passed one day
          //set the withdraw rest counter to true, once it has been reset
          LocalStorage.setLocalStorage("isDepositAmtReset", true);
          return route.push(`${pathname}/deposit`);
        }}
        buttonName="Cash In"
      />
      {/* Enter Withdraw */}
      <Card
        title="Withdrawal"
        onClick={async () => {
          const isWithdrawAmtReset =
            LocalStorage.getLocalStorage("isWithdrawAmtReset");
          const isAnotherDay = await isPassedOneDay({
            accountDetails: account!,
          });
          if (!isWithdrawAmtReset || isAnotherDay)
            await resetAmount(id, "withdraw"); //only reset the first time or if its passed one day
          //set the withdraw rest counter to true, once it has been reset
          LocalStorage.setLocalStorage("isWithdrawAmtReset", true);
          return route.push(`${pathname}/withdrawal`);
        }}
        buttonName="Cash Out"
      />
    </div>
  );
};

export default MainAction;
