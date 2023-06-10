import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Jake Rider | About' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function About() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/" className="text-xl text-blue-600 underline">
        Home
      </Link>
    </div>
  );
}
