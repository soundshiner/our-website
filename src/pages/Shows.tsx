import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';

const Shows = () => {
  const shows = [
    {
      name: "Morning Vibes",
      time: "6h00 - 10h00",
      description: "Commencez votre journée avec une sélection éclectique pour vous réveiller en douceur",
      host: "DJ Aurora"
    },
    {
      name: "Lunch Break Beats",
      time: "12h00 - 14h00", 
      description: "Des rythmes énergiques pour accompagner votre pause déjeuner",
      host: "DJ Pulse"
    },
    {
      name: "Underground Sessions",
      time: "20h00 - 22h00",
      description: "Explorez les sons underground et les nouveautés que vous n'entendrez nulle part ailleurs",
      host: "DJ Shadow"
    },
    {
      name: "Late Night Lounge",
      time: "22h00 - 02h00",
      description: "Ambiances feutrées et sons contemplatifs pour terminer la journée",
      host: "DJ Luna"
    }
  ];

  return (
    <>
      <Helmet 
        title="Émissions | soundSHINE Radio"
        description="Découvrez toutes les émissions de soundSHINE Radio et leurs animateurs passionnés."
        ogUrl="https://soundshineradio.com/shows"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Nos Émissions</h1>
          
          <div className="space-y-6 mb-8">
            {shows.map((show, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h2 className="text-2xl font-semibold">{show.name}</h2>
                  <span className="text-lg font-medium bg-white/20 px-3 py-1 rounded-full">{show.time}</span>
                </div>
                <p className="text-lg mb-3">{show.description}</p>
                <p className="text-sm opacity-80">Animé par {show.host}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Programmation Continue</h2>
            <p className="text-lg">
              En dehors des créneaux d'émissions spéciales, soundSHINE Radio diffuse une programmation 
              musicale continue et variée, mélangeant tous les genres et toutes les époques pour une 
              expérience d'écoute unique 24h/24.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shows;