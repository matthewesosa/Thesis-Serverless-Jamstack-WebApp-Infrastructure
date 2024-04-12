import React, { useState, useEffect } from 'react';
// import menuLinksData from './data/menu_links.json'

const Header = () => {
  const [menuLinksData, setMenuLinksData] = useState([]);

  const loadMenuLinksData = async() => {
    // send a request to the API gateway
    const resp = await fetch('https://b1p2l99821.execute-api.eu-central-1.amazonaws.com/Prod/menuLinks');
    let jsonData = await resp.json();

    // then assign the response 'resp' from the API gateway to our state variable
    setMenuLinksData(jsonData);
  }

  useEffect(() => {
    // Load the menuLinks data from dynamoDB via the /Prod/menuLinks of the AphesisHotelAPI (API Gateway)
    loadMenuLinksData();
  }, []);


  return (
    <header id="intro">
    <article className="fullheight">
    <div className="hgroup">
        <h1>Aphesis Hotel</h1>
        <p><a href="#welcome"><img src="https://aphesishotel.s3.eu-central-1.amazonaws.com/arrow.png" alt="down arrow" /></a></p>
    </div>
    </article>

        <nav id="nav">
        <div className="navbar">
            <div className="brand"><a href="#welcome">Aphesis <span>Hotel</span></a></div>
            <ul>
              {
                menuLinksData.map((link) =>
                  <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                )
              }

            </ul>
        </div>
        </nav>
    </header>

    );

}

export default Header;