import type { Account } from "@prisma/client"; // Importing the Account type from the Prisma client library.
import { prisma } from "@/lib/prisma";

import { notFound } from "next/navigation"; // Importing the notFound function from Next.js for handling 404 errors.
import { PageParams } from "@/app/dashboard/[id]/page";

type DepositType = "deposit" | "withdraw";

export async function fetchAccounts(): Promise<Account[]> {
  // Function to fetch all accounts from the database.
  return await prisma.account.findMany({
    orderBy: [
      {
        updatedAT: "desc",
      },
    ],
  });
}

export async function fetchAccountByAccountNumber(
  accountNumber: number
): Promise<Account | null> {
  // Function to fetch a single account by its ID.
  const account = await prisma.account.findFirst({
    where: {
      accountNumber,
    },
  });

  if (!account) {
    notFound(); // If the account is not found, a 404 error is thrown.
  }

  return account;
}

export async function fetchAccountById(id: string): Promise<Account | null> {
  // Function to fetch a single account by its ID.
  const account = await prisma.account.findFirst({
    where: {
      id,
    },
  });

  if (!account) {
    notFound(); // If the account is not found, a 404 error is thrown.
  }

  return account;
}

export async function updateDeposit({
  params,
  depositAmount,
}: {
  params: PageParams["params"];
  depositAmount: number;
}) {
  const account = await fetchAccountById(params.id);
  if (account?.id) {
    const accountDetails = await prisma.account.update({
      where: {
        id: params.id,
      },
      data: {
        amount: {
          increment: depositAmount,
        },
        transType: "deposit",
        depositAmount: {
          increment: depositAmount,
        },
      },
    });
    return accountDetails;
  }
}

export async function updateWithdrawal({
  params,
  withdrawalAmount,
}: {
  params: PageParams["params"];
  withdrawalAmount: number;
}) {
  const account = await fetchAccountById(params.id);
  if (account?.id) {
    const accountDetails = await prisma.account.update({
      where: {
        id: params.id,
      },
      data: {
        amount: {
          decrement: withdrawalAmount,
        },
        transCount: {
          increment: 1,
        },
        transType: "withdraw",
        withDrawalAmount: {
          increment: withdrawalAmount,
        },
        creditLimit: {
          decrement: account.accountType === "credit" ? withdrawalAmount : 0,
        },
      },
    });
    return accountDetails;
  }
}

export const resetAmount = async (id: string, type: DepositType) => {
  try {
    const req = await fetch(`/api/account/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: type }),
    });
    const account: Account = await req.json();
    if (account?.id) {
    }
  } catch (error) {
    // throw { message: "Unable to reset withdrawal Amount", status: 500 };
    console.log({ error });
  }
};
