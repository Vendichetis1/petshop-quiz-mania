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
          relative w-full h-full bg-amber-300 rounded-[40%] shadow-lg
          transition-transform duration-300
          ${isHappy ? 'animate-bounce scale-110' : 'hover:scale-105'}
        `}
      >
        {/* Ears - floppy dog style */}
        <div className="absolute -top-2 -left-4 w-6 h-14 bg-amber-600 rounded-full rotate-[-30deg]"></div>
        <div className="absolute -top-2 -right-4 w-6 h-14 bg-amber-600 rounded-full rotate-[30deg]"></div>

        {/* Eyes */}
        <div className="absolute top-7 left-5 w-5 h-5 bg-black rounded-full shadow-sm">
          <div className="w-2 h-2 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>
        <div className="absolute top-7 right-5 w-5 h-5 bg-black rounded-full shadow-sm">
          <div className="w-2 h-2 bg-white rounded-full mt-0.5 ml-0.5"></div>
        </div>

        {/* Nose */}
        <div className="absolute top-[52%] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-t-full shadow-sm"></div>

        {/* Mouth & tongue */}
        {isHappy ? (
          <>
            <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 w-6 h-4 border-b-2 border-black rounded-b-full"></div>
            <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 w-3 h-2 bg-pink-500 rounded-full"></div>
          </>
        ) : (
          <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 w-6 h-[2px] bg-black rounded-full"></div>
        )}

        {/* Cheeks */}
        <div className="absolute top-[68%] left-4 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-70"></div>
        <div className="absolute top-[68%] right-4 w-2.5 h-2.5 bg-pink-300 rounded-full opacity-70"></div>

        {/* Tail - fluffy curve */}
        <div
          className={`
            absolute -right-5 top-[30%] w-3 h-12 bg-amber-600 rounded-full origin-bottom-right
            ${isHappy ? 'animate-tail-wag' : 'rotate-[25deg]'}
          `}
        ></div>

        {/* Paws */}
        <div className="absolute bottom-1 left-6 w-3 h-3 bg-amber-500 rounded-full shadow-sm"></div>
        <div className="absolute bottom-1 right-6 w-3 h-3 bg-amber-500 rounded-full shadow-sm"></div>
      </div>

      {/* Sparkles when happy */}
      {isHappy && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-yellow-400 text-xl animate-ping">
          ✨
        </div>
      )}

      {/* Custom Animations */}
      <style>{`
        @keyframes tail-wag {
          0%, 100% { transform: rotate(25deg); }
          50% { transform: rotate(-15deg); }
        }
        .animate-tail-wag {
          animation: tail-wag 0.4s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default PetMascot;
