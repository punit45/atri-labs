import React from 'react';
import "./Flex6.css";

function Flex6() {
  return (
    <div className="flex6">
        <p className="topic">Browse Our menu</p>
        <p className="topic1">Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.</p>
        <div className="menu__items">
            <div className="group1">
                <div className="card1">
                    <div className="price">$ 10.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dca333c0bd679a77bec56_classic-burger-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Classic Burger</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
                <div className="card1">
                    <div className="price">$ 6.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Chocolate Milkshake</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
                <div className="card1">
                    <div className="price">$ 5.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dc9aac480169bcc819e69_classic-fries-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Classic Fries</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
                <div className="card1">
                    <div className="price">$ 8.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Pancakes</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="group1">
                <div className="card1">
                    <div className="price">$ 3.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Ice Cream</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
                <div className="card1">
                    <div className="price">$ 9.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Chicken Burger</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
                <div className="card1">
                    <div className="price">$ 6.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Egg Toast</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
                <div className="card1">
                    <div className="price">$ 1.99 USD</div>
                    <img className="product1__image" src="https://atri-apps.github.io/restaurant_website/app-assets/616dc414d54d4e45ccac841f_regular-soda-restaurante-x-template-p-500.jpeg" alt="np" />
                    <p className="product__name">Regular Soda</p>
                    <p className="product__description">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</p>
                </div>
            </div>
            <div className="btn-grp">
            <button className="btn1">Order Online</button>
            <button className="btn2">Book a  table</button>
            </div>
        </div>
    </div>
  )
}

export default Flex6