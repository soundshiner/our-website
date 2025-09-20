import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ScheduleTable from '@/components/ScheduleTable';

const Schedule = () => {
  const schedule = [
    {
      day: "Lundi",
      slots: [
        { time: "6h00 - 10h00", show: "Morning Vibes", host: "DJ Aurora" },
        { time: "10h00 - 12h00", show: "Programmation Continue", host: "Auto" },
        { time: "12h00 - 14h00", show: "Lunch Break Beats", host: "DJ Pulse" },
        { time: "14h00 - 20h00", show: "Programmation Continue", host: "Auto" },
        { time: "20h00 - 22h00", show: "Underground Sessions", host: "DJ Shadow" },
        { time: "22h00 - 6h00", show: "Late Night Lounge", host: "DJ Luna" }
      ]
    },
    {
      day: "Mardi",
      slots: [
        { time: "6h00 - 10h00", show: "Morning Vibes", host: "DJ Aurora" },
        { time: "10h00 - 12h00", show: "Programmation Continue", host: "Auto" },
        { time: "12h00 - 14h00", show: "Lunch Break Beats", host: "DJ Pulse" },
        { time: "14h00 - 18h00", show: "Programmation Continue", host: "Auto" },
        { time: "18h00 - 20h00", show: "Jazz & Soul Evening", host: "DJ Melody" },
        { time: "20h00 - 22h00", show: "Underground Sessions", host: "DJ Shadow" },
        { time: "22h00 - 6h00", show: "Late Night Lounge", host: "DJ Luna" }
      ]
    },
    {
      day: "Mercredi",
      slots: [
        { time: "6h00 - 10h00", show: "Morning Vibes", host: "DJ Aurora" },
        { time: "10h00 - 12h00", show: "Programmation Continue", host: "Auto" },
        { time: "12h00 - 14h00", show: "Lunch Break Beats", host: "DJ Pulse" },
        { time: "14h00 - 20h00", show: "Programmation Continue", host: "Auto" },
        { time: "20h00 - 22h00", show: "Underground Sessions", host: "DJ Shadow" },
        { time: "22h00 - 6h00", show: "Late Night Lounge", host: "DJ Luna" }
      ]
    }
  ];

  return (
    <>
      <Helmet 
        title="Programmation | soundSHINE Radio"
        description="Consultez la grille horaire complète de soundSHINE Radio et ne manquez plus vos émissions préférées."
        ogUrl="https://soundshineradio.com/schedule"
      />
      
      <PageHero 
        title="Grille de Programmation"
        subtitle="Ne manquez plus vos émissions préférées"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <ScheduleTable schedule={schedule} />

          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notes importantes</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#9b87f5] rounded-full mt-2 flex-shrink-0"></span>
                <span>Les horaires sont indiqués en heure locale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#9b87f5] rounded-full mt-2 flex-shrink-0"></span>
                <span>La programmation peut être modifiée en cas d'événements spéciaux</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#9b87f5] rounded-full mt-2 flex-shrink-0"></span>
                <span>En dehors des créneaux d'émissions, une programmation musicale continue est diffusée</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-[#9b87f5] rounded-full mt-2 flex-shrink-0"></span>
                <span>Suivez-nous sur les réseaux sociaux pour les annonces de dernière minute</span>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Schedule;