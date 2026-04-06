import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let startTime = null;
      const startValue = 0;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
