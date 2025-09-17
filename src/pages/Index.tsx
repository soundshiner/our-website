import Helmet from "@/components/Helmet";
import Footer from "@/components/Footer";
import TopMenu from "@/components/TopMenu";
import { Button } from "@/components/ui/button";
import { Play, Pause, Loader2 } from "lucide-react";
import { useAudio } from "@/contexts/useAudio";
import { STATIONS } from "@/contexts/stations";
import { useIsMobile } from "@/hooks/use-mobile";
import RecentTracks from "@/components/RecentTracks";

const Index = () => {
  const { playerState, handlePlay, handlePause } = useAudio();
  const isMobile = useIsMobile();

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

      <div className="min-h-screen w-full text-white flex flex-col custom-gradient relative">
        <TopMenu />

        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex-grow flex flex-col items-center justify-start ${
            isMobile ? "pt-24" : "pt-16 sm:pt-24 lg:pt-32"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 animate-fade-in w-full">
            
            {/* Logo */}
            {isMobile ? (
              <div className="mb-4 w-24 h-24 bg-white/10 rounded-lg"></div>
            ) : (
              <img
                src="logo.png"
                alt="soundSHINE Radio"
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto mb-6 hover-scale"
              />
            )}

            {/* Bouton Play / Loader */}
            <div className="flex justify-center mb-4 sm:mb-6">
              {playerState.isLoading ? (
                <Button
                  variant="outline"
                  className={`${
                    isMobile ? "w-40 h-40" : "mobile-play-button"
                  } bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 pulse-on-hover rounded-full`}
                  disabled
                >
                  <Loader2
                    className={`${
                      isMobile ? "h-40 w-40" : "mobile-play-icon"
                    } animate-spin text-white`}
                  />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className={`${
                    isMobile ? "w-48 h-48" : "mobile-play-button"
                  } bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover-scale-110 rounded-full shadow-xl hover:shadow-2xl`}
                  onClick={() =>
                    !playerState.isPlaying
                      ? handlePlay(STATIONS[0])
                      : handlePause()
                  }
                >
                  {playerState.isPlaying ? (
                    <Pause
                      className={`${
                        isMobile ? "h-48 w-48" : "mobile-play-icon"
                      } text-[#4d1fae]`}
                      fill="#4d1fae"
                    />
                  ) : (
                    <Play
                      className={`${
                        isMobile ? "h-48 w-48" : "mobile-play-icon"
                      } text-[#4d1fae]`}
                      fill="#4d1fae"
                    />
                  )}
                </Button>
              )}
            </div>

            {/* Section Top titres récents */}
            {isMobile && <div className="mt-6 w-full"> <RecentTracks /></div>}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Index;
