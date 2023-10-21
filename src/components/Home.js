import React, { useState, useEffect} from "react";
import MovieComponent from "./MovieComponent";

export default function Home(){
    const [card, setCard] = useState([])

    const getCarData = async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?%20limit=95_page=1");
        const data = await res.json();
        setCard(data);
        console.log(card)
    };

    useEffect(()=>{
        getCarData();
    },[]);

    return(
        <>
            <MovieComponent movieInfo={card}/>
        </>
    )
}
