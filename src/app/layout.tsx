import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Zia Welfare Foundation",
  description: "Created by Hamza Rahim",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="wrapper">
          <nav>
            <Header />
          </nav>
          <section className="flex-1">{children}</section>
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
