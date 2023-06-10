import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="mx-auto mt-16 max-w-7xl text-center">
      <Link to="/about" className="text-xl text-blue-600 underline">
        About
      </Link>
    </div>
  );
}
