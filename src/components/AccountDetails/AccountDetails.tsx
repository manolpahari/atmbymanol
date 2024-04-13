import { fetchAccountById } from "@/app/db/queries/account";
import { appendDollarSign } from "@/app/utils/appFunctions";

const AccountDetails = async ({ id }: { id: string }) => {
  const accountData = await fetchAccountById(id); //fetch from db

  const serialNum = 1;
  const dateCreated = accountData?.createdAT;
  const balanceAmount = accountData?.amount.toString();
  const creditAmount = appendDollarSign(accountData?.amount);
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Date</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{serialNum}</th>
            <td>{dateCreated?.toLocaleDateString()}</td>
            <td>{creditAmount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AccountDetails;
