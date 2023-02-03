import React from 'react'
import { Link } from "react-router-dom";


function Header() {
    return (
      <div>
        <h1>This is the Header</h1>
        <Link to="cart">Click</Link> to view our Cart page <br/>
        <Link to="photos">Click</Link>to view our Photos page
      </div>
    );
  }
  
  export default Header;