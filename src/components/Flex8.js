import React from 'react';
import "./Flex8.css";

function Flex8() {
  return (
    <div className="flex8" >
        <p className="para">What our clients say</p>
        <p className="para1">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
        <div className="comment__slider">
            <div className="previous">
              <img className="prev" src="https://atri-apps.github.io/restaurant_website/app-assets/left-arrow-svgrepo-com.svg" alt="np" />
            </div>
            <div></div>
            <div className="next">
              <img className="next1" src="https://atri-apps.github.io/restaurant_website/app-assets/right-arrow-svgrepo-com.svg" alt="np" />
            </div>
        </div>
    </div>
  )
}

export default Flex8