import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/about/us">About us</Link>
      <br />
      <Link to="/contact-us">Contact us</Link>
      <br />
      <Link to="/entry">Entry</Link>
      <br />
    </div>
  );
};
