// components/ConfettiAnimation.tsx
import React, { useEffect, useRef } from 'react';

/**
 * Props for the ConfettiAnimation component.
 */
interface ConfettiAnimationProps {
  active: boolean;
  onAnimationEnd?: () => void;
}

/**
 * Generates a burst of confetti particles for a celebratory animation.
 * The confetti particles are created using pure CSS animations.
 *
 * @param {ConfettiAnimationProps} props - The properties for the confetti animation.
 * @returns {JSX.Element} A div containing confetti particles, or null if not active.
 */
const ConfettiAnimation: React.FC<ConfettiAnimationProps> = ({ active, onAnimationEnd }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
    const numConfetti = 50; // Number of confetti particles

    const createConfetti = (index: number) => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);

      // Random position around the center of the screen
      const startX = window.innerWidth / 2 + (Math.random() - 0.5) * window.innerWidth * 0.4;
      const startY = window.innerHeight / 2 + (Math.random() - 0.5) * window.innerHeight * 0.2;
      confetti.style.left = `${startX}px`;
      confetti.style.top = `${startY}px`;

      // Random delay for a staggered effect
      confetti.style.animationDelay = `${Math.random() * 0.8}s`;
      // Random duration for variety
      confetti.style.animationDuration = `${3 + Math.random() * 2}s`;

      container.appendChild(confetti);

      // Clean up after animation
      confetti.addEventListener('animationend', () => {
        confetti.remove();
        if (index === numConfetti - 1 && onAnimationEnd) {
          onAnimationEnd(); // Only call once after all confetti finished
        }
      });
    };

    // Create all confetti particles if numConfetti > 0
    if (numConfetti > 0) {
      for (let i = 0; i < numConfetti; i++) {
        createConfetti(i);
      }
    } else if (onAnimationEnd) {
      // If numConfetti is 0, trigger onAnimationEnd immediately
      onAnimationEnd();
    }

  }, [active, onAnimationEnd]); // Rerun effect when active changes

  return active ? <div ref={containerRef} className="fixed inset-0 z-40 overflow-hidden pointer-events-none"></div> : null;
};

export default ConfettiAnimation;