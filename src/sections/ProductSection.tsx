import { useEffect, useRef, useState } from 'react';
import { Shield, Target, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '7 Princípios',
    description: 'Baseados em psicologia de alto desempenho'
  },
  {
    icon: Target,
    title: 'Exercícios Práticos',
    description: 'Aplicação imediata na rotina diária'
  },
  {
    icon: Zap,
    title: 'Leitura Direta',
    description: 'Sem enrolação. Só o que funciona.'
  },
  {
    icon: Lock,
    title: 'Acesso Vitalício',
    description: 'Consulte quando precisar'
  }
];

export function ProductSection() {
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
        {/* Main product card */}
        <div className={`bg-gradient-to-br from-dark-light to-dark border border-border rounded-xl p-8 md:p-12 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red/10 border border-red/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-red rounded-full animate-pulse" />
              <span className="text-red text-xs uppercase tracking-widest font-semibold">Produto Digital</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
              O CÓDIGO DA
              <br />
              <span className="text-red">MENTE INABALÁVEL</span>
            </h2>

            {/* Description */}
            <p className="text-gray-text text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Um <span className="text-white font-semibold">sistema de 7 princípios</span> usados por quem opera sob pressão. 
              Sem teoria. Sem motivação vazia. 
              <span className="text-white font-semibold"> Só o que funciona.</span>
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-4 bg-dark/50 border border-border rounded-lg transition-all duration-500 hover:border-red/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-muted text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
