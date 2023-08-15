import React from "react";
import Card from "../Card/Card";
import style from './CardsContainer.module.css';
import { useSelector } from "react-redux";

const CardsContainer = ()=>{
    const videogames = useSelector(state => state.videogames);

    return(
        <div className = {style.container}>
            {videogames.map((videogame)=>{
                return <Card
                    id = {videogame.id}
                    name = {videogame.name}
                    image = {videogame.image}
                />
            })}
        </div>
    );
};

export default CardsContainer;