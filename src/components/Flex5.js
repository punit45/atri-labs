import React from 'react';
import "./Flex5.css";

function Flex5() {
  return (
    <div className="flex5">
      <div className="banner__image">
        <img
          className="about__image"
          src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bdba0fb13cfd32fc0_about-home-restaurante-x-template-p-1080.jpeg"
          alt="np"
        />
      </div>
      <div className="about">
        <div className="about__textbox">Come and visit us</div>
        <div className="about__address">
          <img className="location__logo" src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3a1718503bfe60f49_location-icon-restaurante-x-template.svg" alt="np" />
          <p className="about__address__line">837 W.Marshall Lane Marshalltown , IA 5015, Los Angeles </p>
        </div>
        <div className="phone__number">
          <img className="phone" src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c36165d583fe91702b_phone-icon-restaurante-x-template.svg" alt="np" />
          <p className="phone__text">(414) 857 - 0107</p>
        </div>
        <div className="email">
          <img className="email__logo" src="https://atri-apps.github.io/restaurant_website/app-assets/616da2c3400864a9087440a4_email-icon-restaurante-x-template.svg" alt="np" />
          <p className="email__id">losangeles@resturantex.com</p>
        </div>
      </div>
      <div className="about__right">
        <p className="about__right__p">About us</p>
        <p className="about__right__p1">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam.</p>
        <p className="about__right__p2">Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris.</p>
        <div className="btn-group">
        <button className="btn1">About Us</button>
        <button className="btn2">Join Our Team</button>
        </div>
      </div>
    </div>
  )
}

export default Flex5
