import { useState, useRef, useEffect } from "react"
import { RadioStation as RadioStationType } from "@/types/radio"
import { PlayerState } from "@/types/radio"
import Footer from "./Footer"
import { Play, Pause, Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { icecastService } from "@/services/icecastService"
import { lastfmService } from "@/services/lastfmService"
import TopMenu from "./TopMenu"
import { useAudio } from '@/contexts/useAudio'

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
  // Utilisation du contexte audio global
  const { playerState, handlePlay, handlePause } = useAudio();

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
        
      </div>

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