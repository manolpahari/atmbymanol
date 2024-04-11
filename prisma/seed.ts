import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const account = await prisma.account.createMany({
 
    data: [{
      accountNumber: 1,
      name: 'Johns Checking',
      amount: 1000,
      accountType: 'checking'
    },
    {
        accountNumber: 2,
        name: 'Janes Savings',
        amount: 2000,
        accountType: 'savings'
      },
      {
        accountNumber: 3,
        name: 'Jills Credit',
        amount: -3000,
        accountType: 'credit',
        creditLimit: 10000
      },
      {
        accountNumber: 4,
        name: 'Bobs Checking',
        amount: 4000,
        accountType: 'checking',
      },
      {
        accountNumber: 5,
        name: 'Bills Savings',
        amount: 50000,
        accountType: 'savings',
      },
      {
        accountNumber: 6,
        name: 'Bills Credit',
        amount: -60000,
        accountType: 'credit',
        creditLimit: 60000
      },
]
  })
  console.log({ account })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })


//   (1, 'Johns Checking', 1000, 'checking'),
//     (2, 'Janes Savings', 2000, 'savings'),
//     (3, 'Jills Credit', -3000, 'credit', 10000),
//     (4, 'Bobs Checking', 40000, 'checking'),
//     (5, 'Bills Savings', 50000, 'savings'),
//     (6, 'Bills Credit', -60000, 'credit', 60000),
//     (7, 'Nancy Checking', 70000, 'checking'),
//     (8, 'Nancy Savings', 80000, 'savings'),
//     (9, 'Nancy Credit', -90000, 'credit', 100000);