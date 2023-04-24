import React, {useContext} from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { GiStarfighter } from "react-icons/gi";

export const Navbar = () => {

  const { store, actions } = useContext(Context);
    
  return (
    <nav className="navbar navbar-light bg-black mb-3 border-bottom border-warning border-5">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://wallaroomedia.com/wp-content/uploads/2019/08/star_wars_logo.png"
            alt="Logo"
            width="80"
            height="60"
            className="ms-4"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/favCharacter">
          <button className="btn btn-warning me-4">< GiStarfighter size={30} /> {store.favourites.length}</button>
        </Link>
      </div>
    </nav>
  );
};
