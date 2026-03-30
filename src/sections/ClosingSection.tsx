import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function ClosingSection() {
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
    <section ref={sectionRef} className="py-20 md:py-32 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-light via-dark to-dark pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Final statements */}
        <div className={`space-y-4 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-gray-text font-medium">
            A maioria continuará <span className="text-white font-semibold">reagindo</span>.
          </p>
          <p className="text-xl md:text-2xl text-white font-semibold">
            Você pode ser <span className="text-red font-bold">diferente</span>.
          </p>
          <p className="text-lg md:text-xl text-gray-text">
            A escolha é <span className="text-white font-semibold">sua</span>.
          </p>
        </div>

        {/* Final CTA */}
        <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            className="group relative px-10 py-5 bg-red hover:bg-red-dark text-white font-bold text-lg uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-[1.02] shadow-glow hover:shadow-glow-intense"
            onClick={() => {
              window.location.href = 'https://pay.kirvano.com/fc9fafc7-8bdf-4e18-af5f-a1d99d15274d';
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              QUERO O CÓDIGO AGORA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        {/* Small print */}
        <p className={`text-gray-muted text-xs mt-8 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          © 2024 Código da Mente Inabalável. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
