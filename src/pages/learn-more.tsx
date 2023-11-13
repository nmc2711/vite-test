import {
  Atom,
  Book,
  Bot,
  Boxes,
  Dog,
  FlaskConical,
  Github,
  HardHat,
  ShieldCheck,
  Smile,
  Wand2,
  Waypoints,
  Wind,
  Workflow,
  Zap,
} from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/ui/button';

function ListItem({ children }: PropsWithChildren) {
  return <li className="flex items-center gap-x-1">{children}</li>;
}

export default function LearnMorePage() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1 className="mt-8 text-start text-3xl font-bold">
        What&apos;s inside?
      </h1>
      <p className="mt-2 text-center text-base opacity-60 dark:opacity-80">
        List of libraries and tools included:
      </p>
      <ul className="mb-6 ml-36 mt-4 flex flex-col items-start justify-center gap-y-2.5 py-2 opacity-50 dark:opacity-80">
        <ListItem>
          <Atom
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            React
          </Link>
          - Library for building user interfaces
        </ListItem>

        <ListItem>
          <HardHat
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://www.typescriptlang.org/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            TypeScript
          </Link>
          - Your safety net when writing JavaScript
        </ListItem>

        <ListItem>
          <Wind
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            TailwindCSS
          </Link>
          - Utility first CSS
        </ListItem>

        <ListItem>
          <Boxes
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://pnpm.io/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            pnpm
          </Link>
          - Fast and efficient package manager
        </ListItem>

        <ListItem>
          <Zap
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://vitejs.dev/guide/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Vite
          </Link>
          - Blazingly fast frontend build tool
        </ListItem>

        <ListItem>
          <Waypoints
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block dark:text-white"
          />
          <Link
            to="https://reactrouter.com/en/main"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            React Router
          </Link>
          - Client side routing solution for React
        </ListItem>

        <ListItem>
          <ShieldCheck
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://eslint.org/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            ESLint
          </Link>
          - Find & fix problems in the codebase
        </ListItem>

        <ListItem>
          <Wand2
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://prettier.io/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Prettier
          </Link>
          - Format code automatically on save
        </ListItem>

        <ListItem>
          <Dog
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://typicode.github.io/husky/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Husky
          </Link>
          - Git hooks tool
        </ListItem>

        <ListItem>
          <Smile
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://lucide.dev/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Lucide Icons
          </Link>
          - Beautiful and consistent open-source icons for React
        </ListItem>

        <ListItem>
          <Workflow
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://docs.github.com/en/actions"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            GitHub Actions
          </Link>
          - Check, test, and build your code automatically on push and PR
        </ListItem>

        <ListItem>
          <Bot
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://github.com/dependabot"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Dependabot
          </Link>
          - Create pull-request to update your dependencies
        </ListItem>

        <ListItem>
          <Book
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://storybook.js.org/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Storybook
          </Link>
          - Document and test your components in isolated environment
        </ListItem>

        <ListItem>
          <FlaskConical
            size={20}
            strokeWidth={2}
            className="mr-1 inline-block text-black dark:text-white"
          />
          <Link
            to="https://jestjs.io/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Jest
          </Link>
          &
          <Link
            to="https://testing-library.com/docs/react-testing-library/intro"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            React Testing Library
          </Link>
          - Unit test your components
        </ListItem>
      </ul>
      <Button>
        <Link
          to="https://github.com/hanstanawi/react-ts-starter-template"
          target="_blank"
          rel="noreferrer"
          className="flex gap-x-1 font-medium hover:text-primary"
        >
          <Github />
          Learn more
        </Link>
      </Button>
    </div>
  );
}
