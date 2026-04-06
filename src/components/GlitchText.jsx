import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

  useEffect(() => {
    const triggerGlitch = () => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        let iterations = 0;
        const maxIterations = 10;

        const interval = setInterval(() => {
          setDisplayText(
            text
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < iterations) return text[index];
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
              })
              .join('')
          );

          iterations += 1 / 2;

          if (iterations >= text.length) {
            clearInterval(interval);
            setDisplayText(text);
            setIsGlitching(false);
          }
        }, 30);

        return () => clearInterval(interval);
      }
    };

    const interval = setInterval(triggerGlitch, 3000);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        className="relative z-10"
        animate={isGlitching ? {
          x: [0, -2, 2, -2, 0],
          opacity: [1, 0.8, 1, 0.9, 1],
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {displayText}
      </motion.span>

      {isGlitching && (
        <>
          <motion.span
            className="absolute top-0 left-0 text-red-500 opacity-70 -z-10"
            style={{ clipPath: 'inset(0 0 50% 0)' }}
            animate={{
              x: [-2, 2, -2, 0],
              y: [-1, 1, 0],
            }}
            transition={{ duration: 0.2, repeat: 2 }}
          >
            {displayText}
          </motion.span>
          <motion.span
            className="absolute top-0 left-0 text-blue-500 opacity-70 -z-10"
            style={{ clipPath: 'inset(50% 0 0 0)' }}
            animate={{
              x: [2, -2, 2, 0],
              y: [1, -1, 0],
            }}
            transition={{ duration: 0.2, repeat: 2 }}
          >
            {displayText}
          </motion.span>
        </>
      )}
    </span>
  );
};

export default GlitchText;
