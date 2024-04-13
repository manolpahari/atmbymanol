"use client";
import React from "react";
import Card from "../Card/Card";
import { usePathname, useRouter } from "next/navigation";
import { resetWithDrawAmount } from "@/app/db/queries/account";

const MainAction = ({ id }: { id: string }) => {
  const route = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex justify-between gap-4">
      {/* Enter Deposit */}
      <Card
        title="Deposit"
        onClick={() => route.push(`${pathname}/deposit`)}
        buttonName="Cash In"
      />
      {/* Enter Withdraw */}
      <Card
        title="Withdrawal"
        onClick={async () => {
          await resetWithDrawAmount(id);
          return route.push(`${pathname}/withdrawal`);
        }}
        buttonName="Cash Out"
      />
    </div>
  );
};

export default MainAction;
