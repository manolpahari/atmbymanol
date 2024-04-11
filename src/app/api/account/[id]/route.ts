import { fetchAccountByAccountNumber } from "@/app/db/queries/account";
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
   try {
    const accountNumber = Number(params.id);
   const accountDetails = await fetchAccountByAccountNumber(accountNumber)
   if(accountDetails) {
       return NextResponse.json({ ...accountDetails })
   }
   } catch (error) {
    return  NextResponse.json(null)
   }
  }
  

