import Header from "@/components/Header/Header";
import MainAction from "@/components/MainAction/MainAction";
import Spacing from "@/components/Spacing/Spacing";
import TabsList from "@/components/TabsList/TabsList";
import React from "react";
import { fetchAccountById } from "../../db/queries/account";
import Link from "next/link";

export type PageParams = { params: { id: string } };

async function Page({ params }: PageParams) {
  const account = await fetchAccountById(params?.id);
  return (
    <>
      <nav className="text-sm p-10 underline text-right">
        <Link href={"/"}>{"Go Back"}</Link>
      </nav>
      <section className="flex flex-col items-center justify-between md:mx-10 mx-4">
        <div className="max-w-5xl w-full items-center justify-between">
          <Header name={account?.name} accountType={account?.accountType} />
          <Spacing h="6" />
          {/* Main Action */}
          <MainAction id={params?.id} />
          <Spacing h="6" />
          {/*Tabs*/}
          <TabsList params={params} />
        </div>
      </section>
    </>
  );
}

export default Page;
