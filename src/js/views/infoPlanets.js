import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { GiStarfighter } from "react-icons/gi";

import "../../styles/infoCharacter.css";
const apiUrl = "https://www.swapi.tech/api/planets/";
const imgUrl = "https://starwars-visualguide.com/assets/img/planets/";


const CardInfoPlanets= () => {
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const {id} = useParams();
  const [item, setItem] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    getAllElements();
  }, []);

  const getAllElements = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(apiUrl + id, requestOptions)
      .then((response) => response.json())
      .then((data) => {console.log(data)
        setItem(data.result.properties);
        
      })
      .catch((error) => console.log("error", error));
  };


  return (
    <div className="display">
      <div>
        <img className="image" src={imgUrl + id + ".jpg"} />
      </div>

      <button className="icon" onClick={() => {
          actions.getIdElement(item);
          actions.addToFavs();
        }}>
        <GiStarfighter size={40} />
      </button>
      <div className="info">
        <h1 className="">Name: {item.name}</h1>
        <h3 className="">Diameter: {item.diameter}</h3>
        <h3 className="">Gravity: {item.gravity}</h3>
        <h3 className="">Population: {item.population}</h3>
        <h3 className="">Climate: {item.climate && capitalizeFirstLetter(item.climate)}</h3>
        <h3 className="">Terrain: {item.terrain && capitalizeFirstLetter(item.terrain)}</h3>
        <h3 className="">surface water: {item.surface_water && capitalizeFirstLetter(item.surface_water)}</h3>
      </div>
    </div>
  );
};

export default CardInfoPlanets;
