
import React from 'react';

interface PetMascotProps {
  isHappy?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const PetMascot: React.FC<PetMascotProps> = ({ isHappy = false, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-20 h-20',
    medium: 'w-28 h-28',
    large: 'w-36 h-36',
  };

  return (
    <div className={`${sizeClasses[size]} relative mx-auto`}>
      <div
        className={`
          relative w-full h-full rounded-full
          transition-transform duration-300 
          ${isHappy ? 'animate-bounce scale-110' : 'hover:scale-105'}
        `}
      >
        {/* GIF do mascote */}
        <img
          src="/mascot-dog.gif"
          alt="Pet Mascot"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />

        {/* Sparkles when happy */}
        {isHappy && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-yellow-400 text-xl animate-ping">
            ✨
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes tail-wag {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
        }
        .animate-tail-wag {
          animation: tail-wag 0.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PetMascot;
