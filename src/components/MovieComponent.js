import React from "react";
import MovieCard from "./MovieCard";

export default function MovieComponent({movieInfo}, props){
    
    return(
            <>
                <div className="wrapper">
                    <div className="container my-4">
                        <h1 className="mb-3">List of cards</h1>
                        <div className="row gy-5">
                                {movieInfo.map((curVal, index) => (
                                    <div className="col-md-4 col-12">
                                        <MovieCard key={index} myData={curVal} />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </>
        
    )
}


 