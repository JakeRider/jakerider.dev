import type { V2_MetaFunction } from '@remix-run/node';
import Navigation from '~/components/Navigation';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Jake Rider | About' },
    { name: 'description', content: 'Get to know Jake Rider.' },
  ];
};

export default function About() {
  return <Navigation />;
}
