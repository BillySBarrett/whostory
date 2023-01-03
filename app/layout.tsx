/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css'
import Navbar from './common/Navbar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className='bg-sky-800'>
        <main>
            <Navbar />
            {children}
        </main>
      </body>
    </html>
  );
}