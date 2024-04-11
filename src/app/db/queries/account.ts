import type { Account } from '@prisma/client' // Importing the Account type from the Prisma client library.
import { prisma } from '@/lib/prisma'

import { notFound } from 'next/navigation' // Importing the notFound function from Next.js for handling 404 errors.

export async function fetchAccounts(): Promise<Account[]> {  // Function to fetch all accounts from the database.
    return await prisma.account.findMany({
        orderBy: [
            {
                updatedAT: 'desc',
            }
        ],
    })
}

export async function fetchAccountByAccountNumber(accountNumber: number): Promise<Account | null> { // Function to fetch a single account by its ID.
    const account = await prisma.account.findFirst({
        where: {
            accountNumber
        }
    })

    if (!account) {
        notFound() // If the account is not found, a 404 error is thrown.
    }

    return account
}