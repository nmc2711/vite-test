import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="fixed h-6 w-full p-10">
      <div className="flex h-full items-center justify-between">
        <h1 className="text-xl font-semibold">React + TypeScript Starter</h1>
        <nav>
          <ul className="flex gap-x-6">
            <li>
              <NavLink to="/" className="text-black dark:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/learn-more" className="text-black dark:text-white">
                Learn More
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
