import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <div className="relative w-full custom-gradient">
      <div className="absolute inset-0 bg-gradient-to-r from-[#230e4e]/90 to-[#9b87f5]/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;