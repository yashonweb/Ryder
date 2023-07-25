import React, { useRef, useEffect } from 'react';
import RyderImage from '../images/ryder-cup-2023.svg'
import CgImage from '../images/CGlogo.svg'

const FadeImageSlider = () => {
  const imagesRef = useRef([]);
  let currentIndexRef = useRef(0);

  useEffect(() => {
    const switchImage = () => {
      imagesRef.current[currentIndexRef.current].style.opacity = 0;
      currentIndexRef.current = (currentIndexRef.current + 1) % imagesRef.current.length;
      imagesRef.current[currentIndexRef.current].style.opacity = 1;
    };

    // Switch images every 5 seconds (adjust as needed).
    const intervalId = setInterval(switchImage, 2000);

    // Cleanup the interval when the component unmounts.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='image-container'>
      <img className="fade-image" ref={el => imagesRef.current.push(el)} src={RyderImage} alt="Image 1" style={{ opacity: 1 }} />
      <img className="fade-image" ref={el => imagesRef.current.push(el)} src={CgImage} alt="Image 2" style={{ opacity: 0 }} />
      {/* <img className="fade-image" ref={el => imagesRef.current.push(el)} src="path_to_image_3.jpg" alt="Image 3" style={{ opacity: 0 }} /> */}
      {/* Add more images with their paths, if needed */}
    </div>
  );
};

export default FadeImageSlider;
