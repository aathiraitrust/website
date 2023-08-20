'use client';

import Link from 'next/link';
import { useState } from 'react';

export function NavigationBar() {
  const [collapse, setCollapse] = useState('collapse');
  const [showEvents, setShowEvents] = useState(undefined);

  function toggleCollapse() {
    collapse ? setCollapse(undefined) : setCollapse('collapse');
  }

  function toggleEvents() {
    showEvents ? setShowEvents(undefined) : setShowEvents('show');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={() => toggleCollapse()}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="/">
          <img data-testid="website-logo" src="/img/logo/aathirai_logo.png" alt="Aathirai" className='site-logo' />
        </Link>
        <div className={['navbar-collapse', collapse].join(' ')}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active bg-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <button className={['nav-link', 'dropdown-toggle', showEvents].join(' ')} onClick={() => toggleEvents()} role="button" data-bs-toggle="dropdown">
                Events
              </button>
              <ul className={['dropdown-menu', showEvents].join(' ')}>
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