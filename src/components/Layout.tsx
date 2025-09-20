import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import PlayerBar from './PlayerBar';
import Footer from './Footer';
import { useAudio } from '@/contexts/useAudio';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { playerState, handleVolumeChange } = useAudio();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {!isHomePage && <Header />}
      <main className={`flex-1 ${playerState.currentStation ? 'pb-20 sm:pb-24' : ''}`}>
        {children}
      </main>
      {/* Footer seulement sur les pages autres que l'accueil */}
      {!isHomePage && <Footer />}
      {/* Player Bar maintenant persistant sur toutes les pages */}
      {playerState.currentStation && (
        <PlayerBar 
          playerState={playerState}
          onVolumeChange={handleVolumeChange}
        />
      )}
    </div>
  );
};

export default Layout;