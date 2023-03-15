import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img className="logo__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg" alt="logo"
            />
            <h2 className="header__content">Home</h2>
            <h2 className="header__content">About</h2>
            <h2 className="header__content">Menu</h2>
            <h2 className="header__content">Pages</h2>
            <h2 className="header__content">Cart</h2>
        </div>
        <div className="header__right">
            <button className="header__button1">Order Online</button>
            <button className="header__button2">Reservate</button>
        </div>
    </div>
  )
}

export default Header