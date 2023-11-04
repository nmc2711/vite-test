import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center">
        <Outlet />
      </main>
    </>
  );
}

export default App;
