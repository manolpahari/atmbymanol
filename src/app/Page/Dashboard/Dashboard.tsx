import MainAction from '@/components/MainAction/MainAction';
import Spacing from '@/components/Spacing/Spacing';
import TabsList from '@/components/TabsList/TabsList';
import React from 'react';

function Dashboard() {
  return (
    <div className="max-w-5xl w-full items-center justify-between">
      <div className="flex gap-2">
        <h1>Welcome:</h1>
        <span>Manol Sharma</span>
      </div>
      <Spacing h="6" />
      {/* Main Action */}
      <MainAction />

      <Spacing h="6" />
      {/*Tabs*/}
      <TabsList />
    </div>
  );
}

export default Dashboard;
