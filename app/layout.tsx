import "./globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import Navbar from "./(shared)/Navbar";
import Footer from "./(shared)/Footer";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Blog App",
  description: "Blog built in next js using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        <div className={openSans.className}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
