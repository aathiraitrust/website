'use client';

import Link from 'next/link';

export function NavigationBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img data-testid="website-logo" src="/img/logo/aathirai_logo.png" alt="Aathirai" className='site-logo' />
        </Link>
      </div>
    </nav>
  );
}