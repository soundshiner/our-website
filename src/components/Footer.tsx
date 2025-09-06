import { FaInstagram, FaYoutube, FaTiktok, FaMastodon, FaDiscord } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"
import { Link } from "react-router-dom"

const Footer = () => {
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
              href="#" 
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
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

export default Footer
