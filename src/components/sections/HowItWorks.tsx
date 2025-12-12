import { Satellite, Database, Brain, Map, Bell, MapPin } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { icon: Satellite, label: 'Satellites', description: 'Données satellites en temps réel' },
    { icon: Database, label: 'Extraction', description: 'Traitement des données terrain' },
    { icon: Brain, label: 'IA', description: 'Analyse prédictive' },
    { icon: Map, label: 'Carte de risque', description: 'Visualisation géolocalisée' },
    { icon: Bell, label: 'Alertes', description: 'Diffusion ciblée' },
  ];

  return (
    <section id="fonctionnement" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Comment ça marche
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Un pipeline intelligent qui transforme les données en alertes précises
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] transform -translate-y-1/2"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white border-4 border-[#60A5FA] rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 text-[#2563EB]" />
                </div>
                <h3 className="text-lg font-bold text-[#1E3A8A] mb-2 text-center">{step.label}</h3>
                <p className="text-sm text-[#2563EB]/70 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-[#60A5FA]">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">Prédiction à la demande</h3>
              <p className="text-[#2563EB]/80 leading-relaxed">
                L'utilisateur saisit sa position → l'IA estime le risque (0-100) + horizon temporel
                (ex : 6h / 24h / 48h) basé sur les données satellites, la topographie et les prévisions météorologiques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
