// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';
import arrowup from './assets/arrowup.png';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className='ScrollToTop'
      title="Scroll to top"
    >
      <img 
      src={arrowup}/>
    </button>
  );
}

export default ScrollToTopButton;
