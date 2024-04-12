import { Account } from "@prisma/client";
import dayjs from "dayjs";

export async function getAccountData(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  return data as Account;
}

export async function isPassedOneDay({
  accountDetails,
}: {
  accountDetails: Account;
}) {
  if (accountDetails?.updatedAT) {
    const todaysDate = dayjs();
    const lastUpdatedDate = dayjs(accountDetails.updatedAT);
    const daysDiff = todaysDate.diff(lastUpdatedDate, "day");
    const isMoreThanOneDay = daysDiff >= 1;
    return isMoreThanOneDay;
  }
  return;
}
