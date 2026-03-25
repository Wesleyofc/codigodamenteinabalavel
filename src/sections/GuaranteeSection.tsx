import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, RotateCcw } from 'lucide-react';

export function GuaranteeSection() {
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
    <section ref={sectionRef} className="py-16 md:py-20 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <div className={`bg-dark border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-red/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Shield icon */}
            <div className={`flex-shrink-0 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-20 h-20 rounded-full bg-red/10 border border-red/30 flex items-center justify-center">
                <ShieldCheck className="w-10 h-10 text-red" />
              </div>
            </div>

            {/* Content */}
            <div className={`text-center md:text-left transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <RotateCcw className="w-4 h-4 text-red" />
                <span className="text-red text-sm uppercase tracking-widest font-bold">Garantia Incondicional</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                7 DIAS DE GARANTIA
              </h3>
              <p className="text-gray-text leading-relaxed">
                Não gostou? Devolvemos <span className="text-white font-semibold">100%</span>. 
                Sem perguntas. Sem burocracia. 
                <span className="text-red font-semibold"> Risco zero</span> para você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
