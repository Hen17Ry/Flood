import { UserPlus, ScanSearch, CheckCircle, Radio } from 'lucide-react';

const CitizenAlert = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Un citoyen signale',
      description: 'Détection d\'une situation anormale ou d\'un risque imminent dans son quartier',
    },
    {
      icon: ScanSearch,
      title: 'Vérification par IA + données',
      description: 'Croisement automatique avec données satellites, météo et topographie',
    },
    {
      icon: CheckCircle,
      title: 'Validation',
      description: 'Confirmation de la fiabilité du signalement selon plusieurs critères',
    },
    {
      icon: Radio,
      title: 'Diffusion ciblée',
      description: 'Alerte envoyée aux personnes concernées dans la zone à risque',
    },
  ];

  return (
    <section id="alerte-citoyenne" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Alerte citoyenne validée
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Transformer la vigilance collective en action coordonnée
          </p>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563EB] to-[#60A5FA] hidden md:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start md:pl-20">
                <div className="absolute left-0 w-16 h-16 bg-white border-4 border-[#60A5FA] rounded-full flex items-center justify-center hidden md:flex">
                  <step.icon className="w-8 h-8 text-[#2563EB]" />
                </div>

                <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4 md:hidden mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A]">{step.title}</h3>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1E3A8A] mb-3 hidden md:block">{step.title}</h3>
                  <p className="text-[#2563EB]/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl p-8 border-2 border-[#2563EB]">
          <p className="text-lg text-[#1E3A8A] font-semibold">
            L'objectif : éviter les fausses alertes et accélérer les vraies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CitizenAlert;
