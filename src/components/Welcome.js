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
        <p>The enduring legacy of the Aphesis spans nine decades, standing as a testament to its resilience. Situated in the vibrant West End neighborhood, it offers a diverse array of attractions to suit every taste, ranging from captivating theater performances and gourmet dining experiences to captivating historic landmarks. Don't overlook the Rooftop Cafe, a must-visit spot for both travelers and locals seeking enjoyable conversations&nbsp;accompanied by drinks and delectable cuisine. &nbsp; For deeper insights into the Aphesis Hotel's offerings in the West End, feel free to explore our website and <a href="files/aphesishotelinfo.pdf">access our convenient information sheet.</a>.</p>
      </article>
    </div>
  );
}

export default Welcome;
