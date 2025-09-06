import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur-sm border-b border-border py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
        >
          <Home size={24} />
          <span className="text-xl font-semibold">soundSHINE Radio</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;