import React from 'react';
import { Link } from 'react-scroll';
import './App.css';
import aboutimg from './Assests/aboutimg.jpg';
import chickennuggets from './Assests/chickennuggets.jpg';
import cpizza from './Assests/cpizza.jpg';
import fb from './Assests/fb.png';
import fc from './Assests/fc.webp';
import ff from './Assests/ff.jpg';
import grillsandwich from './Assests/grillsandwich.jpg';
import homeimg from './Assests/homeimg.jpg';
import insta from './Assests/insta.png';
import menucb from './Assests/menucb.jpg';
import ramen from './Assests/ramen.png';
import cb from './Assests/servicecb.jpg';
import tacos from './Assests/tacos.avif';
import twitter from './Assests/twitter.png';

export default function App() {
  return (
    
    <div className='body'>
      <div className='navbar'>
        <div className='webname'>
          <p>Foodle</p>
        </div>
        <div className='navlinks'>
          <Link to='home' smooth={true} offset={-100} className='links'>Home</Link>
          <Link to='about' smooth={true} offset={-100} className='links'>About</Link>
          <Link to='service' smooth={true} offset={-100} className='links'>Service</Link>
          <Link to='menu' smooth={true} offset={-100} className='links'>Menu</Link>
        </div>
      </div>
      {/* navbar ends */}
      <div className='home' id='home'>
        <div className='homecontent'>
          <h1>All Fast Food is <br/>Available at Foodle</h1>
          <h4>We Are Just A Click Away When You <br/>Crave For Delicious Fast Food</h4>
          <div className='homeorder'>
            <h2>Order Now</h2>
          </div>
        </div>
        <div className='homeimg'>
          <img src={homeimg} alt='fastfoodimg'></img>
        </div>
      </div>
      {/* home ends */}
      <div className='about' id='about'>
        <div className='aboutimg'>
        <img src={aboutimg} alt='chef'></img>
        </div>
        <div className='aboutcontent'>
          <h1>About us</h1>
          <h4>Discover your favourite Fast Food</h4>
          <p>Welcome to Foodle, where we serve delicious, high-quality fast food crafted from the freshest ingredients. Since 1947, we've been dedicated to providing a quick, satisfying dining experience with a menu that caters to all tastes. Join us for a meal that's not only flavorful but also responsibly made, every time.</p>
        </div>
      </div>
      {/* about ends */}
      <div className='service' id='service'>
        <div className='servicecontent'>
        <h1>Best Delivered<br/>Categories</h1>
        <h3>Here are some of Our Best Distributed<br/>Categories.If you Want You can Order From Here</h3>
        </div>
        <div className='serviceorder'>
          <div className='serviceitem'>
            <img src={cb} alt='chicken burger'></img>
            <h1>Chicken Burger</h1>
            <button>Order Now</button>
          </div>
          <div className='serviceitem'>
            <img src={cpizza} alt='chicken Pizza'></img>
            <h1>Chicken Pizza</h1>
            <button>Order Now</button>
          </div>
          <div className='serviceitem'>
            <img src={ff} alt='French Fries'></img>
            <h1>French Fries</h1>
            <button>Order Now</button>
          </div>
        </div>
      </div>
      {/* service ends */}
      <div className='menu'>
        <div className='menucontent'>
          <h1>Our Regular Menu</h1>
          <h3>These are Our Regular Menus. You Can <br/>Order Anything You Like</h3>
        </div>
        <div className='menuitemsbox'>
          <div className='menuitem'>
          <img src={menucb} alt='Chicken Burger'></img>
            <h1>Chicken Burger</h1>
            <button>Buy Now</button>
          </div>
          <div className='menuitem'>
          <img src={fc} alt='Chicken Fry'></img>
            <h1>Fried Chicken</h1>
            <button>Buy Now</button>
          </div>
          <div className='menuitem'>
          <img src={grillsandwich} alt='Grill Sandwich'></img>
            <h1>Grill Sandwich</h1>
            <button>Buy Now</button>
          </div>
          <div className='menuitem'>
          <img src={ramen} alt='Noodels Ramen'></img>
            <h1>Noodels Ramen</h1>
            <button>Buy Now</button>
          </div>
          <div className='menuitem'>
          <img src={tacos} alt='Tacos'></img>
            <h1>Tacos</h1>
            <button>Buy Now</button>
          </div>
          <div className='menuitem'>
          <img src={chickennuggets} alt='Chicken Nuggets'></img>
            <h1>Chicken Nuggets</h1>
            <button>Buy Now</button>
          </div>
          
        </div>
      </div>
      {/* menu ends */}
      <div className='footer'>
        <div className='name'>
          <h1>Foodle</h1>
          <h1>Follow us on</h1>
          <div className='logo'>
            <img className='img' src={insta} alt='instagram'></img>
            <img className='img' src={fb} alt='instagram'></img>
            <img className='img' src={twitter} alt='instagram'></img>
          </div>
        </div>
        <div className='footermenu'>
          <h1>Links</h1>
          <Link to='home' smooth={true} className='footerlinks'>Home</Link>
          <Link to='about' smooth={true} className='footerlinks'>About</Link>
          <Link to='service' smooth={true} className='footerlinks'>Service</Link>
          <Link to='menu' smooth={true} className='footerlinks'>Menu</Link>
        </div>
        <div className='contact'>
          <h1>Contact</h1>
          <h3>+123456789</h3>
          <h3>Explore</h3>
          <h3>Info@Foodle.com</h3>
          <h3>Hosur,India</h3>
        </div>
      </div>
    </div>
  )
}
