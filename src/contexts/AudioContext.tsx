import React, { createContext, useState, useRef, useEffect, ReactNode } from 'react';
import { PlayerState, RadioStation } from '@/types/radio';
import { icecastService } from '@/services/icecastService';
import { lastfmService } from '@/services/lastfmService';
import { AudioContext } from './audioContextInstance';

export interface AudioContextType {
  playerState: PlayerState;
  audioRef: React.RefObject<HTMLAudioElement>;
  handlePlay: (station: RadioStation) => Promise<void>;
  handlePause: () => void;
  handleVolumeChange: (value: number) => void;
}

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

  // Initialiser l'audio dès le montage du provider
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = playerState.volume;
      
      // Événements audio pour debugging
      audioRef.current.addEventListener('play', () => {
        console.log('🎵 Audio started playing');
      });
      
      audioRef.current.addEventListener('pause', () => {
        console.log('⏸️ Audio paused');
      });
      
      audioRef.current.addEventListener('error', (e) => {
        console.error('❌ Audio error:', e);
      });
    }
    
    return () => {
      if (metadataIntervalRef.current) {
        window.clearInterval(metadataIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Mettre à jour le volume quand il change
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = playerState.volume;
    }
  }, [playerState.volume]);

  const fetchMetadata = async (station: RadioStation) => {
    if (!station.metadataUrl) {
      console.warn("No metadata URL for station:", station.name);
      return;
    }

    try {
      console.log("🔍 Fetching metadata for station:", station.name);
      
      const metadata = await icecastService.fetchMetadata(station.metadataUrl);
      
      if (metadata) {
        const { artist, title } = metadata;
        console.log("📊 Got metadata:", { artist, title });

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
        console.log("📻 No metadata available - using fallback");
        setPlayerState(prev => ({
          ...prev,
          currentArtist: 'soundSHINE Radio',
          currentTitle: 'En direct',
          isLoading: false,
          albumCover: null
        }));
      }
    } catch (error) {
      console.error('❌ Error in fetchMetadata:', error);
      setPlayerState(prev => ({
        ...prev,
        currentArtist: 'soundSHINE Radio',
        currentTitle: 'Erreur de métadonnées',
        isLoading: false,
        albumCover: null
      }));
    }
  };

  const handlePlay = async (station: RadioStation) => {
    console.log("▶️ handlePlay called with station:", station.name);
    
    if (!audioRef.current) {
      console.error("❌ Audio ref is null!");
      return;
    }

    setPlayerState(prev => ({ ...prev, isLoading: true }));

    try {
      if (playerState.currentStation?.id === station.id && !playerState.isPlaying) {
        console.log("🔄 Resuming same station...");
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

        console.log("🆕 Setting new stream URL:", station.streamUrl);
        audioRef.current.src = station.streamUrl;
        await audioRef.current.play();

        setPlayerState(prev => ({
          ...prev,
          isPlaying: true,
          currentStation: station,
          currentArtist: 'soundSHINE Radio',
          currentTitle: 'Connexion en cours...',
          albumCover: null,
          isLoading: false
        }));

        // Fetch metadata immediately
        await fetchMetadata(station);

        // Set up metadata polling
        metadataIntervalRef.current = window.setInterval(() => {
          fetchMetadata(station);
        }, 15000);
      }
    } catch (error) {
      console.error('❌ Failed to play audio:', error);
      setPlayerState(prev => ({ 
        ...prev, 
        isLoading: false,
        currentArtist: 'soundSHINE Radio',
        currentTitle: 'Erreur de lecture'
      }));
    }
  };

  const handlePause = () => {
    console.log("⏸️ handlePause called");
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayerState(prev => ({ ...prev, isPlaying: false }));
    }
  };

  const handleVolumeChange = (value: number) => {
    console.log("🔊 Volume change:", Math.round(value * 100) + "%");
    setPlayerState(prev => ({ ...prev, volume: value }));
  };

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