import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import PlayerBar from './PlayerBar';
import { useAudio } from '@/contexts/AudioContext';

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
      <main className="flex-1 pb-20">
        {children}
      </main>
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