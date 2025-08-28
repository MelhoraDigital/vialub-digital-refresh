
import { ArrowRight, Zap, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automotive.jpg";
import mannolLogo from "/lovable-uploads/61fd8682-beb7-470d-b479-14a0f686a6a5.png";
import atf6000Logo from "@/assets/logos/atf6000-logo.png";
import lubegardLogo from "/lovable-uploads/ed3944b4-ccf8-4870-9ce0-09a69e32ab06.png";
import theEagleLogo from "/lovable-uploads/a03da6db-162f-4003-8582-74ed21cd3757.png";
import germanFlag from "@/assets/flags/de.png";
import brazilFlag from "@/assets/flags/br.png";
import usaFlag from "@/assets/flags/us.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Produtos automotivos de alta performance ViALUB"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white py-8">
        <div className="max-w-4xl mx-auto">
          {/* Performance Badge */}
          <div className="performance-indicator mb-4 md:mb-6 inline-flex animate-fade-in">
            <Zap size={16} />
            Alta Performance
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in leading-tight">
            PRODUTOS DE ALTA
            <br />
            <span className="text-gradient">PERFORMANCE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto animate-slide-in-right leading-relaxed px-4">
            Distribuição de lubrificantes e aditivos das melhores marcas mundiais para máxima performance do seu veículo.
          </p>

          {/* Brand Features */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8 md:mb-10 animate-fade-in px-4">
            <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-secondary/30">
              <Award size={18} className="text-secondary" />
              <span className="font-medium text-sm md:text-base">Marcas Premium</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-secondary/30">
              <Shield size={18} className="text-secondary" />
              <span className="font-medium text-sm md:text-base">Qualidade Garantida</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2 rounded-full border border-secondary/30">
              <Zap size={18} className="text-secondary" />
              <span className="font-medium text-sm md:text-base">Alta Performance</span>
            </div>
          </div>

          {/* Brand Logos Section */}
          <div className="mt-12 md:mt-16 animate-fade-in px-4">
            <p className="text-xs md:text-sm text-white/70 mb-6 md:mb-8 uppercase tracking-wider">
              Distribuição, lubrificantes e aditivos
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
              {[
                { name: "MANNOL", logo: mannolLogo, flag: germanFlag, description: "Óleos Premium" },
                { name: "ATF6000", logo: atf6000Logo, flag: brazilFlag, description: "Fluidos Automáticos" },
                { name: "LUBEGARD", logo: lubegardLogo, flag: usaFlag, description: "Protetores" },
                { name: "THE EAGLE", logo: theEagleLogo, flag: usaFlag, description: "Filtros" }
              ].map((brand) => (
                <div key={brand.name} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-2 bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-3 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 relative">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-3 md:w-6 md:h-4">
                      <img 
                        src={brand.flag} 
                        alt="Country flag"
                        className="w-full h-full object-cover rounded-sm"
                      />
                    </div>
                  </div>
                  <span className="text-xs text-white/70 font-medium tracking-wide group-hover:text-secondary transition-colors text-center">
                    {brand.name}
                  </span>
                  <span className="text-xs text-white/50 text-center mt-1 hidden md:block">
                    {brand.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
