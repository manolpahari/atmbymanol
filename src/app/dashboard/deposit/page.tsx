'use client';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Spacing from '@/components/Spacing/Spacing';

function Page() {
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="max-w-5xl items-center justify-center">
        <h1 className="text-2xl">Deposits</h1>
        <Spacing h="3" />
        {/* shortcuts buttons*/}
        <div className="flex justify-between items-center gap-4 mt-2">
          <ButtonPrimary
            buttonName="$5"
            type="button"
            onClick={() => {
              console.log('decrement by 5');
            }}
          />
          <ButtonPrimary
            buttonName="$10"
            type="button"
            onClick={() => {
              console.log('decrement by 10');
            }}
          />
          <ButtonPrimary
            buttonName="$15"
            type="button"
            onClick={() => {
              console.log('decrement by 15');
            }}
          />
          <ButtonPrimary
            buttonName="$20"
            type="button"
            onClick={() => {
              console.log('decrement by 20');
            }}
          />
        </div>
        <Spacing h="3" />
        <div className="flex justify-between items-start gap-4">
          <ButtonPrimary
            buttonName="-"
            type="button"
            onClick={() => {
              console.log('increment by 5');
            }}
          />
          {/* Form Input */}
          <div>
            <form className="flex flex-col items-center gap-4">
              <input
                className="text-md text-black bg-white p-2 rounded-md"
                type="number"
                name="depositAmount"
                placeholder="$0"
                disabled
              />
              <ButtonPrimary
                buttonName="Complete Deposit"
                type="submit"
                onClick={() => {
                  console.log('decrement by 5');
                }}
              />
            </form>
          </div>
          <ButtonPrimary
            buttonName="+"
            type="button"
            onClick={() => {
              console.log('decrement by 5');
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Page;
