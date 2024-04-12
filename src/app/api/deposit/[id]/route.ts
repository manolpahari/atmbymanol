import { PageParams } from "@/app/dashboard/[id]/page";
import { fetchAccountById, updateDeposit } from "@/app/db/queries/account";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: PageParams) {
  try {
    const accountId = params.id;
    const accountDetails = await fetchAccountById(accountId);
    if (accountDetails) {
      return NextResponse.json({ ...accountDetails });
    }
  } catch (error) {
    return NextResponse.json(null);
  }
}

export async function POST(request: NextRequest, { params }: PageParams) {
  try {
    console.log({ params });
    const formData = await request.formData();
    const amount = Number(formData.get("amount"));
    const updatedAccountDetails = await updateDeposit({
      params,
      depositAmount: amount,
    });
    return NextResponse.json({ updatedAccountDetails });
  } catch (error) {
    if (error) console.log(error);
  }
}
