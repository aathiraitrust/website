'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div className="text-center">
      <h2 className='text-primary'>Aathirai Educational And Charitable Trust</h2>
      <h1>
        <div>Hello, Next.js!</div>
        <div>
          <Link data-testid="time-link" href="/time">Time</Link>
        </div>
      </h1>
    </div>

  );
}