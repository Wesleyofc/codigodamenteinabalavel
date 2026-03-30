import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Lock, Shield, Clock } from 'lucide-react';

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 relative">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main CTA Button */}
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            className="group relative w-full sm:w-auto px-12 py-6 bg-red hover:bg-red-dark text-white font-bold text-lg sm:text-xl uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-glow hover:shadow-glow-intense"
            onClick={() => {
              window.location.href = 'https://pay.kirvano.com/fc9fafc7-8bdf-4e18-af5f-a1d99d15274d';
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              QUERO O CÓDIGO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-lg bg-red opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </button>
        </div>

        {/* Subtext */}
        <p className={`text-gray-muted text-sm mt-4 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Acesso imediato • Pagamento seguro
        </p>

        {/* Trust badges */}
        <div className={`flex flex-wrap items-center justify-center gap-6 mt-8 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center gap-2 text-gray-muted text-xs">
            <Lock className="w-4 h-4" />
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center gap-2 text-gray-muted text-xs">
            <Shield className="w-4 h-4" />
            <span>Dados Protegidos</span>
          </div>
          <div className="flex items-center gap-2 text-gray-muted text-xs">
            <Clock className="w-4 h-4" />
            <span>Acesso Imediato</span>
          </div>
        </div>
      </div>
    </section>
  );
}
