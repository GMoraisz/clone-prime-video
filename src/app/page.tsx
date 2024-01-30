import React from "react";
import Footer from "./Components/footer";
import Header from "./Components/navBar";
import MainCarousel from "./Components/mainCarousel";
import SportsList from "./Components/sports";


export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <div className="mt-4">
          <MainCarousel />
        </div>

        <div className="mt-20">
          <SportsList />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
