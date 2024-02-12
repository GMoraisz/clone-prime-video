import React from "react";
import MainCarousel from "../app/components/mainCarousel";
import SeriesList from "../app/components/betterRatingSeries";
import SignaturesList from "../app/components/signatures";


export default function Main() {
    return (

        <div className="mr-3 ">

            <main>
                <div className="mt-4">
                    <MainCarousel />
                </div>

                <div className="mt-20">
                    <SeriesList />
                </div>

                <div className="mt-36">
                    <SignaturesList />
                </div>
            </main>

        </div>
    );
}