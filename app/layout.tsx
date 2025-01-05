import type { Metadata } from "next";

import "../globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Dumpling Kitchen",
    template: "Dumpling Kitchen",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
