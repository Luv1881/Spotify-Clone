import './globals.css';
import { Figtree } from 'next/font/google';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify',
  description:
    '🎵🎧 Spotify clone created by ajfm88 using Next.js 13, Tailwind CSS and TypeScript. 🔊🎶',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
