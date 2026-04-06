import { useEffect, useState, useCallback } from 'react';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

const TextScramble = ({ text, className = '', trigger = 'hover', delay = 0 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);

  const scramble = useCallback(() => {
    let iteration = 0;
    const totalIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 1 / 2;

      if (iteration >= totalIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
  }, [text]);

  useEffect(() => {
    if (trigger === 'load' && !hasAnimated) {
      const timer = setTimeout(() => {
        scramble();
        setHasAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [trigger, scramble, hasAnimated, delay]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      scramble();
    }
  };

  return (
    <span
      className={`inline-block cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};

export default TextScramble;
