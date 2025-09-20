import React from 'react';
import Helmet from '@/components/Helmet';


const About = () => {
  return (
    <>
      <Helmet 
        title="À propos | soundSHINE Radio"
        description="Découvrez l'histoire de soundSHINE Radio, notre mission et notre équipe passionnée de musique éclectique."
        ogUrl="https://soundshineradio.com/about"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">À propos de soundSHINE Radio</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Notre Mission</h2>
            <p className="text-lg mb-6">
              soundSHINE Radio, c'est bien plus qu'une simple station de radio. Nous sommes un collectif passionné 
              qui refuse la monotonie musicale et propose un mix éclectique unique, 24 heures sur 24, 7 jours sur 7.
            </p>
            <p className="text-lg">
              Tanné d'entendre toujours la même affaire ? Nous aussi ! C'est pourquoi nous avons créé soundSHINE Radio : 
              pour vous offrir des classiques intemporels, des découvertes surprenantes, et du contenu musical 
              que vous n'entendrez nulle part ailleurs.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Notre Philosophie</h2>
            <ul className="space-y-3 text-lg">
              <li>• Diversité musicale avant tout</li>
              <li>• Soutien aux artistes émergents et établis</li>
              <li>• Programmation sans compromis commercial</li>
              <li>• Communauté et partage musical</li>
              <li>• Innovation dans la diffusion radio</li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Rejoignez l'Aventure</h2>
            <p className="text-lg">
              soundSHINE Radio, c'est votre nouvelle destination musicale. Branche-toi, écoute, pis enjoy ! 
              Découvre des sons qui vont élargir tes horizons et redéfinir ta playlist.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default About;