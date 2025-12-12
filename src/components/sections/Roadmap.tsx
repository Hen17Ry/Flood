import { Calendar, Database, Smartphone, Monitor, TestTube, Rocket } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      icon: Database,
      period: 'Mois 1-2',
      title: 'Consolidation pipeline données',
      description: 'Intégration données satellites, météo et topographiques',
      status: 'in-progress',
    },
    {
      icon: Smartphone,
      period: 'Mois 2-3',
      title: 'App mobile + alertes',
      description: 'Développement interface citoyenne et système de notifications',
      status: 'upcoming',
    },
    {
      icon: Monitor,
      period: 'Mois 3-4',
      title: 'Dashboard organisations',
      description: 'Plateforme web pour coordination et suivi multi-zones',
      status: 'upcoming',
    },
    {
      icon: TestTube,
      period: 'Mois 4-5',
      title: 'Tests terrain + sécurité',
      description: 'Validation avec utilisateurs et renforcement sécurité',
      status: 'upcoming',
    },
    {
      icon: Rocket,
      period: 'Mois 6',
      title: 'Lancement public (Togo)',
      description: 'Déploiement officiel et ouverture au grand public',
      status: 'upcoming',
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-8 h-8 text-[#2563EB]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A]">
              Feuille de route
            </h2>
          </div>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            6 mois pour passer du développement au lancement public
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563EB] via-[#60A5FA] to-[#2563EB]"></div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative lg:pl-20 ${
                  phase.status === 'in-progress' ? 'opacity-100' : 'opacity-90'
                }`}
              >
                <div className="absolute left-0 w-16 h-16 bg-white border-4 border-[#60A5FA] rounded-full flex items-center justify-center hidden lg:flex">
                  <phase.icon className={`w-8 h-8 ${
                    phase.status === 'in-progress' ? 'text-[#2563EB]' : 'text-[#60A5FA]'
                  }`} />
                </div>

                <div className={`bg-[#F3F4F6] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${
                  phase.status === 'in-progress' ? 'border-2 border-[#2563EB]' : ''
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-lg flex items-center justify-center lg:hidden">
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#60A5FA] block">{phase.period}</span>
                        <h3 className="text-xl font-bold text-[#1E3A8A]">{phase.title}</h3>
                      </div>
                    </div>
                    {phase.status === 'in-progress' && (
                      <div className="inline-flex items-center space-x-2 bg-[#2563EB] text-white px-4 py-2 rounded-full text-sm font-semibold">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>En cours</span>
                      </div>
                    )}
                  </div>
                  <p className="text-[#2563EB]/80">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-8 text-center text-white">
          <p className="text-xl font-semibold mb-2">Extension régionale prévue</p>
          <p className="text-lg opacity-90">Togo → Bénin → Niger → Afrique de l'Ouest</p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
