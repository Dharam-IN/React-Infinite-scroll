import React, { useState, useEffect} from "react";
import MovieComponent from "./MovieComponent";

export default function Home(){
    const [card, setCard] = useState([])

    const getCarData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=9&_page=1");
            const data = await res.json();
            // console.log(data)
            setCard(data);
        } catch (error) {
            console.error("Data fetch karne mein error aaya:", error);
        }
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
