import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { GiDeathStar } from "react-icons/gi";
import "../../styles/itemsFavPage.css";

const FavCharacter = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <h3 className="name-section-fav"> FAVOURITE LIST </h3>

      <div className="display-container-fav">
        {store.favourites.map((item, index) => (
          
            <div key={index} className="container-fav">
              <div className="image-container-fav">
                <img
                  className="item-image-fav"
                  src={item.image}
                  alt="Character Image"
                ></img>
              </div>
              <div className="name-container-fav">
                <p>{item.name}</p>
              </div>
              <button className="deletefav" onClick={()=> actions.removeFav(item)}><GiDeathStar size={40}/></button>
            </div>
        ))}
      </div>
    </>
  );
};

export default FavCharacter;
