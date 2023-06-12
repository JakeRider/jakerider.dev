import type { V2_MetaFunction } from '@remix-run/node';
import Navigation from '~/components/Navigation';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Jake Rider | Blog' },
    { name: 'description', content: 'Musings.' },
  ];
};

export default function About() {
  return <Navigation />;
}
