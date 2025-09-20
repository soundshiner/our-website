import React from 'react';
import Helmet from '@/components/Helmet';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <>
      <Helmet 
        title="Contact | soundSHINE Radio"
        description="Contactez l'équipe de soundSHINE Radio pour toute question, suggestion ou partenariat."
        ogUrl="https://soundshineradio.com/contact"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input 
                    type="text" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Votre nom"
                  />
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
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <Input 
                    type="text" 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[120px]"
                    placeholder="Votre message..."
                  />
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                  Envoyer le message
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Informations générales</h3>
                <p className="mb-2">📧 info@soundshineradio.com</p>
                <p>📱 +1 (555) SHINE-01</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Partenariats & Publicité</h3>
                <p className="mb-2">📧 partenariat@soundshineradio.com</p>
                <p>Contactez-nous pour discuter d'opportunités de collaboration</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Support technique</h3>
                <p className="mb-2">📧 support@soundshineradio.com</p>
                <p>Problèmes d'écoute ou questions techniques</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Presse</h3>
                <p className="mb-2">📧 presse@soundshineradio.com</p>
                <p>Demandes média et communiqués de presse</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Contact;