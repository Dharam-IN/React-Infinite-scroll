import React from "react";

export default function MovieCard(myData) {
    let newmydata = myData.myData
    const { title, id, body } = newmydata;
    console.log(newmydata)

    return (
        <div className="card">
            <div className="card-info">
                <p className="card-id">{id}</p>
                {body && <p>{body}</p>}
                {title && <h2>{title}</h2>}
            </div>
        </div>
    );
}
