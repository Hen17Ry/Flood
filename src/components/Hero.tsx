import { Waves, Satellite, Users } from 'lucide-react';
import Countdown from './Countdown';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Waves, text: 'Prédictions géolocalisées' },
    { icon: Satellite, text: 'Données satellites + IA' },
    { icon: Users, text: 'Alertes citoyennes validées' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#1E3A8A]">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
                <path d="M0,70 Q25,50 50,70 T100,70" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Anticiper les inondations
            <br />
            avant qu'elles ne détruisent.
          </h1>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            PredictFlood est une solution mobile et web qui combine IA et données satellites pour
            prédire les zones à risque et diffuser des alertes géolocalisées.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3"
              >
                <feature.icon className="w-5 h-5 text-[#60A5FA]" />
                <span className="text-white text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white text-[#2563EB] rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Être notifié au lancement
            </button>
            <button
              onClick={() => scrollToSection('realite')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Comprendre la solution
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
