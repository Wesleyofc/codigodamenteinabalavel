import { useEffect, useRef, useState } from 'react';
import { BookOpen, Dumbbell, Zap, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Leitura',
    description: '7 princípios em linguagem direta. Sem enrolação. Você lê em uma sentada.',
    time: '30 minutos'
  },
  {
    number: '02',
    icon: Dumbbell,
    title: 'Prática',
    description: 'Exercícios diários de 10-15 minutos para treinar o controle mental.',
    time: '10-15 min/dia'
  },
  {
    number: '03',
    icon: Zap,
    title: 'Aplicação',
    description: 'Use os princípios em situações reais. Teste na prática imediatamente.',
    time: 'Contínuo'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Consolidação',
    description: 'O código torna-se automático. Você reage diferente sem pensar.',
    time: '21-30 dias'
  }
];

export function HowItWorksSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-red text-sm uppercase tracking-widest font-semibold mb-4 block">Processo</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            COMO
            <br />
            <span className="text-gray-text">FUNCIONA</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-dark-light border border-border rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-red/30 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Number and icon */}
                <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                  <span className="text-4xl md:text-5xl font-black text-red/20">{step.number}</span>
                  <div className="w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-red" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white text-xl font-bold">{step.title}</h3>
                    <span className="px-2 py-1 bg-dark border border-border rounded text-gray-muted text-xs">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-gray-text leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-24 bottom-0 translate-y-full w-px h-6 bg-gradient-to-b from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
