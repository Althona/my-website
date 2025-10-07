import { NextIntlClientProvider } from 'next-intl';

import "@/src/app/globals.css";
import Menu from "@/src/app/[locale]/components/menu/menu";
import Heading from "@/src/app/[locale]/components/heading/heading";
import ContentWrapper from "@/src/app/[locale]/components/content-wrapper/content-wrapper";

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Heading />
          <Menu locale={locale} />
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
