import React from 'react';
import "./Flex3.css";

function Flex3() {
  return (
    <div className="flex3">
        <div className="flex3__r1">Order from your favorite app today!</div>
        <div className="flex3__r2">
            <div className="flex3__r2_group1">
                <img 
                className="image__group1"
                src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg"
                alt="np"
                width="200px"
                />
                <img 
                className="image__group2"
                src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"
                alt="np" width="200px"
                />
                <img 
                className="image__group2"
                src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg"
                alt="np" width="200px"
                />
                <img 
                className="image__group2"
                src="https://atri-apps.github.io/restaurant_website/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg"
                alt="np" width="200px"
                />
            </div>
        </div>
    </div>
  )
}

export default Flex3