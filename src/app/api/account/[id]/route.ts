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
  const body = await request.json();
  console.log({ body });
  const type = body?.type;
  let accountDetails;
  if (type === "deposit") {
    accountDetails = await prisma.account.update({
      where: {
        id: params.id,
      },
      data: {
        depositAmount: 0,
      },
    });
  } else if (type === "withdraw") {
    accountDetails = await prisma.account.update({
      where: {
        id: params.id,
      },
      data: {
        withDrawalAmount: 0,
      },
    });
  } else {
    accountDetails = {};
  }
  return NextResponse.json({ ...accountDetails });
}
