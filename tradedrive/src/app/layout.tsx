import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trade Drive Auto',
  description: 'Trade Drive Auto is your trusted car service and repair center, offering expert diagnostics, maintenance, and repairs for all vehicle types. Book your service online and experience reliable automotive care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={ {margin: 0 , padding: 0}} className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        
      </body>
    </html>
  );
}