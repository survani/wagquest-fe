import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./app-components/navigation-system/Navigation";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./app-components/footer-system/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "WagQuest",
  description:
    "Explore a world of dog-friendly locations and experiences with WagQuest. Find the perfect dog parks, trails, cafes, and more. Connect with fellow dog owners and embark on new adventures with your furry friend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navigation />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
