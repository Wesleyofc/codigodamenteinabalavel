import { useEffect, useRef, useState } from 'react';

export function HeroSection() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState('');
  const fullText = 'ELE CONTROLA.';

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.classList.add('animate-line-expand');
    }
  }, []);

  useEffect(() => {
    let i = 0;
    const delay = 800; // espera antes de começar
    const speed = 100; // ms por letra

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(fullText.slice(0, i));
        if (i >= fullText.length) clearInterval(interval);
      }, speed);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark-light pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow text */}
        <p className="text-gray-muted text-sm uppercase tracking-[0.3em] mb-8 animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          Para quem está cansado de ser controlado
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          VOCÊ REAGE.
          <br />
          <span className="text-red">
            {displayed}
            {/* Cursor piscando — some quando termina de digitar */}
            {displayed.length < fullText.length && (
              <span
                className="inline-block w-[3px] h-[0.85em] bg-red align-middle ml-1"
                style={{ animation: 'blink 0.7s step-end infinite' }}
              />
            )}
          </span>
        </h1>

        {/* Animated line */}
        <div className="h-1 bg-red mx-auto mb-8 max-w-md" ref={lineRef} style={{ width: 0 }} />

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-text font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          A diferença entre quem <span className="text-white font-semibold">domina</span> e quem é <span className="text-white font-semibold">dominado</span> não é talento.
          <br className="hidden sm:block" />
          É o <span className="text-red font-bold">código</span>.
        </p>

        {/* CTA button */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <button
            className="group relative px-12 py-5 rounded-full bg-red text-white font-black uppercase tracking-widest text-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]"
            onClick={() => {
              window.location.href = 'https://pay.kirvano.com/fc9fafc7-8bdf-4e18-af5f-a1d99d15274d';
            }}
            aria-label="Ir para o código"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            <span className="absolute inset-0 rounded-full border-2 border-white/30 scale-100 group-hover:scale-110 group-hover:opacity-0 transition-all duration-500" />
            <span className="relative flex items-center gap-3">
              Quero ter acesso ao código
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </button>
        </div>
      </div>

      {/* Keyframe para o cursor piscando */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}