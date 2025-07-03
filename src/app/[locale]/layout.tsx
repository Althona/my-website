import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { routing } from '@/src/i18n/routing';

import "@/src/app/globals.css";
import Menu from "@/src/app/components/menu/menu";
import Heading from "@/src/app/components/heading/heading";
import ContentWrapper from "@/src/app/components/content-wrapper/content-wrapper";
import { notFound } from 'next/navigation';

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Heading title="Welcome to my website" description="Feel free to look around and get a better feel of who I am." />
          <Menu />
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
