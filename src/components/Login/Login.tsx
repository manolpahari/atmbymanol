"use client";
import React, { useRef, useState } from "react";
import ButtonPrimary from "../Button/ButtonPrimary";
import { useRouter } from "next/navigation";
import { Account } from "@prisma/client";
import { LocalStorage, isPassedOneDay } from "@/app/utils/appFunctions";

const Login = () => {
  const accountNumberInputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const removeErrorMessage = () => setErrorMessage("");

  const router = useRouter();

  const handleButtonClick = async () => {
    const accountNumber = accountNumberInputRef?.current?.value;
    const resetCount = Number(LocalStorage.getLocalStorage("resetCount"));
    if (accountNumber) {
      const request = await fetch(`/api/account/${accountNumber}`);
      const account: Account = await request.json();
      if (!account) {
        return setErrorMessage(
          "Account not found, please enter valid account number!"
        );
      }
      //route the user to the dashboard
      //set the local storage with isWithdrawAmtReset flag to false
      const isMoreThanOneDay = await isPassedOneDay({
        accountDetails: account,
      });
      if (!isMoreThanOneDay && !resetCount) {
        //set isWithdrawAmtReset flag to false
        LocalStorage.setLocalStorage("isWithdrawAmtReset", false);
        //set isDepositAmtReset flag to false
        LocalStorage.setLocalStorage("isDepositAmtReset", false);
        // increment the resetCount by one, everyTime there is a reset
        LocalStorage.setLocalStorage(
          "resetCount",
          resetCount ? resetCount + 1 : 1
        );
      }

      return router.push(`/dashboard/${account.id}`);
    } else {
      return setErrorMessage("Account number is required to proceed!");
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <h1 className="text-3xl mb-4 font-extrabold">
        Welcome to the Galaxy ATM
      </h1>
      <h2 className="md:text-lg text-md">
        Please enter your account number to continue!
      </h2>
      <div className="max-w-6xl flex items-center justify-between gap-2">
        <input
          className="text-md text-black bg-white p-2 rounded-md"
          type="text"
          name="accountNumber"
          placeholder="Account Number"
          ref={accountNumberInputRef}
          maxLength={5}
          onChange={removeErrorMessage}
        />
        <ButtonPrimary
          buttonName="Go"
          type="button"
          onClick={handleButtonClick}
        />
      </div>
      {errorMessage && <p className="text-red-500 font-thin">{errorMessage}</p>}
    </div>
  );
};

export default Login;
