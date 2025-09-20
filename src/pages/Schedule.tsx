import React from 'react';
import Helmet from '@/components/Helmet';


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
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Grille de Programmation</h1>
          
          <div className="space-y-8">
            {schedule.map((day, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center">{day.day}</h2>
                <div className="space-y-2">
                  {day.slots.map((slot, slotIndex) => (
                    <div key={slotIndex} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="font-medium">{slot.time}</div>
                      <div className="text-center flex-1 mx-4">
                        <div className="font-semibold">{slot.show}</div>
                        {slot.host !== "Auto" && (
                          <div className="text-sm opacity-80">avec {slot.host}</div>
                        )}
                      </div>
                      <div className="text-sm opacity-60">{slot.host}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mt-8">
            <h2 className="text-2xl font-semibold mb-4">Notes importantes</h2>
            <ul className="space-y-2 text-lg">
              <li>• Les horaires sont indiqués en heure locale</li>
              <li>• La programmation peut être modifiée en cas d'événements spéciaux</li>
              <li>• En dehors des créneaux d'émissions, une programmation musicale continue est diffusée</li>
              <li>• Suivez-nous sur les réseaux sociaux pour les annonces de dernière minute</li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Schedule;