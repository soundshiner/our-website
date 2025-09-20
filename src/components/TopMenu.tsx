import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info, Mail, Menu, ShoppingBag, X, Radio,Calendar,Ticket,HeartHandshake,Users,Headphones, Instagram, Twitter, Youtube, Facebook} from "lucide-react";
import { FaInstagram, FaYoutube, FaTiktok, FaMastodon, FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"
import { Link, useNavigate } from "react-router-dom"
import AboutModal from "./AboutModal";
import ContactModal from "./ContactModal";
import { useIsMobile } from "@/hooks/use-mobile";

const TopMenu = () => {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(prev => !prev);
  };

  return (
    <>
      {/* Header mobile avec avatar */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 px-4 py-3 z-50">
          <div className="flex items-center justify-between">
            {/* Avatar + Nom de la station */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4d1fae] to-[#f0b1f7] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">sS</span>
              </div>
              <div>
                <h1 className="text-[#220d50] font-semibold text-lg leading-tight">soundSHINE</h1>
                <p className="text-[#4d1fae] text-xs">Radio</p>
              </div>
            </div>

            {/* Menu Hamburger - Version foncée */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-2 rounded-lg bg-gray-100/80 hover:bg-gray-200/80 transition-colors border-0"
              onClick={handleMobileMenuToggle}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#220d50]" />
              ) : (
                <Menu className="h-6 w-6 text-[#220d50]" />
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Menu desktop (inchangé) */}
      {!isMobile && (
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#4d1fae] hover:bg-[#220d50] hover:text-white transition-colors"
            onClick={() => setAboutOpen(true)}
          >
            <Info className="mr-1 h-4 w-4" />
            La Vibe soundSHINE
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-[#4d1fae] hover:bg-[#220d50] hover:text-white transition-colors"
            onClick={() => setContactOpen(true)}
          >
            <Mail className="mr-1 h-4 w-4" />
            Contactez-nous!
          </Button>
        </div>
      )}

      {/* Menu mobile slide amélioré */}
      {isMobile && (
        <>
          {/* Overlay */}
          {mobileMenuOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
          )}
          
          {/* Menu Slide */}
          <div className={`
            fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 
            transform transition-transform duration-300 ease-out
            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            {/* Header du menu avec gradient */}
            <div className="bg-gradient-to-r from-[#4d1fae] to-[#f0b1f7] p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">sS</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-lg">soundSHINE Radio</h2>
                    <p className="text-purple-100 text-sm">En direct</p>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-1">
              <MenuItem 
                href="#"
                icon={<Info className="w-5 h-5" />}
                label="À propos de soundSHINE" 
                onClick={() => {
                  setAboutOpen(true);
                  setMobileMenuOpen(false);
                }}
              />
              <MenuItem
                onClick={undefined}
                icon={<ShoppingBag className="w-5 h-5" />}
                label="La Shop"
                href="https://shop.soundshineradio.com"
                external
              />
              <MenuItem 
                href="#"
                icon={<Mail className="w-5 h-5" />}
                label="Contactez-nous" 
                onClick={() => {
                  setContactOpen(true);
                  setMobileMenuOpen(false);
                }}
              />
              <MenuItem icon={<Radio className="w-5 h-5" />} label="Émissions" href="/shows" onClick={undefined} />
              <MenuItem icon={<Calendar className="w-5 h-5" />} label="Horaire" href="/schedule" onClick={undefined} />
              <MenuItem icon={<Ticket className="w-5 h-5" />} label="Événements" href="/events" onClick={undefined} />
              <MenuItem icon={<HeartHandshake className="w-5 h-5" />} label="Faire un don" href="/donate" onClick={undefined} />
              <MenuItem icon={<Users className="w-5 h-5" />} label="Rejoignez-nous" href="/join" onClick={undefined} />
              <MenuItem icon={<Headphones className="w-5 h-5" />} label="Options d'écoute" href="/listening-options" onClick={undefined} />
            </div>
<div className="px-4 pt-6 pb-8 mt-4">
  <div className="flex justify-center space-x-6 mb-6">
                <SocialIcon 
                  href="https://www.instagram.com/soundshiner/" 
                  Icon={FaInstagram}
                  label="Instagram"
                />
                <SocialIcon 
                  href="https://discord.gg/uhc7RUSk84" 
                  Icon={FaDiscord}
                  label="Discord"
                />
                <SocialIcon 
                  href="https://www.facebook.com/soundshiner/" 
                  Icon={FaFacebook}
                  label="Facebook"
                />
                <SocialIcon 
                  href="https://www.x.com/soundshiner/" 
                  Icon={FaTwitter}
                  label="Twitter"
                />
  </div>
</div>            
            </div>
        </>
      )}

      <AboutModal open={aboutOpen} onOpenChange={setAboutOpen} />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
};

// Composant SocialIcon pour les réseaux sociaux
const SocialIcon = ({ href, Icon, label }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-purple-800 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

// Composant MenuItem pour le menu mobile
const MenuItem = ({ icon, label, onClick, href, external = false }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (external) {
        window.open(href, '_blank', 'noopener noreferrer');
      } else {
        navigate(href);
      }
    }
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-[#4d1fae]/20 transition-colors text-left group"
      >
        <span className="text-[#4d1fae] group-hover:text-white transition-colors">{icon}</span>
        <span className="text-[#4d1fae] font-medium group-hover:-[#4d1fae]/80  transition-colors">{label}</span>
      </button>
      <hr className="border-t border-gray-200 my-1" />
    </>
  );
};

export default TopMenu;