import Login from '@/components/Login/Login';

export default async function Home() {
 
  return (
    <main className="flex flex-col items-center justify-between">
      {/* Login */}
    <div className="flex flex-col items-center justify-between">
      <div className="max-w-5xl w-full items-center justify-between">
        <Login/>
      </div>
    </div>
    </main>
  );
}
