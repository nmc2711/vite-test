import { Outlet } from 'react-router-dom';

import Navbar from '@/components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
