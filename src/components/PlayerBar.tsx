import { PlayerState } from "@/types/radio"
import { Volume2, VolumeX, Heart, Share, MoreHorizontal } from "lucide-react"
import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

interface PlayerBarProps {
  playerState: PlayerState
  onVolumeChange: (value: number) => void
}

const PlayerBar = ({ playerState, onVolumeChange }: PlayerBarProps) => {
  const [isVolumeVisible, setIsVolumeVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [previousVolume, setPreviousVolume] = useState(playerState.volume)
  const isMobile = useIsMobile()

  if (!playerState.currentStation) return null

  const handleVolumeToggle = () => {
    if (isMuted || playerState.volume === 0) {
      onVolumeChange(previousVolume > 0 ? previousVolume : 0.5)
      setIsMuted(false)
    } else {
      setPreviousVolume(playerState.volume)
      onVolumeChange(0)
      setIsMuted(true)
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    onVolumeChange(newVolume)
    setIsMuted(newVolume === 0)
    if (newVolume > 0) {
      setPreviousVolume(newVolume)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#220d50]/95 backdrop-blur-lg border-t border-[#4d1fae]/30 shadow-2xl">
      {/* Gradient accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#4d1fae] via-[#f0b1f7] to-[#aff6e4]"></div>
      
      <div className={`${isMobile ? 'px-4 py-3' : 'px-6 py-4'} max-w-7xl mx-auto`}>
        <div className="flex items-center justify-between">
          {/* Info track avec animation */}
          <div className="flex items-center gap-4 flex-1 mr-4 min-w-0">
            {/* Album Cover avec effet hover */}
            <div className="relative group flex-shrink-0">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                {playerState.albumCover ? (
                  <img 
                    src={playerState.albumCover || 'assets/default.png'}
                    alt="Album Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#4d1fae] to-[#f0b1f7] flex items-center justify-center group-hover:from-[#f0b1f7] group-hover:to-[#4d1fae] transition-all duration-300">
                    <span className="text-white text-xs font-bold">♪</span>
                  </div>
                )}
              </div>
            </div>

            {/* Track Info avec animations */}
            <div className="flex-1 min-w-0">
              <div className="text-sm">
                <div className="font-bold text-white flex items-center gap-2 truncate group">
                  <span className="truncate">{playerState.currentArtist || "soundSHINE Radio"}</span>
                  {playerState.isPlaying && (
                    <div className="flex space-x-0.5">
                      <div className="w-1 h-3 bg-[#aff6e4] rounded-full animate-pulse"></div>
                      <div className="w-1 h-3 bg-[#f0b1f7] rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-1 h-3 bg-[#4d1fae] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  )}
                </div>
                <div className="text-[#aff6e4] truncate">
                  {playerState.currentTitle || "On met d'la vie"}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contrôles modernes */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {!isMobile && (
              <>
                {/* Bouton like */}
                <button className="p-2 rounded-full hover:bg-[#4d1fae]/20 transition-colors group">
                  <Heart className="h-4 w-4 text-[#aff6e4] group-hover:text-[#f0b1f7] transition-colors" />
                </button>
                
                {/* Bouton partage */}
                <button className="p-2 rounded-full hover:bg-[#4d1fae]/20 transition-colors group">
                  <Share className="h-4 w-4 text-[#aff6e4] group-hover:text-white transition-colors" />
                </button>
              </>
            )}

            {/* Contrôle volume moderne */}
            <div className="flex items-center space-x-2 relative">
              <button
                onClick={handleVolumeToggle}
                onMouseEnter={() => setIsVolumeVisible(true)}
                className="p-2 rounded-full hover:bg-[#4d1fae]/20 transition-colors group"
              >
                {isMuted || playerState.volume === 0 ? 
                  <VolumeX className="h-5 w-5 text-[#aff6e4] group-hover:text-white transition-colors" /> : 
                  <Volume2 className="h-5 w-5 text-[#aff6e4] group-hover:text-white transition-colors" />
                }
              </button>
              
              {/* Slider volume - apparaît au hover sur desktop */}
              <div 
                className={`${
                  isMobile ? 'block' : 'absolute right-0 bottom-full mb-2'
                } transition-all duration-200 ${
                  isMobile || isVolumeVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onMouseEnter={() => setIsVolumeVisible(true)}
                onMouseLeave={() => setIsVolumeVisible(false)}
              >
                <div className={`${
                  isMobile ? '' : 'bg-[#220d50] p-3 rounded-lg shadow-xl border border-[#4d1fae]/30'
                } flex items-center gap-2`}>
                  <input 
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={playerState.volume}
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-20 h-1 bg-[#4d1fae]/30 rounded-full outline-none slider-thumb"
                  />
                  <span className="text-[#aff6e4] text-xs font-medium w-8">
                    {Math.round(playerState.volume * 100)}
                  </span>
                </div>
              </div>
            </div>

            {/* Menu plus d'options (mobile) */}
            {isMobile && (
              <button className="p-2 rounded-full hover:bg-[#4d1fae]/20 transition-colors group">
                <MoreHorizontal className="h-5 w-5 text-[#aff6e4] group-hover:text-white transition-colors" />
              </button>
            )}
          </div>
        </div>

        {/* Barre de progression de la chanson (optionnelle) */}
        {(playerState.currentTitle && playerState.currentTitle !== "En direct") && (
          <div className="mt-3 pt-3 border-t border-[#4d1fae]/20">
            <div className="flex items-center justify-between text-xs text-[#aff6e4] mb-1">
              <span>En cours</span>
              <span>soundSHINE Radio</span>
            </div>
            <div className="w-full h-1 bg-[#4d1fae]/30 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#4d1fae] to-[#f0b1f7] rounded-full animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlayerBar