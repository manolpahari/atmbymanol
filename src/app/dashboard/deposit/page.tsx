'use client';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Spacing from '@/components/Spacing/Spacing';

function Page() {
  return (
    <section className="flex flex-col justify-center items-center ">
      <div className="max-w-5xl items-center justify-center">
        <h1 className="text-2xl">Deposits</h1>
        <Spacing h="3" />
        <form>
          <div className="flex justify-between items-center gap-4">
            <ButtonPrimary
              buttonName="-"
              type="button"
              onClick={() => {
                console.log('increment by 5');
              }}
            />
            <input
              className="text-md text-black bg-white p-2 rounded-md"
              type="text"
              name="depositAmount"
              placeholder="$0"
            />
            <ButtonPrimary
              buttonName="+"
              type="button"
              onClick={() => {
                console.log('decrement by 5');
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Page;
