import { useState, useEffect } from 'react';

const Countdown = () => {
  const launchDate = new Date();
  launchDate.setMonth(launchDate.getMonth() + 6);

  const calculateTimeLeft = () => {
    const difference = +launchDate - +new Date();

    if (difference > 0) {
      return {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }

    return { jours: 0, heures: 0, minutes: 0, secondes: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Jours', value: timeLeft.jours },
    { label: 'Heures', value: timeLeft.heures },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Secondes', value: timeLeft.secondes },
  ];

  return (
    <div className="flex flex-col items-center space-y-4">
      <p className="text-white/90 text-lg font-medium">Lancement prévu dans :</p>
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]"
          >
            <div className="text-2xl sm:text-4xl font-bold text-white">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-white/80 mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
