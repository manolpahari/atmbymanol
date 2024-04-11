import { Account } from '@prisma/client';
import { memo } from 'react';

const AccountDetails = memo(function deposits({
  accountData,
}: {
  accountData: Account[];
}) {
  if (accountData && accountData?.length === 0) {
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
          {accountData?.map((data, index) => {
            const serialNum = index + 1;
            const depositsDate = new Date(data?.updatedAT);
            const depositsAmount = data?.amount;
            return (
              <tr key={data.id}>
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

export default AccountDetails;
