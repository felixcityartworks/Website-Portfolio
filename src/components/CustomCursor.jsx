import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, .hover-target')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, .hover-target')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="bg-white rounded-full"
          animate={{
            width: isHovering ? 60 : 8,
            height: isHovering ? 60 : 8,
            opacity: isClicking ? 0.5 : 1,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="border-2 border-primary rounded-full"
          animate={{
            width: isHovering ? 80 : 40,
            height: isHovering ? 80 : 40,
            opacity: isHovering ? 0.3 : 0.5,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
