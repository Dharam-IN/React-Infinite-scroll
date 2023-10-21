import React from "react";
import MovieCard from "./MovieCard";

export default function MovieComponent({movieInfo}){
    return(
            <>
                <div className="wrapper">
                    <div className="container">
                        <h1>List of cards</h1>
                        <div className="row">
                                {movieInfo.map((curVal, index) => (
                                    <div className="col-4">
                                        <MovieCard key={index} myData={curVal} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </>
        
    )
}


 