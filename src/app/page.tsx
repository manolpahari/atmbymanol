import Deposits from '@/components/Deposit/Deposit';
import TabContainer from '@/components/Tabs/Tabs';
import Withdraws from '@/components/Withdraw/Withdraw';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-5xl w-full items-center justify-between">
        <div className="flex gap-2">
          <h1>Welcome:</h1>
          <span>Manol Sharma</span>
        </div>
        {/*Tabs*/}
        <TabContainer
          tabDetails={[
            {
              tabName: 'Deposits',
              order: 1,
              children: (
                <Deposits
                  depositsData={[
                    {
                      amount: 20,
                      depositsDate: new Date().toLocaleString(),
                      id: crypto.randomUUID() as string,
                      depositsCount: 0,
                    },
                    {
                      amount: 10,
                      depositsDate: new Date().toLocaleString(),
                      id: crypto.randomUUID() as string,
                      depositsCount: 1,
                    },
                  ]}
                />
              ),
            },
            {
              tabName: 'Withdrawals',
              order: 1,
              children: (
                <Withdraws
                  withDrawsData={[
                    {
                      amount: 5,
                      withdrawsDate: new Date().toLocaleString(),
                      id: crypto.randomUUID() as string,
                      withdrawsCount: 1,
                    },
                    {
                      amount: 15,
                      withdrawsDate: new Date().toLocaleString(),
                      id: crypto.randomUUID() as string,
                      withdrawsCount: 2,
                    },
                  ]}
                />
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
