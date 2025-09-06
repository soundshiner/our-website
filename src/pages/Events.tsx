import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Events = () => {
  const upcomingEvents = [
    {
      title: "soundSHINE Live Session #1",
      date: "15 Mars 2024",
      time: "20h00",
      description: "Concert live en direct dans nos studios avec des artistes locaux émergents",
      location: "Studios soundSHINE Radio",
      status: "Gratuit"
    },
    {
      title: "Festival de Musique Éclectique",
      date: "22-24 Avril 2024", 
      time: "Toute la journée",
      description: "Weekend spécial avec des lives, interviews et découvertes musicales",
      location: "En ligne & Partenaires",
      status: "Gratuit"
    },
    {
      title: "Rencontre avec les auditeurs",
      date: "10 Mai 2024",
      time: "18h00",
      description: "Soirée de rencontre avec l'équipe et les auditeurs fidèles",
      location: "À confirmer",
      status: "Sur inscription"
    }
  ];

  const pastEvents = [
    {
      title: "Lancement officiel soundSHINE Radio",
      date: "1er Janvier 2024",
      description: "Célébration du lancement de notre station avec 24h de programmation spéciale"
    },
    {
      title: "Spécial Saint-Valentin",
      date: "14 Février 2024", 
      description: "Journée thématique avec des ballades romantiques et des découvertes love songs"
    }
  ];

  return (
    <>
      <Helmet 
        title="Événements | soundSHINE Radio"
        description="Découvrez tous les événements organisés par soundSHINE Radio : concerts, rencontres, festivals et sessions spéciales."
        ogUrl="https://soundshineradio.com/events"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Nos Événements</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Événements à venir</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <span className="text-sm bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                      {event.status}
                    </span>
                  </div>
                  <div className="mb-3">
                    <p className="text-lg font-medium">📅 {event.date} à {event.time}</p>
                    <p className="text-md opacity-80">📍 {event.location}</p>
                  </div>
                  <p className="text-lg mb-4">{event.description}</p>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                    Plus d'infos
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Événements passés</h2>
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 opacity-80">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <span className="text-sm opacity-60">{event.date}</span>
                  </div>
                  <p className="text-md">{event.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Organisez avec nous</h2>
            <p className="text-lg mb-6">
              Vous organisez un événement musical ? Vous êtes un artiste qui souhaite jouer en live ? 
              Contactez-nous pour explorer des possibilités de collaboration et de diffusion.
            </p>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">
              Proposer un événement
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Events;