import Spacing from '@/components/Spacing/Spacing';
import TabsList from '@/components/TabsList/TabsList';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="max-w-5xl w-full items-center justify-between">
        <div className="flex gap-2">
          <h1>Welcome:</h1>
          <span>Manol Sharma</span>
        </div>
        <Spacing h="6" />
        {/*Tabs*/}
        <TabsList />
      </div>
    </main>
  );
}
