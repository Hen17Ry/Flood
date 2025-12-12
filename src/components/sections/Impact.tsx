import { ShieldCheck, Users, TrendingUp, Target } from 'lucide-react';

const Impact = () => {
  const impacts = [
    {
      icon: ShieldCheck,
      title: 'Réduction des pertes',
      description: 'Moins de victimes et de dégâts matériels grâce à l\'anticipation',
      metric: 'humaines et matérielles',
    },
    {
      icon: Users,
      title: 'Préparation des secours',
      description: 'Équipes mobilisées et positionnées avant l\'impact',
      metric: 'coordination optimisée',
    },
    {
      icon: TrendingUp,
      title: 'Communautés plus résilientes',
      description: 'Citoyens informés et préparés face aux risques',
      metric: 'culture de prévention',
    },
  ];

  const sdgs = [
    { number: '1', title: 'Pas de pauvreté', color: 'from-red-600 to-red-700' },
    { number: '11', title: 'Villes et communautés durables', color: 'from-orange-500 to-orange-600' },
    { number: '13', title: 'Mesures relatives au climat', color: 'from-green-600 to-green-700' },
  ];

  return (
    <section id="impact" className="py-20 bg-[#F3F4F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            L'impact attendu
          </h2>
          <p className="text-lg text-[#2563EB]/80 max-w-2xl mx-auto">
            Réduire les conséquences des inondations en Afrique de l'Ouest
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB] to-[#60A5FA] rounded-xl flex items-center justify-center mb-6">
                <impact.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-3">{impact.title}</h3>
              <p className="text-[#2563EB]/70 mb-3">{impact.description}</p>
              <div className="inline-block bg-[#F3F4F6] rounded-lg px-4 py-2">
                <span className="text-sm font-semibold text-[#2563EB]">{impact.metric}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Target className="w-6 h-6 text-[#2563EB]" />
            <h3 className="text-2xl font-bold text-[#1E3A8A]">
              Contribution aux Objectifs de Développement Durable
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div className={`w-24 h-24 bg-gradient-to-br ${sdg.color} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                  <span className="text-3xl font-bold text-white">{sdg.number}</span>
                </div>
                <p className="text-sm text-center text-[#1E3A8A] font-medium max-w-[140px]">
                  ODD {sdg.number}
                </p>
                <p className="text-xs text-center text-[#2563EB]/70 max-w-[140px]">
                  {sdg.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
