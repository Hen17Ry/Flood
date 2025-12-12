import { AlertCircle, MapPin, Layers, MessageSquare } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Manque d\'alerte précoce adaptée localement',
      description: 'Les systèmes existants ne prennent pas en compte les spécificités locales et la topographie des quartiers.',
    },
    {
      icon: MapPin,
      title: 'Difficulté à visualiser les zones à risque',
      description: 'Absence de cartes claires et accessibles montrant les zones inondables en temps réel.',
    },
    {
      icon: Layers,
      title: 'Informations dispersées',
      description: 'Les données météo, terrain et autorités sont fragmentées et difficiles à synthétiser.',
    },
    {
      icon: MessageSquare,
      title: 'Alerte communautaire non structurée',
      description: 'Les signalements citoyens ne sont pas validés ni diffusés de manière organisée.',
    },
  ];

  return (
    <section id="probleme" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Pourquoi les inondations font encore autant de dégâts ?
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Malgré les avancées technologiques, plusieurs obstacles empêchent une prévention efficace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#60A5FA]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-lg flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">{problem.title}</h3>
                  <p className="text-[#2563EB]/70">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
