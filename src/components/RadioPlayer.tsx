import { useState, useRef, useEffect } from "react"
import { RadioStation as RadioStationType } from "@/types/radio"
import { PlayerState } from "@/types/radio"
import PlayerBar from "./PlayerBar"
import Footer from "./Footer"
import { Play, Pause, Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { icecastService } from "@/services/icecastService"
import { lastfmService } from "@/services/lastfmService"
import TopMenu from "./TopMenu"

const STATIONS: RadioStationType[] = [
  {
    id: "mainstream",
    name: "Mainstream",
    description: "Les meilleurs hits du moment",
    streamUrl: "https://listen.soundshineradio.com/stream",
    metadataUrl: "https://listen.soundshineradio.com/status-json",
    genre: "Pop"
  }
]

const RadioPlayer = () => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isPlaying: false,
    currentStation: null,
    volume: 0.5,
    isLoading: false,
    currentArtist: undefined,
    currentTitle: undefined,
    albumCover: undefined
  })

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const metadataIntervalRef = useRef<number>()

  const fetchMetadata = async (station: RadioStationType) => {
    if (!station.metadataUrl) {
      console.warn("No metadata URL for station:", station.name)
      return
    }

    try {
      console.log("Fetching metadata for station:", station.name)
      
      const metadata = await icecastService.fetchMetadata(station.metadataUrl)
      
      if (metadata) {
        const { artist, title } = metadata
        console.log("Got metadata:", { artist, title })

        setPlayerState(prev => ({
          ...prev,
          currentArtist: artist,
          currentTitle: title,
          isLoading: false
        }))

        try {
          const albumCover = await lastfmService.getAlbumArt(artist, title)
          setPlayerState(prev => ({
            ...prev,
            albumCover
          }))
        } catch (coverError) {
          console.error("Error fetching album cover:", coverError)
          setPlayerState(prev => ({
            ...prev,
            albumCover: null
          }))
        }
      } else {
        console.log("No metadata available")
        setPlayerState(prev => ({
          ...prev,
          currentArtist: 'Radio SoundShine',
          currentTitle: 'En direct',
          isLoading: false,
          albumCover: null
        }))
      }
    } catch (error) {
      console.error('Error in fetchMetadata:', error)
      setPlayerState(prev => ({
        ...prev,
        currentArtist: 'Radio SoundShine',
        currentTitle: 'Erreur de métadonnées',
        isLoading: false,
        albumCover: null
      }))
    }
  }

  const handlePlay = async (station: RadioStationType) => {
    if (!audioRef.current) return

    setPlayerState(prev => ({ ...prev, isLoading: true }))
    console.log("Trying to play station:", station.name)

    try {
      if (playerState.currentStation?.id === station.id) {
        await audioRef.current.play()
        setPlayerState(prev => ({ 
          ...prev, 
          isPlaying: true,
          isLoading: false 
        }))
      } else {
        if (metadataIntervalRef.current) {
          window.clearInterval(metadataIntervalRef.current)
        }

        audioRef.current.src = station.streamUrl
        await audioRef.current.play()

        console.log("Playing new station:", station.name)
        setPlayerState(prev => ({
          ...prev,
          isPlaying: true,
          currentStation: station,
          currentArtist: 'soundSHINE Radio',
          currentTitle: 'En cours de chargement...',
          albumCover: null
        }))

        await fetchMetadata(station)

        metadataIntervalRef.current = window.setInterval(() => {
          fetchMetadata(station)
        }, 15000)
      }
    } catch (error) {
      console.error('Failed to play audio:', error)
      setPlayerState(prev => ({ 
        ...prev, 
        isLoading: false,
        currentArtist: 'Radio SoundShine',
        currentTitle: 'Erreur de lecture'
      }))
    }
  }

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setPlayerState(prev => ({ ...prev, isPlaying: false }))
    }
  }

  const handleVolumeChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value
      setPlayerState(prev => ({ ...prev, volume: value }))
    }
  }

  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.volume = playerState.volume
    
    return () => {
      if (metadataIntervalRef.current) {
        window.clearInterval(metadataIntervalRef.current)
      }
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [playerState.volume])

  return (
    <div className="min-h-screen w-full text-white flex flex-col bg-gradient-to-br from-purple-400 via-pink-300 to-green-300 animate-gradient-xy">
      
      {/* Menu flottant optimisé mobile */}
      <TopMenu />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex-grow flex flex-col items-center justify-center py-8 sm:py-16">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 w-full">
          
          {/* Logo responsive optimisé */}
          <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
            <img 
              src="logo.png" 
              alt="soundSHINE Radio" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Bouton de lecture avec effet de pulsation */}
          <div className="flex justify-center">
            {playerState.isLoading ? (
              <Button 
                variant="outline"
                className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white/20 backdrop-blur-lg border-white/30 hover:bg-white/30 transition-all duration-300"
                disabled
              >
                <Loader2 className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 animate-spin text-white" />
              </Button>
            ) : (
              <Button
                variant="outline"
                className={`w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white/20 backdrop-blur-lg border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 active:scale-95 ${
                  playerState.isPlaying ? 'animate-pulse ring-4 ring-white/30' : ''
                }`}
                onClick={() => !playerState.isPlaying ? handlePlay(STATIONS[0]) : handlePause()}
              >
                {playerState.isPlaying ? (
                  <Pause className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" fill="white" />
                ) : (
                  <Play className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" fill="white" />
                )}
              </Button>
            )}
          </div>

          {/* Message d'encouragement mobile */}
          <div className="text-center space-y-2 px-4">
            <p className="text-sm sm:text-base text-white/80 font-medium">
              🎵 Prêt.e à découvrir de nouveaux sons ?
            </p>
            <p className="text-xs sm:text-sm text-white/60">
              Appuie sur play et laisse-toi porter !
            </p>
          </div>
        </div>
      </div>

      {/* Footer mobile optimisé */}
      <div className="mt-auto">
        <Footer />
      </div>

      {/* Player Bar avec gestion améliorée */}
      {playerState.currentStation && (
        <PlayerBar 
          playerState={playerState}
          onVolumeChange={handleVolumeChange}
        />
      )}

      {/* Styles CSS personnalisés */}
      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }
        
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
        
        /* Touch feedback */
        @media (hover: none) and (pointer: coarse) {
          button:active {
            transform: scale(0.95);
            transition: transform 0.1s;
          }
        }
      `}</style>
    </div>
  )
}

export default RadioPlayer