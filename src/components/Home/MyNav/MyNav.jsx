import React from "react";
import "./myNav.css";
import LogoWithText from '../../../assets/img/logo-text.png'
export default function MyNav() {
  return (
    <div className="mynav">
      <input type="checkbox" id="nav-toogler" className="nav-toogler" />
      <div className='navv'>
        <label className="nav-toogler-label" htmlFor="nav-toogler">
          <span></span>
        </label>
        {/* <img src={LogoWithText} alt="Logo" /> */}
        <div className="logo">
          <h3>LOGO</h3>
        </div>
      </div>
      <ul className='items'>
        <li>Home</li>
        <li>Subscription</li>
        <li>Watch Later</li>
      </ul>
    </div>
  );
}
