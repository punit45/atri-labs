import React from 'react';
import "./Flex4.css";

function Flex4() {
  return (
    <div className="flex4">
        <div className="textfield">Browse our menu</div>
        <div className="occasion">
            <div className="occasion__card1">
                <img src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg" alt="np" />
                <div className="occasion__card1__2">Breakfast</div>
                <div className="occasion__card1__3">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam </div>
                <div className="occasion__card1__4">Explore Menu</div>
            </div>
            <div className="occasion__card1">
                <img src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfbb9e09be616e71d818_menu-main-dishes-restaurante-x-template.svg" alt="np" />
                <div className="occasion__card1__2">Main Dishes</div>
                <div className="occasion__card1__3">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam </div>
                <div className="occasion__card1__4">Explore Menu</div>
            </div>
            <div className="occasion__card1">
                <img src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfb5dd3ca61a6dd0ae1c_menu-drinks-restaurante-x-template.svg" alt="np" />
                <div className="occasion__card1__2">Drinks</div>
                <div className="occasion__card1__3">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam </div>
                <div className="occasion__card1__4">Explore Menu</div>
            </div>
            <div className="occasion__card1">
                <img src="https://atri-apps.github.io/restaurant_website/app-assets/616dcfafe6321c66cb474f97_menu-desserts-restaurante-x-template.svg" alt="np" />
                <div className="occasion__card1__2">Desserts</div>
                <div className="occasion__card1__3">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam </div>
                <div className="occasion__card1__4">Explore Menu</div>
            </div>
        </div>
        <div className="btn__group">
            <button className="btn1">Order Online</button>
            <button className="btn2">Book a table</button>
        </div>
    </div>
  )
}

export default Flex4