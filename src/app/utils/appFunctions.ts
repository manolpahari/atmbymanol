import { Account } from "@prisma/client";

export async function getAccountData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data as Account;
}
