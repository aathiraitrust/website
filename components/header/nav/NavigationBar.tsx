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
        <button data-testid="toggler-btn" className="navbar-toggler" type="button" onClick={() => toggleCollapse()}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="/">
          <img data-testid="website-logo" src="/img/logo/aathirai_logo.png" alt="Aathirai" className='site-logo' />
        </Link>
        <div data-testid='navbar-section' className={['navbar-collapse', collapse].join(' ')}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link data-testid="home-link" className="nav-link active bg-light" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link data-testid="about-us-link" className="nav-link" href="/">About Us</Link>
            </li>
            <li className="nav-item">
              <Link data-testid="beneficiaries-link" className="nav-link" href="/">Our Beneficiaries</Link>
            </li>
            <li className="nav-item dropdown">
              <button data-testid="events-dropdown" className={['nav-link', 'dropdown-toggle', showEvents].join(' ')} onClick={() => toggleEvents()} role="button" data-bs-toggle="dropdown">
                Events
              </button>
              <ul data-testid="events-dropdown-list" className={['dropdown-menu', showEvents].join(' ')}>
                <li><Link data-testid="our-events-link" className="dropdown-item active bg-light" href="/">Our Events</Link></li>
                <li><Link data-testid="rising-star-link" className="dropdown-item" href="/">Rising Star Projects</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link data-testid="donate-link" className="nav-link" href="/">To Donate</Link>
            </li>
            <li className="nav-item">
              <Link data-testid="contact-us-link" className="nav-link" href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}