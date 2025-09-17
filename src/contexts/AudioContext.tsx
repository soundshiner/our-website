import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';
import { PlayerState, RadioStation } from '@/types/radio';
import { icecastService } from '@/services/icecastService';
import { lastfmService } from '@/services/lastfmService';
import { STATIONS } from './stations';

export interface AudioContextType {
  playerState: PlayerState;
  audioRef: React.RefObject<HTMLAudioElement>;
  handlePlay: (station: RadioStation) => Promise<void>;
  handlePause: () => void;
  handleVolumeChange: (value: number) => void;
}

import { AudioContext } from './audioContextInstance';


export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    currentStation: null,
    volume: 0.5,
    isLoading: false,
    currentArtist: undefined,
    currentTitle: undefined,
    albumCover: undefined
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const metadataIntervalRef = useRef<number>();

  const fetchMetadata = async (station: RadioStation) => {
    if (!station.metadataUrl) {
      console.warn("No metadata URL for station:", station.name);
      return;
    }

    try {
      console.log("Fetching metadata for station:", station.name);
      
      const metadata = await icecastService.fetchMetadata(station.metadataUrl);
      
      if (metadata) {
        const { artist, title } = metadata;
        console.log("Got metadata:", { artist, title });

        setPlayerState(prev => ({
          ...prev,
          currentArtist: artist,
          currentTitle: title,
          isLoading: false
        }));

        try {
          const albumCover = await lastfmService.getAlbumArt(artist, title);
          setPlayerState(prev => ({
            ...prev,
            albumCover
          }));
        } catch (coverError) {
          console.error("Error fetching album cover:", coverError);
          setPlayerState(prev => ({
            ...prev,
            albumCover: null
          }));
        }
      } else {
        console.log("No metadata available");
        setPlayerState(prev => ({
          ...prev,
          currentArtist: 'Radio SoundShine',
          currentTitle: 'En direct',
          isLoading: false,
          albumCover: null
        }));
      }
    } catch (error) {
      console.error('Error in fetchMetadata:', error);
      setPlayerState(prev => ({
        ...prev,
        currentArtist: 'Radio SoundShine',
        currentTitle: 'Erreur de métadonnées',
        isLoading: false,
        albumCover: null
      }));
    }
  };

  const handlePlay = async (station: RadioStation) => {
    if (!audioRef.current) return;

    setPlayerState(prev => ({ ...prev, isLoading: true }));
    console.log("Trying to play station:", station.name);

    try {
      if (playerState.currentStation?.id === station.id) {
        await audioRef.current.play();
        setPlayerState(prev => ({ 
          ...prev, 
          isPlaying: true,
          isLoading: false 
        }));
      } else {
        if (metadataIntervalRef.current) {
          window.clearInterval(metadataIntervalRef.current);
        }

        audioRef.current.src = station.streamUrl;
        await audioRef.current.play();

        console.log("Playing new station:", station.name);
        setPlayerState(prev => ({
          ...prev,
          isPlaying: true,
          currentStation: station,
          currentArtist: 'Radio SoundShine',
          currentTitle: 'Connexion en cours...',
          albumCover: null
        }));

        await fetchMetadata(station);

        metadataIntervalRef.current = window.setInterval(() => {
          fetchMetadata(station);
        }, 15000);
      }
    } catch (error) {
      console.error('Failed to play audio:', error);
      setPlayerState(prev => ({ 
        ...prev, 
        isLoading: false,
        currentArtist: 'Radio SoundShine',
        currentTitle: 'Erreur de lecture'
      }));
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayerState(prev => ({ ...prev, isPlaying: false }));
    }
  };

  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value;
      setPlayerState(prev => ({ ...prev, volume: value }));
      // Si le volume passe de 0 à > 0, relancer la lecture
      if (value > 0 && playerState.isPlaying === false) {
        audioRef.current.play();
        setPlayerState(prev => ({ ...prev, isPlaying: true }));
      }
    }
  };

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = playerState.volume;
    
    return () => {
      if (metadataIntervalRef.current) {
        window.clearInterval(metadataIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [playerState.volume]);

  const value: AudioContextType = {
    playerState,
    audioRef,
    handlePlay,
    handlePause,
    handleVolumeChange
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
