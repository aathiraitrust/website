'use client';

// These styles apply to every route in the application
import '../styles/scss/global.scss';

import { NavigationBar } from '../components/header/nav/NavigationBar';
import { Title } from '../components/head/title/title';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/aathirai_favicon.png" />
        <Title />
      </head>
      <body>
        <NavigationBar />
        <div className="container">
          {children}
        </div>
        <footer className="text-center">
          <div className="container">
            <br />
            <br />
            <p>Copyright © Aathirai Org. All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </html>
  )
}