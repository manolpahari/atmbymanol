import Header from '@/components/Header/Header';
import MainAction from '@/components/MainAction/MainAction';
import Spacing from '@/components/Spacing/Spacing';
import TabsList from '@/components/TabsList/TabsList';
import React from 'react';
import {  fetchAccountById } from '../../db/queries/account';

async function Page({ params }: { params: { id: string } }) {
  const account = await fetchAccountById((params?.id))
  return (
    <section className="flex flex-col items-center justify-between">
      <div className="max-w-5xl w-full items-center justify-between">
        <Header name={account?.name} accountType={account?.accountType} />
        <Spacing h="6" />
        {/* Main Action */}
        <MainAction />

        <Spacing h="6" />
        {/*Tabs*/}
        <TabsList />
      </div>
    </section>
  );
}

export default Page;
