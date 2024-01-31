import React from "react";
import MainCarousel from "../components/mainCarousel";
import SeriesList from "../components/series";
import SignaturesList from "../components/signatures";


export default function Home() {
    return (
        <div>

            <main>
                <div className="mt-4">
                    <MainCarousel />
                </div>

                <div className="mt-20">
                    <SeriesList />
                </div>

                <div className="mt-20">
                    <SignaturesList/>
                </div>
            </main>

        </div>
    );
}