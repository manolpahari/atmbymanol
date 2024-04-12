-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "accountType" TEXT NOT NULL,
    "creditLimit" INTEGER NOT NULL DEFAULT 0,
    "createdAT" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" TIMESTAMP(3) NOT NULL,
    "depositAmount" INTEGER NOT NULL DEFAULT 0,
    "withDrawalAmount" INTEGER NOT NULL DEFAULT 0,
    "transType" TEXT,
    "transCount" INTEGER,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);
