import React from "react";
import Footer from "./Components/footer";
import Header from "./Components/navBar";
import MainCarousel from "./Components/mainCarousel";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <MainCarousel />

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
