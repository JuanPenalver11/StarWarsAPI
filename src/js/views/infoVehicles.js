import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { GiStarfighter } from "react-icons/gi";

import "../../styles/infoCharacter.css";
const apiUrl = "https://www.swapi.tech/api/vehicles/";
const imgUrl = "https://starwars-visualguide.com/assets/img/vehicles/";


const CardInfoVehicles= () => {
  
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
        <h3 className="">Model: {item.model && capitalizeFirstLetter(item.model)}</h3>
        <h3 className="">Manufacturer: {item.manufacturer && capitalizeFirstLetter(item.manufacturer)}</h3>
        <h3 className="">Cost: {item.cost_in_credits}</h3>
        <h3 className="">Passengers: {item.passengers}</h3>
        <h3 className="">Speed: {item.max_atmosphering_speed}</h3>
      </div>
    </div>
  );
};

export default CardInfoVehicles;
