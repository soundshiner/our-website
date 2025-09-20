import React from 'react';
import Helmet from '@/components/Helmet';

import { Button } from '@/components/ui/button';

const Merch = () => {
  const products = [
    {
      name: "T-shirt soundSHINE Radio",
      price: "25€",
      description: "T-shirt en coton bio avec le logo emblématique de soundSHINE Radio",
      image: "/assets/default.png",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      name: "Hoodie Premium",
      price: "45€", 
      description: "Sweat à capuche confortable, parfait pour les sessions d'écoute nocturnes",
      image: "/assets/default.png",
      sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
      name: "Casquette soundSHINE",
      price: "18€",
      description: "Casquette ajustable avec broderie haute qualité",
      image: "/assets/default.png",
      sizes: ["Unique"]
    },
    {
      name: "Tote Bag Éco",
      price: "12€",
      description: "Sac en toile éco-responsable pour transporter vos vinyles",
      image: "/assets/default.png",
      sizes: ["Unique"]
    },
    {
      name: "Mug Collection",
      price: "15€",
      description: "Mug céramique pour savourer votre café en écoutant soundSHINE",
      image: "/assets/default.png",
      sizes: ["330ml"]
    },
    {
      name: "Stickers Pack",
      price: "8€",
      description: "Pack de 10 stickers résistants aux intempéries",
      image: "/assets/default.png",
      sizes: ["Pack de 10"]
    }
  ];

  return (
    <>
      <Helmet 
        title="Boutique | soundSHINE Radio"
        description="Découvrez la collection officielle soundSHINE Radio : t-shirts, hoodies, accessoires et goodies exclusifs."
        ogUrl="https://soundshineradio.com/merch"
      />
      <div className="min-h-screen w-full text-foreground custom-gradient">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Boutique soundSHINE</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Collection Officielle</h2>
            <p className="text-lg">
              Affichez votre soutien à soundSHINE Radio avec notre collection exclusive. 
              Tous les bénéfices contribuent directement au financement de la station et 
              au soutien des artistes que nous diffusons.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-lg font-bold mb-3 text-green-300">{product.price}</p>
                <p className="text-sm mb-4 opacity-80">{product.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium">Tailles disponibles: </span>
                  <span className="text-sm opacity-80">{product.sizes.join(", ")}</span>
                </div>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20">
                  Ajouter au panier
                </Button>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Livraison</h3>
              <ul className="space-y-2">
                <li>• Livraison gratuite dès 50€ d'achat</li>
                <li>• Expédition sous 2-3 jours ouvrés</li>
                <li>• Livraison en France et Europe</li>
                <li>• Emballage éco-responsable</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Garanties</h3>
              <ul className="space-y-2">
                <li>• Produits de qualité premium</li>
                <li>• Échange possible sous 30 jours</li>
                <li>• Support client réactif</li>
                <li>• Paiement sécurisé</li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Merch;