import { Building, Handshake } from 'lucide-react';

const Partners = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="partenaires" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Partenaires & Pré-lancement
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Rejoignez-nous pour préparer le déploiement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Vous êtes une organisation ?</h3>
            <p className="text-[#2563EB]/80 mb-6">
              Municipalités, ONG, services de secours : découvrez comment PredictFlood peut soutenir votre mission
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Demander une démo
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E3A8A] mb-4">Vous êtes citoyen ?</h3>
            <p className="text-[#2563EB]/80 mb-6">
              Soyez parmi les premiers informés du lancement de l'application et des alertes dans votre zone
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Être notifié au lancement
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Partenaires techniques & institutionnels</h3>
            <p className="text-[#2563EB]/70">Nous collaborons avec des acteurs clés de la prévention</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-video bg-[#F3F4F6] rounded-xl flex items-center justify-center border-2 border-dashed border-[#60A5FA]/30"
              >
                <span className="text-sm text-[#2563EB]/50 font-medium">Logo partenaire</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
