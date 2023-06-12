import React from 'react';
import { Link } from '@remix-run/react';

function Navigation() {
  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'Blog', to: '/blog' },
    { name: 'About', to: '/about' },
  ];

  return (
    <nav className="mx-auto mt-16 max-w-7xl text-center">
      <ul>
        {navItems.map((navItem) => {
          const { name, to } = navItem;

          return (
            <li key={to}>
              <Link to={to} className="text-xl text-black underline">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
