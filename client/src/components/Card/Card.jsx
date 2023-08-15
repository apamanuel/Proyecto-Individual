import React from "react";
import style from './Card.module.css';

const Card = (props)=>{
    return(
        <div className={style.card}>
            <h4>{props.id}</h4>
            <h3>{props.name}</h3>
            <img src={props.image} alt={props.name} />
        </div>
        
    );
};

export default Card;
