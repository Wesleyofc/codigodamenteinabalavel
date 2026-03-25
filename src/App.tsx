import { HeroSection } from './sections/HeroSection';
import { PainSection } from './sections/PainSection';
import { ProductSection } from './sections/ProductSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { BeliefBreakSection } from './sections/BeliefBreakSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { OfferSection } from './sections/OfferSection';
import { CTASection } from './sections/CTASection';
import { GuaranteeSection } from './sections/GuaranteeSection';
import { UrgencySection } from './sections/UrgencySection';
import { ClosingSection } from './sections/ClosingSection';

function App() {
  return (
    <main className="min-h-screen bg-dark text-white overflow-x-hidden">
      {/* 1. Hero - Impacto Imediato */}
      <HeroSection />
      
      {/* 2. Identificação - Dores */}
      <PainSection />
      
      {/* 3. Apresentação do Produto */}
      <ProductSection />
      
      {/* 4. Benefícios */}
      <BenefitsSection />
      
      {/* 5. Quebra de Crença */}
      <BeliefBreakSection />
      
      {/* 6. Prova Lógica - Como Funciona */}
      <HowItWorksSection />
      
      {/* 7. Oferta - Preço com Ancoragem */}
      <OfferSection />
      
      {/* 8. Botão de Compra - CTA Principal */}
      <CTASection />
      
      {/* 9. Garantia */}
      <GuaranteeSection />
      
      {/* 10. Urgência - Timer */}
      <UrgencySection />
      
      {/* 11. Fechamento - CTA Final */}
      <ClosingSection />
    </main>
  );
}

export default App;
