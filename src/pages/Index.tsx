
import Helmet from "@/components/Helmet"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Play, Pause, Loader2 } from "lucide-react"
import { useAudio, STATIONS } from "@/contexts/AudioContext"

const Index = () => {
  const { playerState, handlePlay, handlePause } = useAudio();

  return (
    <>
      <Helmet 
        title="soundSHINE Radio | On vous en met plein les oreilles!"
        description="Tanné d'entendre toujours la même affaire ? soundSHINE Radio, c't'un mix éclectique qui sort du lot, 24/7. Des classiques, des découvertes, pis du stock que t'entendras nulle part ailleurs. Branche-toi, écoute, pis enjoy !"
        author="soundSHINE Radio"
        ogImage="https://soundshineradio.com/img/social/fb_link_cover.jpg"
        ogUrl="https://soundshineradio.com"
        fbAppId="2004208316763230"
        twitterCard="summary_large_image"
        twitterImage="https://soundshineradio.com/img/socials/fb_link_cover.jpg"
      />
      <div 
        className="min-h-screen w-full text-white flex flex-col custom-gradient"
      >
        
        <div className="mx-auto max-w-7xl px-4 flex-grow flex flex-col items-center justify-start pt-32">
          <div className="flex flex-col items-center justify-center space-y-8">
            <img 
              src="logo.png" 
              width="75%"
              height="75%"
              alt="soundSHINE Radio" 
              className="w-100 h-auto mb-6"
            />

            <div className="flex justify-center mb-12">
              {playerState.isLoading ? (
                <Button 
                  variant="outline"
                  className="w-32 h-32 rounded-full bg-[#220d50]/10 backdrop-blur-lg border-white/20 hover:bg-[#220d50]/20"
                  disabled
                >
                  <Loader2 className="h-12 w-12 animate-spin text-white" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-32 h-32 rounded-full bg-[#220d50]/10 backdrop-blur-lg border-white/20 hover:bg-[#4d1fae]/20 transition-all duration-300"
                  onClick={() => !playerState.isPlaying ? handlePlay(STATIONS[0]) : handlePause()}
                >
                  {playerState.isPlaying ? (
                    <Pause className="h-12 w-12 text-white" fill="white" />
                  ) : (
                    <Play className="h-12 w-12 text-white" fill="white" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Index
