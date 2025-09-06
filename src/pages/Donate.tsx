import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Donate = () => {
  return (
    <>
      <Helmet 
        title="Faire un don | soundSHINE Radio"
        description="Soutenez soundSHINE Radio et aidez-nous à continuer de diffuser une programmation musicale unique et indépendante."
        ogUrl="https://soundshineradio.com/donate"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Soutenez soundSHINE Radio</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi nous soutenir ?</h2>
            <p className="text-lg mb-6">
              soundSHINE Radio est une station indépendante qui refuse les compromis commerciaux. 
              Votre soutien nous permet de maintenir une programmation libre et éclectique, 
              sans publicité invasive.
            </p>
            <ul className="space-y-2 text-lg">
              <li>• Programmation 100% indépendante</li>
              <li>• Support aux artistes émergents</li>
              <li>• Qualité audio optimale</li>
              <li>• Développement de nouvelles fonctionnalités</li>
              <li>• Couverture d'événements musicaux</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Supporter</h3>
              <div className="text-3xl font-bold mb-4">5€</div>
              <p className="mb-6">Contribution mensuelle pour soutenir nos coûts de diffusion</p>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                Donner 5€/mois
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center border-2 border-white/30">
              <h3 className="text-xl font-semibold mb-4">Fan</h3>
              <div className="text-3xl font-bold mb-4">15€</div>
              <p className="mb-6">Soutien généreux + accès privilégié aux contenus exclusifs</p>
              <Button className="w-full bg-white/30 hover:bg-white/40 text-white border-white/20">
                Donner 15€/mois
              </Button>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Ambassadeur</h3>
              <div className="text-3xl font-bold mb-4">30€</div>
              <p className="mb-6">Soutien premium + reconnaissance spéciale + goodies exclusifs</p>
              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                Donner 30€/mois
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Don unique</h2>
            <p className="text-lg mb-6">
              Vous préférez faire un don ponctuel ? Chaque contribution, quelle que soit sa taille, 
              nous aide à améliorer notre service et à découvrir de nouveaux talents.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">10€</Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">25€</Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">50€</Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">100€</Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/20">Autre montant</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Donate;