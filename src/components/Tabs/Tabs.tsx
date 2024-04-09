'use client';
import React, { Children, useCallback, useState, useTransition } from 'react';

type TabsContainerProps = {
  tabName: string;
  children: React.ReactNode;
  order: number;
};

type TabProps = {
  tabName: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

export const Tab = ({
  children,
  isActive,
  tabName,
  onClick,
}: Omit<TabProps, 'order'>) => {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab [--tab-bg:indigo] [--tab-border-color:white] text-primary"
        aria-label={`${tabName}`}
        checked={isActive ? true : false}
        onClick={onClick}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {children}
      </div>
    </>
  );
};

export default function TabContainer({
  tabDetails,
}: {
  tabDetails: TabsContainerProps[];
}) {
  const sortedTabsAsc = tabDetails?.sort((a, b) => a.order - b.order); //sort tabs by order number
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState<TabsContainerProps>(sortedTabsAsc[0]); //set the first tab as default

  console.log({ tab });

  const selectTab = useCallback((nextTab: TabsContainerProps) => {
    startTransition(() => {
      setTab(nextTab);
    });
  }, []);

  if (tabDetails && tabDetails.length === 0) {
    return <></>;
  }
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {sortedTabsAsc?.map((tabData: TabsContainerProps, index) => {
        return (
          <Tab
            key={`${tabData.tabName} - ${index}`}
            isActive={tab.tabName === tabData.tabName}
            onClick={() => selectTab(tabData)}
            children={tabData.children}
            tabName={tabData.tabName}
          />
        );
      })}
    </div>
  );
}
