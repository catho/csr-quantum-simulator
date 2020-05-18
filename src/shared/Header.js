import React from 'react';
import { Link } from "react-router-dom";

const Header = ({ title }) => (
  <>
    <div>
      <Link to="/">Back to menu</Link>
    </div>
    <h2>{title}</h2>
    <h3>Test your components below</h3>
  </>
);

export default Header;