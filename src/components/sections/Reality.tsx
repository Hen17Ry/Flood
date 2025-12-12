import { Clock, MapPin, AlertTriangle } from 'lucide-react';

const Reality = () => {
  const issues = [
    {
      icon: Clock,
      title: 'Alerte trop tard',
      description: 'Les informations arrivent quand l\'eau est déjà là',
    },
    {
      icon: MapPin,
      title: 'Quartiers vulnérables',
      description: 'Difficile d\'identifier les zones vraiment à risque',
    },
    {
      icon: AlertTriangle,
      title: 'Secours désorganisés',
      description: 'Manque de coordination et de priorisation',
    },
  ];

  return (
    <section id="realite" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            La réalité sur le terrain
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Les inondations en Afrique de l'Ouest sont récurrentes, mais les systèmes d'alerte restent insuffisants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-xl flex items-center justify-center mb-6">
                <issue.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{issue.title}</h3>
              <p className="text-[#2563EB]/70">{issue.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-[#1E3A8A] italic">
            "Quand l'eau arrive, il est souvent déjà trop tard."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reality;
