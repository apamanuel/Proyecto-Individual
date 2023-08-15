import React, { useEffect } from "react";
// import SearchBar from '../../components/SearchBar';
import NavBar from "../../components/NavBar/NavBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

const Home = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogames());
    },[dispatch]);
    return (
        <div>
            <NavBar/>
            <h1>Soy la vista Home</h1>
            <CardsContainer/>
        </div>
               
    );
};

export default Home;