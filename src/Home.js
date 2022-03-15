import React from 'react'
import "./Home.css";
import "./index.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <img className="home__image"
           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
           alt="img" />
          <div className="home__row">
           <Product 
           id="1" 
           title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback "
           price={700} 
           rating={4} 
           image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product 
         id="2" 
         title="Samsung XBR55X900F 55-Inch 4K Ultra HD Smart LED Android TV with Alexa Compatibility - 2020 Model "
         price={80000} 
         rating={5} 
         image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
         
        />
          </div>
         <div className="home__row">
         <Product 
         id="3" 
         title="Samsung curving LC49RG90SSUXEN-49' LED gaming monitor "
         price={5099} 
         rating={4} 
         image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
         <Product 
         id="4" 
         title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal with LIFX Simple Set up Bulb (Wi-Fi) "
         price={7000} 
         rating={5} 
         image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
         <Product 
            id="5" 
           title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR "
           price={2699} 
           rating={5} 
           image="https://images-na.ssl-images-amazon.com/images/I/61GcJ2DDvIL._AC_SL1000_.jpg"
        />
       </div>
       <div className="home__row">
          <Product 
         id="6" 
         title="Xiaomi Redmi Note 9 Pro 128GB + 6GB RAM, 6.67 FHD+ DotDisplay, 64MP AI Quad Camera, Qualcomm Snapdragon 720G LTE Factory Unlocked Smartphone - International Version (Tropical Green) "
         price={32000} 
         rating={5} 
         image="https://images-na.ssl-images-amazon.com/images/I/71UpLRVYK%2BL._AC_SL1000_.jpg"
           />
        </div>
    </div>
    )
}

export default Home
