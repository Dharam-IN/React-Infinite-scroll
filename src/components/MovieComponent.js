import React from "react";
import MovieCard from "./MovieCard";

export default function MovieComponent({movieInfo}){
    return(
        <>
            <div className="wrapper">
                <div className="container">
                    <h1>List of cards</h1>
                    <div className="greed greed-three-column">
                        {movieInfo.map((curVal, id)=>{
                            return <MovieCard key={id} mydata={curVal}/>
                        })};
                    </div>
                </div>
            </div>
        </>
    )
}


