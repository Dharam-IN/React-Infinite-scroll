import React from "react";

export default function MovieCard(mydata){
    const {title, id, body} = mydata
    return(
        <div className="card">
            <div className="card-info">
                <p className="card-id">{id}</p>
                <p>{body.slice(0,150)}</p>
                <h2>{title.slice(0,15)}</h2>
            </div>
        </div>
    )
}
