import { Droplet, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A8A] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-lg flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">PredictFlood</span>
            </div>
            <p className="text-white/80 text-sm">
              Solution technologique de prévention des inondations en Afrique de l'Ouest
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#probleme" className="hover:text-white transition-colors">Problème</a></li>
              <li><a href="#fonctionnement" className="hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors">Impact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@predictflood.org</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lomé, Togo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>&copy; {currentYear} PredictFlood. Solution en cours de développement - Lancement prévu dans 6 mois.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
