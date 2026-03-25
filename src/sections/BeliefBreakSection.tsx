import { useEffect, useRef, useState } from 'react';
import { Ban, Check, FileText, Dumbbell, Target } from 'lucide-react';

export function BeliefBreakSection() {
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
      <div className="max-w-4xl mx-auto">
        {/* Main contrast card */}
        <div className={`bg-dark border border-red/30 rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Red glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red/5 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Warning badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red/10 border border-red/30 rounded-full mb-8">
              <Ban className="w-4 h-4 text-red" />
              <span className="text-red text-xs uppercase tracking-widest font-bold">Aviso Importante</span>
            </div>

            {/* Main title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              ISSO NÃO É
              <br />
              <span className="text-red">MOTIVAÇÃO</span>
            </h2>

            {/* Explanation */}
            <p className="text-gray-text text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Você já viu <span className="text-white font-semibold">frases bonitas</span> o suficiente. 
              O Código é um <span className="text-red font-semibold">framework de ação</span>. 
              Cada princípio vem com exercício prático para instalar na sua rotina.
            </p>

            {/* What it is / What it isn't */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What it isn't */}
              <div className={`bg-dark-light border border-border rounded-xl p-6 transition-all duration-500 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Ban className="w-5 h-5 text-gray-muted" />
                  <span className="text-gray-muted font-semibold uppercase tracking-wider text-sm">Não é</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-text">
                    <span className="w-1.5 h-1.5 bg-gray-muted rounded-full" />
                    Frases inspiradoras
                  </li>
                  <li className="flex items-center gap-3 text-gray-text">
                    <span className="w-1.5 h-1.5 bg-gray-muted rounded-full" />
                    Histórias emocionais
                  </li>
                  <li className="flex items-center gap-3 text-gray-text">
                    <span className="w-1.5 h-1.5 bg-gray-muted rounded-full" />
                    Teoria sem aplicação
                  </li>
                </ul>
              </div>

              {/* What it is */}
              <div className={`bg-red/5 border border-red/30 rounded-xl p-6 transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Check className="w-5 h-5 text-red" />
                  <span className="text-red font-semibold uppercase tracking-wider text-sm">É sim</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-white">
                    <FileText className="w-4 h-4 text-red" />
                    Método estruturado
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <Dumbbell className="w-4 h-4 text-red" />
                    Exercícios práticos
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <Target className="w-4 h-4 text-red" />
                    Resultados mensuráveis
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
