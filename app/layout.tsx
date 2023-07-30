'use client';

// These styles apply to every route in the application
import '../styles/scss/global.scss';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="container">{children}</body>
      </html>
    )
  }