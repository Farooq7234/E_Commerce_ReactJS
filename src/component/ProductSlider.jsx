import React, { useState,useEffect } from 'react';


const images = [
  'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming03-free-img-o9vzqvrix9ebgtwlxr5iwk27s1xblzkum1b4ivvlzc.jpg',
  'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg',
  'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg',
 
];

const ProductSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="relative">
      <div className="flex items-center justify-center h-auto m-5">
        <img
          className="object-cover w-auto h-96 max-sm:h-72 rounded"
          src={images[currentImage]}
          alt={`Product Image ${currentImage + 1}`}
        />
      </div>
    </div>
  );
};

export default ProductSlider;