'use client';

import Link from 'next/link';
import { useState } from 'react';

export function NavigationBar() {
  const [collapse, setCollapse] = useState(true);
  const [collapseEvents, setCollapseEvents] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={() => setCollapse(!collapse)} aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="/">
          <img data-testid="website-logo" src="/img/logo/aathirai_logo.png" alt="Aathirai" className='site-logo' />
        </Link>
        <div className={collapse ? 'collapse navbar-collapse' : 'navbar-collapse'}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active bg-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <button className={collapseEvents ? 'nav-link dropdown-toggle' : 'nav-link dropdown-toggle show'} onClick={() => setCollapseEvents(!collapseEvents)} role="button" data-bs-toggle="dropdown" aria-expanded={collapseEvents ? false : true}>
                Events
              </button>
              <ul className={collapseEvents ? 'dropdown-menu' : 'dropdown-menu show'}>
                <li><a className="dropdown-item active bg-light" href="/">Our Events</a></li>
                <li><a className="dropdown-item" href="/">Rising Star Projects</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}