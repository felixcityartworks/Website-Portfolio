import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ children, className = '', tiltAmount = 10 }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 300, damping: 30 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(xSpring, [0, 1], [-tiltAmount, tiltAmount]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - left) / width;
    const yPos = (e.clientY - top) / height;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`hover-target ${className}`}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.3 }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>

      {/* Shine effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${x.get() * 100}% ${y.get() * 100}%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};

export default TiltCard;
