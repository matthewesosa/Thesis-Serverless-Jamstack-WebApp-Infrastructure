import React from 'react';

const Welcome = () => {
  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          <img src="https://landonhotel.com/images/hotel/intro_room.jpg" alt="Intro Gallery Room Sample Pictures" />
          <img src="https://landonhotel.com/images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures" />
          <img src="https://landonhotel.com/images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures" />
          <img src="https://landonhotel.com/images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures" />
          <img className="hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures" />
        </div>
        <h1>Welcome to the Aphesis&nbsp;Hotel</h1>
        <p>The original Aphesis perseveres after 90 years. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Aphesis Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
      </article>
    </div>
  );
}

export default Welcome;
