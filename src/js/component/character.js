import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/itemsHomePage.css";

const swapiUrl = "https://www.swapi.tech/api/people/";
const imgUrl = "https://starwars-visualguide.com/assets/img/characters/";

const Character = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getAllElements();
  }, []);

  const getAllElements = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(swapiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setCharacter(data.results))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <h3 className="name-section"> CHARACTERS</h3>

      <div className="display-container">
        {character.map((item, index) => (
          <Link to={`/infoCharacter/${item.uid}`} >
            <div key={index} className="container">
              <div className="image-container">
                <img
                  className="item-image"
                  src={`${imgUrl}${item.uid}.jpg`}
                  alt="Character Image"
                ></img>
              </div>
              <div className="name-container">
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Character;
