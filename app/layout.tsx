import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'talentsCARE - Integration · Schulung · Coaching · Mentoring',
  description:
    'Professionelle Integrationsbegleitung für internationale Fachkräfte und Unternehmen in Deutschland',
  keywords: [
    'HR Consulting',
    'Integration',
    'Fachkräfte',
    'Schulung',
    'Coaching',
    'Mentoring',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
