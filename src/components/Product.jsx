import React, { useState, useEffect } from 'react';

const Product = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Videos")
      .then(response => response.json())
      .then(data => {
        setVideos(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); 

  return (
    <div className='container'>
      <ul>
        {videos.map(video => (
          <li key={video.id[1]}>
            <img src={video.img} alt={video.info}/>
            <p>{video.info}</p>
            <p>{video.infotwo}</p>
          </li>
        ))}
      </ul>
    </div>
  );  
};

export default Product;
