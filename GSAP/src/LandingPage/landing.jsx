import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './landing.css'

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const f1Images = [
  'https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/fom-website/2023/McLaren/Formula%201%20header%20template%20(35)',
  'https://media.istockphoto.com/id/520492004/photo/mercedes-f1-w06-hybrid-formula-1-race-car.jpg?s=1024x1024&w=is&k=20&c=avhcvN8_8GC3qR97vlob1devw5RhKQiTxSDywcXW3L4=',
  'https://media.istockphoto.com/id/521432808/photo/mercedes-f1-w06-hybrid-formula-1-race-car.jpg?s=1024x1024&w=is&k=20&c=jXnVb1knkUqSxnBeo1SBSZabJvHk_6LesfQoEz7Ptok='
];

const LandingPage = () => {
  const carRefs = useRef([]);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  carRefs.current = [];

  const addToRefs = (el) => {
    if (el && !carRefs.current.includes(el)) {
      carRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate title on page load
    gsap.fromTo(titleRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5 });

    // Animate tagline when it comes into view
    gsap.fromTo(taglineRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, 
      y: 0, 
      duration: 1.5, 
      scrollTrigger: {
        trigger: taglineRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // Scroll-triggered animations for car images
    carRefs.current.forEach((car, index) => {
      gsap.fromTo(
        car,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: car,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="landing-page">
      <h1 className="title" ref={titleRef}>F1 Race Experience</h1>
      <div className="car-grid">
        {f1Images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`F1 Car ${index + 1}`}
            className="f1-car"
            ref={addToRefs}
          />
        ))}
      </div>
      <p className="tagline" ref={taglineRef}>Feel the speed, experience the thrill!</p>
    </div>
  );
};

export default LandingPage;
