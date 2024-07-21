import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import { GenrexProvider } from "@/context/GenrexContext";
import { SearchProvider } from "@/context/SearchContext";
import Footer from "@/components/Footer";

const inter = Roboto({ subsets: ["latin"],
  weight: ["400", "500", "700"]
 }
  
);

export const metadata: Metadata = {
  title: "MEOWFLIX BY CHULMUL-DEVELOPERS",
  description: "free online streaming website you can watch movies and tv shows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <SearchProvider>
        <GenrexProvider>
       <div className="overflow-x-hidden">
       <Navbar />
       {children}
       <Footer />
       </div>
        </GenrexProvider>
        </SearchProvider>
        </body>
    </html>
  );
}
