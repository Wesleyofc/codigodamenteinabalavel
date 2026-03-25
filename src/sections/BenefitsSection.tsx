import { useEffect, useRef, useState } from 'react';
import { Brain, Eye, Crown, Repeat, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Controle Emocional Real',
    description: 'Não supressão. Domínio. Você sente, mas decide como reage.',
    highlight: 'Domínio'
  },
  {
    icon: Eye,
    title: 'Clareza Sob Pressão',
    description: 'Decisões melhores no momento que importa. A mente afiada.',
    highlight: 'Clareza'
  },
  {
    icon: Crown,
    title: 'Presença Que Impõe Respeito',
    description: 'Sem precisar provar nada. Você simplesmente é.',
    highlight: 'Respeito'
  },
  {
    icon: Repeat,
    title: 'Disciplina Automática',
    description: 'Ações alinhadas, não dependentes de ânimo ou motivação.',
    highlight: 'Disciplina'
  },
  {
    icon: TrendingUp,
    title: 'Mentalidade de Longo Prazo',
    description: 'Você joga o jogo certo. Não se distrai com o barulho.',
    highlight: 'Foco'
  }
];

export function BenefitsSection() {
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
          <span className="text-red text-sm uppercase tracking-widest font-semibold mb-4 block">Transformação</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            O QUE MUDA
            <br />
            <span className="text-gray-text">EM VOCÊ</span>
          </h2>
        </div>

        {/* Benefits cards */}
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative bg-dark-light border border-border rounded-xl p-6 md:p-8 transition-all duration-500 hover:border-red/40 hover:bg-dark-lighter ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Highlight badge */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-red/10 border border-red/20 rounded-full">
                <span className="text-red text-xs font-semibold uppercase tracking-wider">{benefit.highlight}</span>
              </div>

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red/10 flex items-center justify-center group-hover:bg-red/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-red" />
                </div>

                {/* Content */}
                <div className="flex-1 pr-20">
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-text leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
