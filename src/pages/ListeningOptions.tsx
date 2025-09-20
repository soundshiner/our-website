import React from 'react';
import Helmet from '@/components/Helmet';

import { Button } from '@/components/ui/button';

const ListeningOptions = () => {
  return (
    <>
      <Helmet 
        title="Options d'écoute | soundSHINE Radio"
        description="Découvrez toutes les façons d'écouter soundSHINE Radio : web, mobile, smart speakers, et plus encore."
        ogUrl="https://soundshineradio.com/listening-options"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Comment nous écouter</h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">🌐 Site Web</h2>
              <p className="text-lg mb-4">
                Écoutez directement depuis notre site web, où que vous soyez. 
                Player haute qualité avec affichage des métadonnées en temps réel.
              </p>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                Écouter maintenant
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">📱 Application Mobile</h2>
              <p className="text-lg mb-4">
                Téléchargez notre app mobile pour iOS et Android. 
                Écoute en arrière-plan, notifications des nouveautés.
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                  App Store (iOS)
                </Button>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                  Google Play (Android)
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">🔊 Smart Speakers</h2>
              <p className="text-lg mb-4">
                "Hey Google, lance soundSHINE Radio" ou "Alexa, joue soundSHINE Radio". 
                Compatible avec tous les assistants vocaux populaires.
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Amazon Alexa</li>
                <li>• Google Assistant</li>
                <li>• Apple HomePod</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">📻 Radio Traditionnelle</h2>
              <p className="text-lg mb-4">
                Bientôt disponible sur les ondes FM dans votre région. 
                Restez connectés pour les annonces de fréquences.
              </p>
              <p className="text-sm opacity-80">Fréquences à venir...</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">🎧 Qualité Audio</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Standard</h3>
                <p className="text-2xl font-bold mb-2">128 kbps</p>
                <p className="text-sm opacity-80">Parfait pour la mobilité</p>
              </div>
              <div className="text-center border-2 border-white/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2">Haute Qualité</h3>
                <p className="text-2xl font-bold mb-2">320 kbps</p>
                <p className="text-sm opacity-80">Recommandé</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Lossless</h3>
                <p className="text-2xl font-bold mb-2">FLAC</p>
                <p className="text-sm opacity-80">Pour les audiophiles</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">📡 Intégration Tierces</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Plateformes Supportées</h3>
                <ul className="space-y-2">
                  <li>• TuneIn Radio</li>
                  <li>• Radio.net</li>
                  <li>• Shoutcast Directory</li>
                  <li>• Icecast Directory</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Intégrations</h3>
                <ul className="space-y-2">
                  <li>• Last.fm Scrobbling</li>
                  <li>• Discord Rich Presence</li>
                  <li>• Spotify Connect (bientôt)</li>
                  <li>• API publique</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">💡 Conseils d'écoute</h2>
            <ul className="space-y-3 text-lg">
              <li>• Utilisez des écouteurs ou un système audio de qualité pour une expérience optimale</li>
              <li>• La qualité 320 kbps est recommandée pour un bon équilibre qualité/bande passante</li>
              <li>• Activez les notifications pour ne pas manquer vos émissions préférées</li>
              <li>• Partagez vos morceaux favoris avec la fonction de partage intégrée</li>
            </ul>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ListeningOptions;