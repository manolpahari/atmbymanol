'use client';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Spacing from '@/components/Spacing/Spacing';
import { PageParams } from '../page';
import { useCallback, useState } from 'react';
import {  getAccountData } from '@/app/utils/appFunctions';

type ErrorType = {
  message: string;
  status: number
}

function Page({ params }: PageParams) {

  const [amount, setAmount] = useState('0')

  const handleDepositValidation = async (amount: number, id: string) => {
    let isValid = false;
    const account = await getAccountData(`/api/deposit/${id}`)
    const remainingBalance = amount + account?.amount;

    //check if the deposit amount is more than daily limit(1000) when account type is not credit
    if (account?.accountType !== 'credit' && amount > 1000) {
      throw {message: 'Maximum deposit allowed in a day is $1000', status: 422}
    } else if(account?.accountType === 'credit' && remainingBalance > 0) { //can't deposit more then negative credit balance
      throw {message: `You only have ${account.amount} on your credit balance`, status: 422}
    } else {
      isValid = true;
    }
    return isValid;
  }

  const handleShortcuts = useCallback((amount: number) => {
    if(amount) {
      setAmount((prevAmount) => {
        const existingAmount = Number(prevAmount)
        const newAmount = existingAmount + amount;
        return newAmount.toString()
      }) 
    }
    return;
  }, [])

  const handleDeposit = async () => {
    try {
      if(amount && amount !== '0') {
        // clear the input
        setAmount('');
        let formData = new FormData()
        formData.append('amount', (amount))
        console.log(formData.get('amount'))
        const isInputValid = await handleDepositValidation(Number(amount), params.id)
        if(isInputValid) {
  
          // fetch post request
          const req = await fetch(`/api/deposit/${params.id}`,
        {
            body: formData,
            method: "post"
        })
        const total = await req.json()
        console.log({ total })
      }
    }
      
    } catch (error: unknown) {
      const knownError = error as ErrorType
      alert(knownError.message)
    }
   
  }

  return (
    <section className="flex flex-col items-center ">
      <div className="max-w-5xl items-center justify-center">
        <h1 className="text-2xl">Deposits</h1>
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
            <form className="flex flex-col items-center gap-4" method='post'>
              <input
                className="text-md text-black bg-white p-2 rounded-md"
                type="text"
                name="depositAmount"
                placeholder="$0"
                maxLength={10}
                value={amount !== '0' ? amount : '' }
                onChange={(e) => setAmount(e.currentTarget.value)}
              />
              <ButtonPrimary
                buttonName="Complete Deposit"
                type="button"
                onClick={handleDeposit}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
