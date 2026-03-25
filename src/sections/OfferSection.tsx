import { useEffect, useRef, useState } from 'react';
import { Tag, ArrowRight, Sparkles } from 'lucide-react';

const includedItems = [
  'Ebook O Código da Mente Inabalável (PDF)',
  '7 exercícios práticos de aplicação',
  'Checklist de controle emocional',
  'Acesso vitalício + atualizações'
];

export function OfferSection() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 relative">
      <div className="max-w-2xl mx-auto">
        {/* Main offer card */}
        <div className={`bg-gradient-to-br from-dark-light via-dark to-dark-light border border-red/40 rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red/10 rounded-full blur-3xl" />
          
          {/* Launch badge */}
          <div className={`flex justify-center mb-8 transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red border border-red rounded-full animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-xs uppercase tracking-widest font-bold">Preço de Lançamento</span>
            </div>
          </div>

          {/* Title */}
          <div className={`text-center mb-8 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              INVERSÃO
            </h2>
            <p className="text-gray-text">O que você recebe vs. o que paga</p>
          </div>

          {/* Price anchoring */}
          <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-center">
              <span className="text-gray-muted text-sm uppercase tracking-wider block mb-1">Valor real</span>
              <span className="text-2xl md:text-3xl font-bold text-gray-muted line-through decoration-red decoration-2">R$ 39,99</span>
            </div>
            <ArrowRight className="w-6 h-6 text-red hidden sm:block" />
            <div className="text-center">
              <span className="text-red text-sm uppercase tracking-wider block mb-1">Hoje</span>
              <span className="text-4xl md:text-5xl font-black text-white">R$ 13,99</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

          {/* What's included */}
          <div className={`transition-all duration-500 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white font-semibold mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4 text-red" />
              INCLUÍDO:
            </p>
            <ul className="space-y-3">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-text">
                  <span className="w-5 h-5 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-red rounded-full" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Savings highlight */}
          <div className={`mt-8 p-4 bg-red/10 border border-red/30 rounded-xl text-center transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-white font-semibold">
              Você economiza <span className="text-red font-bold">R$ 150</span> no lançamento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
