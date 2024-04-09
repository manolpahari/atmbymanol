import { memo } from 'react';

interface WithDrawsDTO {
  id: string;
  amount: number;
  withdrawsCount: number;
  withdrawsDate: string;
}

const Withdraws = memo(function Withdraws({
  withDrawsData,
}: {
  withDrawsData: WithDrawsDTO[];
}) {
  if (withDrawsData && withDrawsData?.length === 0) {
    <p>Data Not Available!</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {withDrawsData?.map((data, index) => {
            const serialNum = index + 1;
            const withdrawsDate = new Date(data?.withdrawsDate);
            const withdrawsAmount = data?.amount;
            return (
              <tr>
                <th>{serialNum}</th>
                <td>{withdrawsDate?.toLocaleDateString()}</td>
                <td>${withdrawsAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export default Withdraws;
