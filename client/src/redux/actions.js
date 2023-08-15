import { GET_VIDEOGAME, GET_VIDEOGAMES } from "./actions-types";
import axios from 'axios';

export const getVideogames = ()=>{
    return async (dispatch)=>{
        const videogames = await axios.get('http://localhost:3001/videogames');
        dispatch({type: GET_VIDEOGAMES, payload: videogames.data});
    };
};

export const getVideogame = (id)=>{
    return async (dispatch)=>{
        const videogame = await axios.get(`http://localhost:3001/videogames/${id}`);
        dispatch({type: GET_VIDEOGAME, payload: videogame.data});
    };
};