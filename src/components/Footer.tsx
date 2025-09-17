import { FaInstagram, FaYoutube, FaTiktok, FaMastodon, FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useIsMobile } from "@/hooks/use-mobile"

const Footer = () => {
  const isMobile = useIsMobile();

  // Version mobile épurée - juste les réseaux sociaux
  if (isMobile) {
    return (
      <footer className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Réseaux sociaux centrés */}
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

          {/* Copyright centré */}
          <div className="text-center mt-4">
            <p className="text-[#aff6e4]/80 text-xs">
              &copy; 2020-{new Date().getFullYear()} soundSHINE Radio. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Version desktop complète (inchangée)
  return (
    <footer className="w-full bg-muted border-t border-border py-8 mt-16">
      <div className="max-w-7xl mx-auto px-12">
        {/* grille auto-ajustée */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto_auto] gap-8">
          
          {/* Colonne 1: Join Us */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  À propos de soundSHINE Radio
                </Link>
              </li>
              <li>
                <Link to="/join/dj" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Devenir DJ / Animateur.trice
                </Link>
              </li>
              <li>
                <Link to="/join/volunteer" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Devenir bénévole
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 2: Radio Shows */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link to="/shows" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Émissions
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Horaire
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Événements
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Support */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link to="/donate" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Faire un don
                </Link>
              </li>
              <li>
                <Link to="/merch" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Merch
                </Link>
              </li>
              <li>
                <Link to="/supporters" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Liste de nos Supporters
                </Link>
              </li>
              <li>
                <Link to="/listening-options" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Options d'écoute
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div className="space-y-4">
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  Contacte-nous
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                  On parle de nous!
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 5: Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/soundshiner/" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a 
              href="#" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Bluesky"
            >
              <FaBluesky size={20} />
            </a>
            <a 
              href="#" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Mastodon"
            >
              <FaMastodon size={20} />
            </a>
            <a 
              href="#" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
            <a 
              href="#" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube size={20} />
            </a>
            <a 
              href="https://discord.gg/uhc7RUSk84" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Discord"
            >
              <FaDiscord size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-4 pt-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2020-2024 soundSHINE Radio. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Composant SocialIcon pour mobile
const SocialIcon = ({ href, Icon, label }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-purple/30 backdrop-blur-lg border-white/20 text-purple-800 hover:bg-white/20 transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    <Icon size={24} />
  </a>
);

export default Footer