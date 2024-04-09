import { memo } from 'react';

interface DepositsDTO {
  id: string;
  amount: number;
  depositsCount: number;
  depositsDate: string;
}

const Deposits = memo(function deposits({
  depositsData,
}: {
  depositsData: DepositsDTO[];
}) {
  if (depositsData && depositsData?.length === 0) {
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
          {depositsData?.map((data, index) => {
            const serialNum = index + 1;
            const depositsDate = new Date(data?.depositsDate);
            const depositsAmount = data?.amount;
            return (
              <tr>
                <th>{serialNum}</th>
                <td>{depositsDate?.toLocaleDateString()}</td>
                <td>${depositsAmount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export default Deposits;
