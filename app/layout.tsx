'use client';

// These styles apply to every route in the application
import '../styles/scss/global.scss';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <Link className="navbar-brand" href="/">
              <img src="/img/logo/aathirai_logo.png" alt="Aathirai" width="30" height="24" />
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}