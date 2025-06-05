import "./globals.css";
import Menu from "@/app/components/menu/menu";
import Heading from "@/app/components/heading/heading";
import ContentWrapper from "@/app/components/content-wrapper/content-wrapper";

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        <Heading title="Welcome to my website" description="Feel free to look around and get a better feel of who I am." />
        <Menu />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </body>
    </html>
  );
}
