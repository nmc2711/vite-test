import { useState } from 'react';
import { Link } from 'react-router-dom';

import reactLogo from '@/assets/react.svg';
import tsLogo from '@/assets/ts.svg';
import Button from '@/components/ui/button';

export default function Homepage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex justify-center">
        <Link
          to="https://react.dev"
          target="_blank"
          rel="noreferrer"
          data-testid="react-link"
        >
          <img
            src={reactLogo}
            className="h-24 animate-spin-slow p-6"
            alt="React logo"
          />
        </Link>
        <Link
          to="https://typescriptlang.org"
          target="_blank"
          rel="noreferrer"
          data-testid="ts-link"
        >
          <img src={tsLogo} className="h-24 p-6" alt="TS logo" />
        </Link>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">React + TypeScript</h1>
        <h2 className="text-3xl font-bold">Starter Template</h2>
      </div>

      <p className="mt-4 text-center text-base opacity-60 dark:opacity-80">
        A starter template to kickstart your React and TypeScript frontend
        project
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-y-4">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-2">
        Click on the React or TypeScript logos to learn more
      </p>
    </div>
  );
}
