import { useEffect, useRef, useState } from 'react';
import { X, AlertCircle, Frown, Meh, Angry, UserX, Brain } from 'lucide-react';

const pains = [
  {
    icon: Angry,
    text: 'Perde a postura quando é provocado'
  },
  {
    icon: Meh,
    text: 'Deixa que outros decidam seu humor'
  },
  {
    icon: Brain,
    text: 'Sabe que poderia mais, mas a mente trava'
  },
  {
    icon: UserX,
    text: 'É descartado porque parece inseguro'
  },
  {
    icon: Frown,
    text: 'Se arrepende de reações emocionais'
  }
];

export function PainSection() {
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
      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-red" />
            <span className="text-red text-sm uppercase tracking-widest font-semibold">Realidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            VOCÊ SE RECONHECE EM
            <br />
            <span className="text-gray-text">ALGUMA DESSAS?</span>
          </h2>
        </div>

        {/* Pain points list */}
        <div className="space-y-4">
          {pains.map((pain, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-5 bg-dark-light border border-border rounded-lg transition-all duration-500 hover:border-red/30 hover:bg-dark-lighter ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red/10 flex items-center justify-center">
                <pain.icon className="w-5 h-5 text-red" />
              </div>
              <p className="text-white text-base sm:text-lg font-medium">{pain.text}</p>
              <X className="w-5 h-5 text-gray-muted ml-auto flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className={`text-center text-gray-text mt-10 text-lg transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Se você concordou com pelo menos <span className="text-white font-bold">uma</span>,
          <br />
          continue lendo.
        </p>
      </div>
    </section>
  );
}
