import React, { useState, useEffect } from 'react';
// import galleryImagesData from './data/gallery_images.json'

const Welcome = () => {
  const [galleryImagesData, setGalleryImagesData] = useState([]);

  const loadGalleryImagesData = async() => {
    // send request to the API Gateway
    const resp = await fetch('https://b1p2l99821.execute-api.eu-central-1.amazonaws.com/Prod/galleryImages');
    let jsonData = await resp.json();

    // Assign the response data to the state variable
    setGalleryImagesData(jsonData);
  }

  useEffect(() => {
    // Load the gallery images data from the dynamoDB table via the API Gateway (/Prod/galleryImages)
    loadGalleryImagesData();
  }, []);

  return (
    <div className="scene" id="welcome">
      <article className="content">
        <div className="gallery">
          {
            galleryImagesData.map((image) => 
            <img className={image.className} src={image.src} alt={image.alt} />
            )
          }
        </div>
        <h1>Welcome to the Aphesis&nbsp;Hotel</h1>
        <p>The original Aphesis perseveres after 90 years. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Aphesis Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
      </article>
    </div>
  );
}

export default Welcome;
