import Login from '@/components/Login/Login';
import { fetchAccountByAccountNumber, fetchAccounts } from './db/queries/account';

export default async function Home() {
  const accounts = await fetchAccounts() // Fetching the accounts from the database.
  const account = await fetchAccountByAccountNumber(1) // Fetching the accounts from the database.
 console.log({ account})

  return (
    <main className="flex flex-col items-center justify-between">
      {/* Login */}
      {accounts.map(account => {
        return <pre key={account.id}>{account.name}</pre>
      })}
      <Login />
    </main>
  );
}
