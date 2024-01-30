import React from "react";
import Footer from "./Components/footer";
import Header from "./Components/navBar";
import MainCarousel from "./Components/mainCarousel";
import SeriesList from "./Components/series";
import SignaturesList from "./Components/signatures";


export default function App() {
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
          <SeriesList />
        </div>

        <div className="mt-40">
          <SignaturesList />
        </div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
