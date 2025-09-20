import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const About = () => {
  return (
    <>
      <Helmet 
        title="À propos | soundSHINE Radio"
        description="Découvrez l'histoire de soundSHINE Radio, notre mission et notre équipe passionnée de musique éclectique."
        ogUrl="https://soundshineradio.com/about"
      />
      
      <PageHero 
        title="À propos de soundSHINE Radio"
        subtitle="Un collectif passionné qui refuse la monotonie musicale"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              soundSHINE Radio, c'est bien plus qu'une simple station de radio. Nous sommes un collectif passionné 
              qui refuse la monotonie musicale et propose un mix éclectique unique, 24 heures sur 24, 7 jours sur 7.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Tanné d'entendre toujours la même affaire ? Nous aussi ! C'est pourquoi nous avons créé soundSHINE Radio : 
              pour vous offrir des classiques intemporels, des découvertes surprenantes, et du contenu musical 
              que vous n'entendrez nulle part ailleurs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Philosophie</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gradient-to-br from-[#9b87f5] to-[#230e4e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span className="text-lg text-gray-700">Diversité musicale avant tout</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gradient-to-br from-[#9b87f5] to-[#230e4e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span className="text-lg text-gray-700">Soutien aux artistes émergents et établis</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gradient-to-br from-[#9b87f5] to-[#230e4e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span className="text-lg text-gray-700">Programmation sans compromis commercial</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gradient-to-br from-[#9b87f5] to-[#230e4e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span className="text-lg text-gray-700">Communauté et partage musical</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gradient-to-br from-[#9b87f5] to-[#230e4e] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span className="text-lg text-gray-700">Innovation dans la diffusion radio</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Rejoignez l'Aventure</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              soundSHINE Radio, c'est votre nouvelle destination musicale. Branche-toi, écoute, pis enjoy ! 
              Découvre des sons qui vont élargir tes horizons et redéfinir ta playlist.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;