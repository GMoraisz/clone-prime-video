import React from "react";
import SeriesList from "../components/betterRatingSeries";
import OtherSeries from "../components/otherSeries";



export default function Series() {
    return (

        <div className="mt-24 mb-10">
            <div>
                <SeriesList />
            </div>
            <div className="mt-32">
                <OtherSeries />
            </div>

        </div>


    );
}