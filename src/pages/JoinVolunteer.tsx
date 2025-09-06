import React from 'react';
import Helmet from '@/components/Helmet';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const JoinVolunteer = () => {
  const roles = [
    {
      title: "Support Technique",
      description: "Maintenance serveurs, gestion streaming, développement web",
      skills: "HTML/CSS, Administration système, Streaming audio"
    },
    {
      title: "Community Management",
      description: "Animation réseaux sociaux, engagement communauté",
      skills: "Réseaux sociaux, Communication, Créativité"
    },
    {
      title: "Événementiel",
      description: "Organisation concerts, rencontres, partenariats",
      skills: "Organisation, Relationnel, Logistique"
    },
    {
      title: "Graphisme & Design",
      description: "Visuels émissions, site web, communication",
      skills: "Photoshop, Illustrator, Design UI/UX"
    }
  ];

  return (
    <>
      <Helmet 
        title="Bénévolat | soundSHINE Radio"
        description="Devenez bénévole chez soundSHINE Radio et contribuez au développement de notre station indépendante."
        ogUrl="https://soundshineradio.com/join/volunteer"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Rejoignez nos Bénévoles</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Pourquoi être bénévole ?</h2>
            <p className="text-lg mb-4">
              En tant que bénévole chez soundSHINE Radio, vous contribuez directement à l'indépendance 
              et au développement de notre station. C'est une opportunité unique de développer vos 
              compétences, de rencontrer des passionnés de musique et de faire partie d'un projet innovant.
            </p>
            <ul className="space-y-2 text-lg">
              <li>• Développez vos compétences dans un environnement créatif</li>
              <li>• Participez à des projets concrets et visibles</li>
              <li>• Rejoignez une communauté passionnée</li>
              <li>• Flexibilité selon vos disponibilités</li>
              <li>• Formation et accompagnement personnalisé</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Rôles disponibles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{role.title}</h3>
                  <p className="text-lg mb-3">{role.description}</p>
                  <p className="text-sm opacity-80">
                    <strong>Compétences recherchées:</strong> {role.skills}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Candidature Bénévolat</h2>
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
                <label className="block text-sm font-medium mb-2">Domaine d'intérêt principal</label>
                <select className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-3 py-2">
                  <option value="">Sélectionnez un domaine</option>
                  <option value="technique">Support Technique</option>
                  <option value="community">Community Management</option>
                  <option value="events">Événementiel</option>
                  <option value="design">Graphisme & Design</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Compétences et expérience</label>
                <Textarea 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Décrivez vos compétences pertinentes..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Motivation</label>
                <Textarea 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Pourquoi souhaitez-vous rejoindre soundSHINE Radio ?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Disponibilités</label>
                <Textarea 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  placeholder="Combien de temps pouvez-vous consacrer ? Quand êtes-vous disponible ?"
                />
              </div>

              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                Envoyer ma candidature
              </Button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default JoinVolunteer;