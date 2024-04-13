"use client";
import React from "react";
import Card from "../Card/Card";
import { usePathname, useRouter } from "next/navigation";

const MainAction = () => {
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
        onClick={() => route.push(`${pathname}/withdrawal`)}
        buttonName="Cash Out"
      />
    </div>
  );
};

export default MainAction;
