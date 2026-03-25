import { useEffect, useRef, useState } from 'react';
import { Timer, TrendingUp, AlertTriangle } from 'lucide-react';

export function UrgencySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className={`bg-gradient-to-br from-red/10 via-dark to-red/5 border border-red/40 rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Animated background */}
          <div className="absolute inset-0 bg-red/5 animate-pulse" />
          
          <div className="relative z-10">
            {/* Warning header */}
            <div className={`flex items-center justify-center gap-2 mb-6 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <AlertTriangle className="w-5 h-5 text-red" />
              <span className="text-red text-sm uppercase tracking-widest font-bold">Atenção</span>
            </div>

            {/* Title */}
            <h3 className={`text-xl md:text-2xl font-bold text-white text-center mb-2 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              PREÇO DE LANÇAMENTO
            </h3>
            <p className={`text-gray-text text-center mb-8 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Quando o timer acabar, o valor volta para <span className="text-white font-semibold">R$ 97</span>
            </p>

            {/* Timer */}
            <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5 text-red" />
              </div>
              <div className="flex gap-2">
                <div className="bg-dark border border-red/30 rounded-lg px-4 py-3 text-center min-w-[60px]">
                  <span className="text-2xl md:text-3xl font-black text-white">{formatNumber(timeLeft.hours)}</span>
                  <span className="text-gray-muted text-xs block">horas</span>
                </div>
                <span className="text-2xl md:text-3xl font-black text-red self-start pt-2">:</span>
                <div className="bg-dark border border-red/30 rounded-lg px-4 py-3 text-center min-w-[60px]">
                  <span className="text-2xl md:text-3xl font-black text-white">{formatNumber(timeLeft.minutes)}</span>
                  <span className="text-gray-muted text-xs block">min</span>
                </div>
                <span className="text-2xl md:text-3xl font-black text-red self-start pt-2">:</span>
                <div className="bg-dark border border-red/30 rounded-lg px-4 py-3 text-center min-w-[60px]">
                  <span className="text-2xl md:text-3xl font-black text-white">{formatNumber(timeLeft.seconds)}</span>
                  <span className="text-gray-muted text-xs block">seg</span>
                </div>
              </div>
            </div>

            {/* Price comparison */}
            <div className={`flex items-center justify-center gap-4 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="text-center px-4 py-2 bg-dark/50 rounded-lg">
                <span className="text-gray-muted text-xs uppercase block">Agora</span>
                <span className="text-white font-bold">R$ 13,99</span>
              </div>
              <TrendingUp className="w-5 h-5 text-red" />
              <div className="text-center px-4 py-2 bg-dark/50 rounded-lg opacity-60">
                <span className="text-gray-muted text-xs uppercase block">Depois</span>
                <span className="text-gray-text font-bold line-through">R$ 39,99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
