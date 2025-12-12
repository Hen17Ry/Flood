import { ArrowRight } from 'lucide-react';

const Solution = () => {
  const comparisons = [
    {
      before: 'Information tardive',
      after: 'Risque anticipé',
      description: 'Alertes précoces avec horizon temporel (6h, 24h, 48h)',
    },
    {
      before: 'Décision dans le flou',
      after: 'Carte claire',
      description: 'Visualisation précise des zones à risque en temps réel',
    },
    {
      before: 'Alertes non vérifiées',
      after: 'Validation IA + données satellites',
      description: 'Croisement automatique des signalements avec données objectives',
    },
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] mb-4">
            Ce que PredictFlood change
          </h2>
          <p className="text-2xl text-[#2563EB] font-semibold mb-4">
            Passer de la réaction à la prévention
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-white border border-[#2563EB]/20 rounded-lg px-6 py-3">
                    <span className="text-[#2563EB]/60 line-through">{comparison.before}</span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-right">
                  <div className="inline-block bg-gradient-to-r from-[#2563EB] to-[#60A5FA] rounded-lg px-6 py-3">
                    <span className="text-white font-semibold">{comparison.after}</span>
                  </div>
                </div>
              </div>

              <p className="text-center text-[#1E3A8A] mt-6 font-medium">
                {comparison.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
