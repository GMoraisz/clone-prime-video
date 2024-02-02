import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../app/components/footer";
import Header from "../app/components/navBar";
import Navbar from "./components/smNavBar";
// import Header2 from "./components/smNavBar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prime Video | Assista a filmes, séries e muito mais!",
  description: "Created by Morais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}
        <div >
        
          <Navbar/>
          
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
