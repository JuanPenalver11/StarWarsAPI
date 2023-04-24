import React from "react";
import { AiFillGithub } from "react-icons/ai";


export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center bg-warning">
    <p>
      Made by
      <a href="https://github.com/JuanPenalver11">
        {" "}
        JuanPenalver11 <AiFillGithub size={30} />
      </a>
    </p>
  </footer>
);
