import { Smartphone, Monitor, MapPinned, Bell, Users, Activity, BarChart3, Download } from 'lucide-react';

const Features = () => {
  const mobileFeatures = [
    { icon: MapPinned, title: 'Carte temps réel', description: 'Zones à risque, inondables et inondées visualisées' },
    { icon: Activity, title: 'Prédiction à la demande', description: 'Estimation du risque selon votre géolocalisation' },
    { icon: Bell, title: 'Alertes push géolocalisées', description: 'Notifications ciblées selon votre position' },
    { icon: Users, title: 'Alerte citoyenne', description: 'Signalement, validation et diffusion communautaire' },
  ];

  const webFeatures = [
    { icon: Monitor, title: 'Suivi multi-zones', description: 'Tableau de bord pour plusieurs secteurs simultanément' },
    { icon: BarChart3, title: 'Priorisation des zones à risque', description: 'Classification automatique par niveau de danger' },
    { icon: Activity, title: 'Coordination secours', description: 'Planification et déploiement des équipes' },
    { icon: Download, title: 'Historique + export', description: 'Données exportables pour analyse et reporting' },
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Fonctionnalités
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Des outils adaptés à chaque acteur de la prévention
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A]">Application Mobile</h3>
            </div>
            <p className="text-[#2563EB]/70 mb-6">Pour les citoyens et familles</p>

            <div className="space-y-4">
              {mobileFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#F3F4F6] rounded-xl p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <feature.icon className="w-5 h-5 text-[#2563EB] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">{feature.title}</h4>
                      <p className="text-sm text-[#2563EB]/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1E3A8A]">Plateforme Web</h3>
            </div>
            <p className="text-[#2563EB]/70 mb-6">Pour les organisations et autorités</p>

            <div className="space-y-4">
              {webFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#F3F4F6] rounded-xl p-4 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <feature.icon className="w-5 h-5 text-[#1E3A8A] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1E3A8A] mb-1">{feature.title}</h4>
                      <p className="text-sm text-[#2563EB]/70">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
