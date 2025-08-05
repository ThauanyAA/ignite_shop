import type { Metadata } from 'next'
import { globalStyles } from '@/styles/global'
import { GlobalStyleInjection } from '@/styles/global-style-injection';

globalStyles()

export const metadata: Metadata = {
  title: "Ignite Shop",
  description: "Project developed during the Ignite course by Rocketseat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GlobalStyleInjection />
      </head>
      <body>
        test
        {children}
      </body>
    </html>
  );
}
