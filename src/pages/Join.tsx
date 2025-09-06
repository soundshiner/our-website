import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Join = () => {
  return (
    <>
      <Helmet 
        title="Rejoignez-nous | soundSHINE Radio"
        description="Rejoignez l'équipe soundSHINE Radio en tant que DJ, animateur, bénévole ou collaborateur."
        ogUrl="https://soundshineradio.com/join"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Rejoignez soundSHINE Radio</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Devenez DJ</h2>
              <p className="text-lg mb-6">
                Vous avez une passion pour la musique et l'envie de partager vos découvertes ? 
                Rejoignez notre équipe de DJs et animez votre propre émission sur soundSHINE Radio.
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Créez votre propre émission</li>
                <li>• Partagez votre passion musicale</li>
                <li>• Atteignez une audience mondiale</li>
                <li>• Formation et support technique</li>
              </ul>
              <Link to="/join/dj">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                  Postuler comme DJ
                </Button>
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Bénévolat</h2>
              <p className="text-lg mb-6">
                Contribuez au développement de soundSHINE Radio en tant que bénévole. 
                Que ce soit pour la technique, la communication ou l'organisation d'événements.
              </p>
              <ul className="space-y-2 mb-6">
                <li>• Support technique</li>
                <li>• Gestion des réseaux sociaux</li>
                <li>• Organisation d'événements</li>
                <li>• Développement web</li>
              </ul>
              <Link to="/join/volunteer">
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                  Devenir bénévole
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi nous rejoindre ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Communauté</h3>
                <p>Rejoignez une communauté passionnée et créative</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Créativité</h3>
                <p>Liberté totale dans votre expression artistique</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Impact</h3>
                <p>Touchez des auditeurs du monde entier</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Join;