import React from 'react';
import "./Flex2.css";

function Flex2() {
  return (
    <div className="Flex2">
     <div className="left">
        <div className="left__r1">
          <div className="left__r1__textbox1">The best place to</div>
          <div className="left__r1__textbox2">eat burgers in LA.</div>
        </div>
        <div className="left__r2">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</div>
        <div className="left__r3">
          <div className="left__r3__flex_wrap__btn">
            <button className="homebutton1">Reservate</button>
            <button className="homebutton2">Order online</button>
          </div>
        </div>
     </div>
     <div className="right">
      <img 
      className="right__img"
       src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg" 
       alt="np" 
      />
     </div>
    </div>
  )
}

export default Flex2