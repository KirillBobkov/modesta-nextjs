import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ start = 0, end = 100, duration = 2000 }) => {
  const [count, setCount] = useState(start);
  const { ref, inView } = useInView({
    triggerOnce: true, // Срабатывает только один раз
    threshold: 0.1, // Элемент должен быть виден на 10%
  });

  const startAnimation = () => {
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const currentNumber = Math.floor(progress * (end - start) + start);

      setCount(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (inView) {
      startAnimation();
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {count}
    </span>
  );
};

export default AnimatedCounter;