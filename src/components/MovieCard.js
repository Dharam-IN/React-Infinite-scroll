import React from "react";

export default function MovieCard(myData) {
    let newmydata = myData.myData
    const { title, id, body } = newmydata;
    // console.log(newmydata)

    return (
        <div className="card">
            <div className="card-body">
                <b className="card-id bg-dark text-white px-3 py-2 rounded-circle">{id}</b>
                {title && <h2 className="card-title mt-3">{title.slice(0,20)}...</h2>}
                {body && <p className="card-text">{body.slice(0,120)}...</p>}
            </div>
        </div>
    );
}
