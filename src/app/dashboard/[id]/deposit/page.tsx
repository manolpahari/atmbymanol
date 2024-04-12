'use client';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Spacing from '@/components/Spacing/Spacing';
import { PageParams } from '../page';
import { useRef, useState } from 'react';

function Page({ params }: PageParams) {
  // const amountRef = useRef<HTMLInputElement>(null)
  const [amount, setAmount] = useState('0')

  const handleShortcuts = (amount: number) => {
    if(amount) {
      setAmount((prevAmount) => {
        const existingAmount = Number(prevAmount)
        const newAmount = existingAmount + amount;
        return newAmount.toString()
      }) 
    }
    return;
  }

  const handleDeposit = async () => {
    console.log(amount)
    if(amount !== '0') {
      // clear the input
      setAmount('');
    //  const fromData = formDataPrepForSubmission([{ key: 'amount', value: amount}])
      let formData = new FormData()
      formData.append('amount', (amount))
      console.log(formData.get('amount'))
      // fetch post request
      const req = await fetch(`/api/account/${params.id}`,
    {
        body: formData,
        method: "post"
    })
    const total = await req.json()
    console.log({ total })
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
                maxLength={4}
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
