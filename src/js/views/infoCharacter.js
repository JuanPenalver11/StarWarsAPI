import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { GiStarfighter } from "react-icons/gi";
import "../../styles/infoCharacter.css";
const apiUrl = "https://www.swapi.tech/api/people/";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const CardInfo = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const { id } = useParams();
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
      .then((data) => {
        console.log(data);
        setItem(data.result.properties);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="display">
      <div>
        <img className="image" src={imgUrl + id + ".jpg"} />
      </div>
      <button
        className="icon"
        onClick={() => {
          actions.getIdElement(item);
          actions.addToFavs();
        }}
      >
        <GiStarfighter size={40} />
      </button>
      <div className="info">
        <h1 className="">Name: {item.name}</h1>
        <h3 className="">Birth Year: {item.birth_year}</h3>
        <h3 className="">Height: {item.height}cm</h3>
        <h3 className="">Mass: {item.mass} kg</h3>
        <h3 className="">
          Gender: {item.gender && capitalizeFirstLetter(item.gender)}
        </h3>
        <h3 className="">
          Hair Color:{" "}
          {item.hair_color && capitalizeFirstLetter(item.hair_color)}
        </h3>
        <h3 className="">
          Skin Color:{" "}
          {item.skin_color && capitalizeFirstLetter(item.skin_color)}
        </h3>
        <h3 className="">
          Eye Color: {item.eye_color && capitalizeFirstLetter(item.eye_color)}
        </h3>
      </div>
    </div>
  );
};

export default CardInfo;
