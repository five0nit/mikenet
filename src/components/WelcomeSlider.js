import React, { useState, useEffect } from 'react';

const WelcomeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { emoji: '??', title: 'Start Your Journey', description: 'Begin your quest for fair prices in the Quote Maze' },
    { emoji: '??', title: 'Navigate the Maze', description: 'Use MikeNet to find your way through confusing options' },
    { emoji: '??', title: 'Discover Fair Prices', description: 'Uncover a treasure trove of competitive quotes and fair prices' },
    { emoji: '??', title: 'Take Action Now!', description: 'Click on a map pin below and start saving!' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="welcome-slider">
    <div className="slide-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <span className="slide-emoji">{slide.emoji}</span>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={dot }
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSlider;
