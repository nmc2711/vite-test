import {
  Atom,
  Bot,
  Dog,
  FlaskConical,
  HardHat,
  ShieldCheck,
  Smile,
  Wand2,
  Wind,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import reactLogo from '@/assets/react.svg';
import tsLogo from '@/assets/ts.svg';
import Button from '@/components/ui/button';

export default function Homepage() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex justify-center">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-24 p-6" alt="React logo" />
        </a>
        <a href="https://typescriptlang.org" target="_blank" rel="noreferrer">
          <img src={tsLogo} className="h-24 p-6" alt="TS logo" />
        </a>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">React + TypeScript</h1>
        <h2 className="text-3xl font-bold">Starter Template</h2>
      </div>

      <p className="mt-4 text-center text-base opacity-60 dark:opacity-80">
        A starter template to kickstart your React and TypeScript frontend
        project
      </p>
      <p className="mt-8 text-start text-xl font-semibold">
        What&apos; inside?
      </p>
      <ul className="mb-6 mt-4 list-disc text-black opacity-50 dark:text-white dark:opacity-80">
        <li>
          <Atom
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          React
        </li>
        <li>
          <HardHat
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          TypeScript
        </li>
        <li>
          <Wind
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          TailwindCSS
        </li>

        <li>
          <ShieldCheck
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          ESLint
        </li>
        <li>
          <Wand2
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          Prettier
        </li>
        <li>
          <Dog
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          Husky
        </li>
        <li>
          <Smile
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          Lucide Icons
        </li>
        <li>
          <Workflow
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          Github Actions
        </li>
        <li>
          <Bot
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          Dependabot
        </li>
        <li>
          <FlaskConical
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          Jest + React Testing Library
        </li>
      </ul>
      <Button>
        <Link
          to="https://github.com/hanstanawi/nextjs-starter-template"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </Link>
      </Button>
    </div>
  );
}
