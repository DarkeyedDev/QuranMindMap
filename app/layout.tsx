import './globals.css';
import type { Metadata } from 'next';
import { Inter, Amiri } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const amiri = Amiri({ 
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-amiri'
});

export const metadata: Metadata = {
  title: 'Qur\'an Memorizer - Your Spiritual Journey Companion',
  description: 'A modern platform for memorizing the Qur\'an with AI-powered features, progress tracking, and personalized study sessions. Start your spiritual journey today.',
  keywords: 'Quran, memorization, Islamic, spiritual, learning, Arabic, verses, Surah',
  authors: [{ name: 'Qur\'an Memorizer Team' }],
  openGraph: {
    title: 'Qur\'an Memorizer - Your Spiritual Journey Companion',
    description: 'Transform your Qur\'an memorization journey with our modern, AI-powered platform.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qur\'an Memorizer',
    description: 'Modern Qur\'an memorization platform with progress tracking and AI features.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${amiri.variable}`}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}