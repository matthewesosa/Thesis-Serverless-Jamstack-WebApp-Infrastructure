import React from 'react';

const Footer = () => {
  return (
    <footer className="scene">
      <article className="content">
        <div id="socialmedia">
          <ul className="group">
            <li><a href="https://instagram.com"><img className="icon" src="https://cdn0.iconfinder.com/data/icons/social-media-circle-6/1024/instagram-64.png" alt="icon for twitter" /></a></li>
            <li><a href="http://www.facebook.com"><img className="icon" src="https://cdn1.iconfinder.com/data/icons/logotypes/32/facebook-64.png" alt="icon for facebook" /></a></li>
            <li><a href="http://www.youtube.com"><img className="icon" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Youtube-64.png" alt="icon for youtube" /></a></li>    
          </ul>      
        </div>
      </article>
    </footer>
  );
}

export default Footer;
