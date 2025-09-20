import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ShowCard from '@/components/ShowCard';

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
      
      <PageHero 
        title="Nos Émissions"
        subtitle="Découvrez notre programmation unique et nos animateurs passionnés"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-6 mb-12">
            {shows.map((show, index) => (
              <ShowCard
                key={index}
                name={show.name}
                time={show.time}
                description={show.description}
                host={show.host}
              />
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Programmation Continue</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
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