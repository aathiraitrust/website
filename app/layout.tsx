'use client';

// These styles apply to every route in the application
import '../styles/scss/global.scss';

import { NavigationBar } from '../components/header/nav/NavigationBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" type="image/png" href="/favicon/aathirai_favicon.png"/>
      </head>
      <body className="container">
        <NavigationBar />
        {children}
      </body>
    </html>
  )
}