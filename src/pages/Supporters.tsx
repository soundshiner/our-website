import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';

const Supporters = () => {
  const supporters = [
    { name: "Marie L.", tier: "Ambassadrice", since: "Janvier 2024" },
    { name: "Alex D.", tier: "Fan", since: "Février 2024" },
    { name: "Jordan M.", tier: "Supporter", since: "Janvier 2024" },
    { name: "Sam R.", tier: "Ambassadeur", since: "Mars 2024" },
    { name: "Casey P.", tier: "Fan", since: "Février 2024" },
    { name: "Taylor B.", tier: "Supporter", since: "Mars 2024" }
  ];

  const partners = [
    {
      name: "Studio Harmony",
      description: "Studio d'enregistrement partenaire pour nos sessions live",
      type: "Partenaire Technique"
    },
    {
      name: "Vinyl Paradise",
      description: "Disquaire indépendant, fournisseur de nos découvertes rares",
      type: "Partenaire Musical"
    },
    {
      name: "EcoSound",
      description: "Solutions d'hébergement audio écologique pour notre streaming",
      type: "Partenaire Technologique"
    }
  ];

  return (
    <>
      <Helmet 
        title="Nos Supporters | soundSHINE Radio"
        description="Découvrez tous ceux qui soutiennent soundSHINE Radio : donateurs, partenaires et contributeurs à notre mission."
        ogUrl="https://soundshineradio.com/supporters"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Nos Précieux Supporters</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Merci à tous !</h2>
            <p className="text-lg">
              soundSHINE Radio n'existerait pas sans le soutien incroyable de notre communauté. 
              Chaque don, chaque partage, chaque écoute compte et nous permet de continuer 
              à vous offrir une programmation musicale unique et indépendante.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Donateurs Fidèles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {supporters.map((supporter, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{supporter.name}</h3>
                      <p className="text-sm opacity-80">Supporter depuis {supporter.since}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      supporter.tier === 'Ambassadeur' || supporter.tier === 'Ambassadrice' 
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : supporter.tier === 'Fan'
                        ? 'bg-blue-500/20 text-blue-300'
                        : 'bg-green-500/20 text-green-300'
                    }`}>
                      {supporter.tier}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-lg opacity-80">Et beaucoup d'autres supporters anonymes ❤️</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Partenaires</h2>
            <div className="space-y-4">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-lg">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Rejoignez nos supporters</h2>
            <p className="text-lg mb-6">
              Vous aussi, soutenez soundSHINE Radio et contribuez à l'indépendance de notre programmation. 
              Chaque contribution, qu'elle soit financière ou en nature, nous aide à grandir et à découvrir 
              de nouveaux talents.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/20 rounded-lg px-6 py-3 transition-colors">
                Faire un don
              </button>
              <button className="flex-1 bg-white/20 hover:bg-white/30 text-white border border-white/20 rounded-lg px-6 py-3 transition-colors">
                Devenir partenaire
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Supporters;