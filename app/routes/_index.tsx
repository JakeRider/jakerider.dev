import type { V2_MetaFunction } from '@remix-run/node';
import Navigation from '~/components/Navigation';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Jake Rider' },
    { name: 'description', content: 'The personal website of Jake Rider.' },
  ];
};

export default function Index() {
  return <Navigation />;
}
