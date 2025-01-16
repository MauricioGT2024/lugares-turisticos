import React, { useEffect, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgRef.current.src = src;
          observer.unobserve(imgRef.current);
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      className={`${className} ${isLoaded ? 'loaded' : ''}`}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

export default React.memo(LazyImage);
