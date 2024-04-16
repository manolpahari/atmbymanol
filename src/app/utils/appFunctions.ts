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

export const appendDollarSign = (amount: number | undefined) => {
  if (amount) {
    const isNegativeNum = Math.sign(amount) === -1;
    const amountStr = amount.toString();
    return isNegativeNum
      ? amountStr?.replace("-", "-$")
      : amountStr?.replace("", "$");
  }
  return;
};

export const generateGoBackLink = (pathName: string) => {
  let href = "";
  const pathNames = pathName.split("/").filter((path) => path);
  pathNames.pop();
  if (pathNames.length > 1) {
    href = pathNames.join("/").replace("", "/"); //replace method with empty target appends at the beginning of string
  } else {
    href = pathNames.toString().replace("", "/");
  }

  return href;
};

export class LocalStorage {
  static setLocalStorage(key: string, value: unknown): void {
    return localStorage.setItem(key, JSON.stringify(value));
  }
  static getLocalStorage(key: string) {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
  }
  static removeLocalStorage(key: string): void {
    return localStorage.removeItem(key);
  }
  static clearLocalStorage(): void {
    return localStorage.clear();
  }
}

export const getAvailableBalance = ({
  accountInfo,
  inputAmount,
}: {
  accountInfo: Account;
  inputAmount: number;
}) => {
  if (accountInfo?.accountType === "credit") {
    return accountInfo.creditLimit - inputAmount;
  } else {
    return accountInfo.amount - inputAmount;
  }
};
