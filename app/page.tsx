'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <h1>
      <div>Hello, Next.js!</div>
      <div>
        <Link data-testid="time-link" href="/time">Time</Link>
      </div>
      </h1>
  );
}