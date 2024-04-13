import { PageParams } from "@/app/dashboard/[id]/page";
import { fetchAccountByAccountNumber } from "@/app/db/queries/account";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: PageParams) {
  try {
    const accountNumber = Number(params.id);
    const accountDetails = await fetchAccountByAccountNumber(accountNumber);
    if (accountDetails) {
      return NextResponse.json({ ...accountDetails });
    }
  } catch (error) {
    return NextResponse.json(null);
  }
}

export async function POST(request: NextRequest, { params }: PageParams) {
  console.log({ params });
  const accountDetails = await prisma.account.update({
    where: {
      id: params.id,
    },
    data: {
      withDrawalAmount: 0,
    },
  });

  return NextResponse.json({ ...accountDetails });
}
