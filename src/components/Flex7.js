import React from 'react';
import "./Flex7.css";

function Flex7() {
  return (
    <div className="flex7">
        <div className="left">
            <p className="left__para">Taste the most delicious burger in Los Angeles, CA</p>
            <p className="left__para2">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.  Order online</p>
            <div className="btn-grp">
                <button className="btn2">Order Online</button>
                <button className="btn1">Reservate</button>
            </div>
        </div>
        <div className="right">
                <img className="logo_right" src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c364b456b93fb50d6d_cta-restaurante-x-template.jpeg" alt="np" />
            </div>
    </div>
  )
}

export default Flex7