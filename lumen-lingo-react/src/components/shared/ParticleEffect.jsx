import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Star } from "lucide-react";

export default function ParticleEffect() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const colors = [
      '#FCD34D', '#F59E0B', '#FBBF24', 
      '#EC4899', '#F472B6', '#FB7185',
      '#8B5CF6', '#A78BFA', '#C084FC',
      '#06B6D4', '#22D3EE', '#67E8F9',
      '#10B981', '#34D399', '#6EE7B7',
    ];

    const particleTypes = ['circle', 'star', 'sparkle'];
    
    const newParticles = Array.from({ length: 30 }, (_, i) => {
      const angle = (i / 30) * Math.PI * 2;
      const radius = 100 + Math.random() * 150;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      return {
        id: i,
        x: centerX + Math.cos(angle) * (radius * 0.3),
        y: centerY + Math.sin(angle) * (radius * 0.3),
        targetX: centerX + Math.cos(angle) * radius,
        targetY: centerY + Math.sin(angle) * radius - 200,
        size: Math.random() * 16 + 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
        delay: Math.random() * 0.05,
        rotation: Math.random() * 360,
        duration: 0.7 + Math.random() * 0.2
      };
    });
    
    setParticles(newParticles);
  }, []);

  const renderParticle = (particle) => {
    if (particle.type === 'star') {
      return (
        <Star 
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size,
            color: particle.color,
            filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`
          }}
          fill={particle.color}
        />
      );
    }
    
    if (particle.type === 'sparkle') {
      return (
        <Sparkles 
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size,
            color: particle.color,
            filter: `drop-shadow(0 0 ${particle.size}px ${particle.color})`
          }}
          fill={particle.color}
        />
      );
    }
    
    return (
      <div
        className="absolute rounded-full"
        style={{
          width: particle.size,
          height: particle.size,
          backgroundColor: particle.color,
          boxShadow: `0 0 ${particle.size * 2}px ${particle.color}, 0 0 ${particle.size * 4}px ${particle.color}`
        }}
      />
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute"
            style={{
              left: particle.x,
              top: particle.y,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
              rotate: 0
            }}
            animate={{ 
              opacity: [0, 1, 1, 0.8, 0],
              scale: [0, 1.3, 1, 0.9, 0],
              x: particle.targetX - particle.x,
              y: particle.targetY - particle.y,
              rotate: particle.rotation
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: particle.duration,
              delay: particle.delay,
              ease: [0.16, 1, 0.3, 1],
              opacity: {
                times: [0, 0.1, 0.5, 0.8, 1],
                duration: particle.duration
              }
            }}
          >
            {renderParticle(particle)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}