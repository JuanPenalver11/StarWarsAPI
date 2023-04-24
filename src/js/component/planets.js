import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/itemsHomePage.css";

const swapiUrl = "https://www.swapi.tech/api/planets/";
const imgUrl = "https://starwars-visualguide.com/assets/img/planets/";

const Planets = () => {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    getAllelements();
  }, []);

  const getAllelements = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(swapiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setPlanet(data.results))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <h3 className="name-section"> PLANETS </h3>
      <div className="display-container">
        {planet.map((item, index) => (
          <Link to={`/infoPlanets/${item.uid}`}>
            <div key={index} className="container">
              <div className="image-container">
                <img
                  className="item-image"
                  src={`${imgUrl}${item.uid}.jpg`}
                  alt="Planet Image"
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

export default Planets;
