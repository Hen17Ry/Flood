import { Users, Building2, HeartHandshake } from 'lucide-react';

const ForWho = () => {
  const audiences = [
    {
      icon: Users,
      title: 'Citoyens & familles',
      description: 'Recevez des alertes personnalisées selon votre localisation et protégez vos proches.',
      benefits: [
        'Alertes géolocalisées en temps réel',
        'Carte des zones à risque',
        'Signalement participatif',
      ],
    },
    {
      icon: Building2,
      title: 'Municipalités & autorités',
      description: 'Coordonnez vos équipes et priorisez les interventions avec des données fiables.',
      benefits: [
        'Dashboard de suivi multi-zones',
        'Priorisation automatique',
        'Historique et rapports',
      ],
    },
    {
      icon: HeartHandshake,
      title: 'ONG & secours',
      description: 'Planifiez vos interventions et mobilisez vos ressources là où c\'est le plus urgent.',
      benefits: [
        'Coordination des équipes',
        'Carte de priorisation',
        'Export de données terrain',
      ],
    },
  ];

  return (
    <section id="pour-qui" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Pour qui ?
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Une solution conçue pour tous les acteurs de la prévention
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-2xl flex items-center justify-center mb-6">
                <audience.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{audience.title}</h3>
              <p className="text-[#2563EB]/70 mb-6">{audience.description}</p>

              <ul className="space-y-2">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-[#1E3A8A]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#F3F4F6] rounded-2xl p-8">
          <p className="text-lg text-[#1E3A8A] font-semibold">
            Chaque acteur reçoit l'information adaptée à son rôle
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
