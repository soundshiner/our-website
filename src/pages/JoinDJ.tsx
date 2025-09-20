import React from 'react';
import Helmet from '@/components/Helmet';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const JoinDJ = () => {
  return (
    <>
      <Helmet 
        title="Devenir DJ | soundSHINE Radio"
        description="Rejoignez l'équipe de DJs de soundSHINE Radio et animez votre propre émission musicale."
        ogUrl="https://soundshineradio.com/join/dj"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Devenez DJ soundSHINE</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Ce que nous offrons</h2>
              <ul className="space-y-3 text-lg">
                <li>• Studio d'enregistrement professionnel</li>
                <li>• Formation technique complète</li>
                <li>• Liberté créative totale</li>
                <li>• Audience internationale</li>
                <li>• Support marketing pour vos émissions</li>
                <li>• Rémunération selon expérience</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Nous recherchons</h2>
              <ul className="space-y-3 text-lg">
                <li>• Passion pour la musique éclectique</li>
                <li>• Expérience en animation (appréciée)</li>
                <li>• Créativité et originalité</li>
                <li>• Disponibilité régulière</li>
                <li>• Esprit d'équipe</li>
                <li>• Curiosité musicale</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Candidature DJ</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom</label>
                  <Input 
                    type="text" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input 
                    type="text" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Nom d'artiste / Pseudonyme DJ</label>
                <Input 
                  type="text" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="DJ Nom"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Expérience en animation radio/DJ</label>
                <Textarea 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Décrivez votre expérience..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Concept d'émission proposé</label>
                <Textarea 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Quel serait le concept de votre émission ?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Genres musicaux favoris</label>
                <Input 
                  type="text" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="House, Jazz, Rock, Électro..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Disponibilités</label>
                <Textarea 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Quand êtes-vous disponible pour animer ?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Liens (SoundCloud, mixs, réseaux sociaux...)</label>
                <Textarea 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Partagez vos créations ou profils..."
                />
              </div>

              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                Envoyer ma candidature
              </Button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default JoinDJ;