import type { Metadata } from 'next'
import { globalStyles } from '@/styles/global'
import { GlobalStyleInjection } from '@/styles/global-style-injection';
import { Container, Header } from '@/styles/pages/app';
import Image from 'next/image'
import logoImg from "../assets/logo.svg"

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
        <Container>
          <Header>
            <Image src={logoImg} alt="" />
          </Header>
          {children}
        </Container>
      </body>
    </html>
  );
}
