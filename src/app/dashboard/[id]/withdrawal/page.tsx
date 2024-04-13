"use client";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import Spacing from "@/components/Spacing/Spacing";
import { PageParams } from "../page";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  generateGoBackLink,
  getAccountData,
  isPassedOneDay,
} from "@/app/utils/appFunctions";
import { Account } from "@prisma/client";
import { Modal } from "@/components/Modal/Modal";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type ErrorType = {
  message: string;
  status: number;
};

function Page({ params }: PageParams) {
  const [inputAmount, setInputAmount] = useState("0");
  const [accountDetails, setAccountDetails] = useState<Account>();
  const router = useRouter();

  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const asyncFetchAccount = async () => {
      const accountDetails = await getAccountData(`/api/withdraw/${params.id}`);
      return setAccountDetails(accountDetails);
    };
    asyncFetchAccount();
  }, [params.id]);

  const handleOpenModal = useCallback(() => {
    if (modalRef.current) modalRef.current.showModal();
  }, []);

  const handleWithdrawalValidation = async (
    amount: number,
    accountDetails: Account
  ) => {
    let isValid = false;

    const availableCreditLimit =
      accountDetails?.creditLimit + accountDetails?.amount;
    const hasReachedOutMaxCredit =
      availableCreditLimit - amount < 0 ? true : false;
    const availableBalance = accountDetails?.amount - amount;

    const isMoreThanOneDay = await isPassedOneDay({
      accountDetails: accountDetails,
    });

    //check if the Withdrawal amount is more than daily limit(1000) when account type is not credit
    if (accountDetails?.accountType == "credit" && hasReachedOutMaxCredit) {
      throw {
        message: "Maximum credit limit reached",
        status: 422,
      };
    } else if (amount % 5 !== 0) {
      throw {
        message: "Please enter the amount dispensable as $5 bills ",
        status: 422,
      };
    } else if (amount > 200) {
      throw {
        message: "You can only withdraw $200 at this time",
        status: 422,
      };
    } else if (availableBalance < 0) {
      throw {
        message: "Not Enough Balance",
        status: 422,
      };
    } else if (!isMoreThanOneDay && accountDetails?.withDrawalAmount === 400) {
      throw {
        message: "You have reached the max withdraw limit for today",
        status: 422,
      };
    } else {
      isValid = true;
    }
    return isValid;
  };

  const handleShortcuts = useCallback((amount: number) => {
    if (amount) {
      setInputAmount((prevAmount) => {
        const existingAmount = Number(prevAmount);
        const newAmount = existingAmount + amount;
        return newAmount.toString();
      });
    }
    return;
  }, []);

  const handleWithdrawal = async (amount: number, accountDetails: Account) => {
    try {
      if (inputAmount && inputAmount !== "0") {
        // clear the input
        setInputAmount("");
        let formData = new FormData();
        formData.append("amount", inputAmount);

        const isInputValid = await handleWithdrawalValidation(
          amount,
          accountDetails
        );
        if (isInputValid) {
          // fetch post request
          const req = await fetch(`/api/withdraw/${params.id}`, {
            body: formData,
            method: "post",
          });
          const account: Account = await req.json();
          if (account?.id) {
            //  setAccount Details with latest update from post
            setAccountDetails(account);
            // show a success message
            return handleOpenModal();
          }
        }
      } else {
        throw { message: "Please enter amount to proceed further" };
      }
    } catch (error: unknown) {
      const knownError = error as ErrorType;
      alert(knownError.message);
    }
  };

  return (
    <>
      <div className="text-sm p-10 underline text-center">
        <button
          className="bg-transparent border-none underline cursor-pointer"
          onClick={() => {
            router.back();
            router.refresh();
          }}
        >
          Go back
        </button>
      </div>
      <section className="flex flex-col items-center ">
        <div className="max-w-5xl items-center justify-center">
          {/* Modal to display after success*/}
          <Modal
            ref={modalRef}
            modalTitle="Success!"
            modalDescription="Please grab your cash from the tray"
            buttonName="close"
          />
          <h1 className="text-2xl">Withdrawals</h1>
          <span className="font-light">Choose from options below</span>
          <Spacing h="3" />
          {/* shortcuts buttons*/}
          <div className="flex justify-between items-center gap-4 mt-2">
            <ButtonPrimary
              buttonName="+$5"
              type="button"
              onClick={() => handleShortcuts(5)}
            />
            <ButtonPrimary
              buttonName="+$10"
              type="button"
              onClick={() => handleShortcuts(10)}
            />
            <ButtonPrimary
              buttonName="+$20"
              type="button"
              onClick={() => handleShortcuts(20)}
            />
            <ButtonPrimary
              buttonName="+$100"
              type="button"
              onClick={() => handleShortcuts(100)}
            />
          </div>
          <Spacing h="3" />
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <Spacing h="3" />
          </div>
          <div className="flex justify-center items-start gap-4">
            {/* Form Input */}
            <div>
              <form className="flex flex-col items-center gap-4" method="post">
                <div className="flex flex-col items-start">
                  <label htmlFor="amount" className="text-lg mr-2">
                    Enter Amount
                  </label>
                  <input
                    className="text-md text-black bg-white p-2 rounded-md"
                    type="text"
                    name="WithdrawalAmount"
                    placeholder="$0"
                    maxLength={10}
                    value={inputAmount !== "0" ? inputAmount : ""}
                    onChange={(e) => setInputAmount(e.currentTarget.value)}
                  />
                </div>
                <ButtonPrimary
                  buttonName="Cash Out"
                  type="button"
                  onClick={() => {
                    return handleWithdrawal(
                      Number(inputAmount),
                      accountDetails!
                    );
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
