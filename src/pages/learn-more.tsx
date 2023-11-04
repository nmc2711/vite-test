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

import Button from '@/components/ui/button';

export default function LearnMorePage() {
  return (
    <div>
      <h1 className="mt-8 text-start text-xl font-semibold">
        What&apos;s inside?
      </h1>

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
