import React, { useState, useEffect} from "react";
import MovieComponent from "./MovieComponent";

export default function Home(){
    const [card, setCard] = useState([])

    const [page, setPage] = useState(1)
    const getCarData = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
            const data = await res.json();
            setCard((prev)=>[...prev, ...data]);
        } catch (error) {
            console.error("Data fetch karne mein error aaya:", error);
        }
    };

    const handleInfiniteScroll = async ()=>{
        let scrollHeight = document.documentElement.scrollHeight
        let innerHeight = window.innerHeight
        let scrollTop = document.documentElement.scrollTop
        try{
            if(innerHeight + scrollTop + 1 >= scrollHeight){
                setPage((prev)=> prev+1)
            }
        }catch(error){
            console.log("error:- " + error)
        }
    }

    useEffect(()=>{
        getCarData();
    },[page]);

    useEffect(()=>{
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll)
    }, []);

    return(
        <>
            <MovieComponent movieInfo={card}/>
        </>
    )
}
