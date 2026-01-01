"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./newYear.css";

export default function NewYearEffect() {
  const [shouldShow, setShouldShow] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showSoundButton, setShowSoundButton] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const containerRef = useRef(null);

  // Generate a pleasant celebration sound using Web Audio API
  const playCelebrationSound = () => {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Create a pleasant chime-like sound
      oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
      oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
      oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.2, audioContext.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
      
      setSoundPlayed(true);
      setShowSoundButton(false);
    } catch (error) {
      console.log("Audio not available");
    }
  };

  useEffect(() => {
    // Check if we should show the effect (Dec 30 - Jan 5)
    const today = new Date();
    const startDate = new Date("2025-12-30");
    const endDate = new Date("2026-01-05T23:59:59");
    
    if (today >= startDate && today <= endDate) {
      setShouldShow(true);
      setShowText(true);
      
      // Try to play sound (may be blocked by browser)
      setTimeout(() => {
        try {
          playCelebrationSound();
        } catch (error) {
          // Autoplay blocked - show button
          setShowSoundButton(true);
        }
      }, 300);

      // Hide text after 4 seconds
      setTimeout(() => setShowText(false), 4000);
      
      // Clean up entire effect after 10 seconds
      setTimeout(() => {
        setShouldShow(false);
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
      }, 10000);
    }
  }, []);

  const handleSoundPlay = () => {
    if (!soundPlayed) {
      playCelebrationSound();
    }
  };

  if (!shouldShow) return null;

  // Generate particles for different layers
  const confettiParticles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 6 + Math.random() * 2,
    size: 6 + Math.random() * 4,
  }));

  const ribbonParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 1.5,
    duration: 8 + Math.random() * 2,
    width: 20 + Math.random() * 15,
  }));

  const fireworkParticles = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 360) / 24;
    const radians = (angle * Math.PI) / 180;
    const distance = 200;
    return {
      id: i,
      x: Math.cos(radians) * distance,
      y: Math.sin(radians) * distance,
      delay: 0.1,
    };
  });

  return (
    <div ref={containerRef} className="celebration-container">
      {/* Sound Button (if autoplay blocked) */}
      <AnimatePresence>
        {showSoundButton && !soundPlayed && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleSoundPlay}
            className="sound-button"
            aria-label="Play celebration sound"
          >
            🔊 Play Celebration Sound
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Center Text */}
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="celebration-text"
          >
            ✨ Happy New Year 2026
          </motion.div>
        )}
      </AnimatePresence>

      {/* Firework Burst (center) */}
      <div className="firework-burst">
        {fireworkParticles.map((particle) => (
          <div
            key={particle.id}
            className="firework-particle"
            style={{
              '--x': `${particle.x}px`,
              '--y': `${particle.y}px`,
              '--delay': `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Ribbons (slow, wide) */}
      <div className="ribbons-layer">
        {ribbonParticles.map((ribbon) => (
          <div
            key={ribbon.id}
            className="ribbon"
            style={{
              left: `${ribbon.left}%`,
              animationDelay: `${ribbon.delay}s`,
              animationDuration: `${ribbon.duration}s`,
              width: `${ribbon.width}px`,
            }}
          />
        ))}
      </div>

      {/* Confetti (fast, small) */}
      <div className="confetti-layer">
        {confettiParticles.map((particle) => (
          <div
            key={particle.id}
            className={`confetti confetti-${particle.id % 5}`}
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
