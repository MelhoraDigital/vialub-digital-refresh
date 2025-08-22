import { ArrowRight, Zap, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automotive.jpg";
import mannolLogo from "/lovable-uploads/61fd8682-beb7-470d-b479-14a0f686a6a5.png";
import atf6000Logo from "@/assets/logos/atf6000-logo.png";
import peakLogo from "/lovable-uploads/d94222f8-3100-4ba4-aa84-dd12b71f9772.png";
import lubegardLogo from "/lovable-uploads/ed3944b4-ccf8-4870-9ce0-09a69e32ab06.png";
import theEagleLogo from "/lovable-uploads/a03da6db-162f-4003-8582-74ed21cd3757.png";
import liquiMolyLogo from "/lovable-uploads/dfe354ac-6a81-428c-8706-4ee7540895fb.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Performance Badge */}
          <div className="performance-indicator mb-6 inline-flex animate-fade-in">
            <Zap size={16} />
            Alta Performance
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            PRODUTOS DE ALTA
            <br />
            <span className="text-gradient">PERFORMANCE</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-in-right">
            Distribuição de lubrificantes e aditivos das melhores marcas mundiais para máxima performance do seu veículo.
          </p>

          {/* Brand Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in">
            <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30">
              <Award size={20} className="text-secondary" />
              <span className="font-medium">Marcas Premium</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30">
              <Shield size={20} className="text-secondary" />
              <span className="font-medium">Qualidade Garantida</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary/30">
              <Zap size={20} className="text-secondary" />
              <span className="font-medium">Alta Performance</span>
            </div>
          </div>


          {/* Brand Logos Section */}
          <div className="mt-16 animate-fade-in">
            <p className="text-sm text-white/70 mb-8 uppercase tracking-wider">
              Distribuição, lubrificantes e aditivos
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {[
                { name: "MANNOL", logo: mannolLogo, country: "🇩🇪", description: "Óleos Premium" },
                { name: "ATF6000", logo: atf6000Logo, country: "🇧🇷", description: "Fluidos Automáticos" },
                { name: "PEAK", logo: peakLogo, country: "🇺🇸", description: "Aditivos" },
                { name: "LUBEGARD", logo: lubegardLogo, country: "🇺🇸", description: "Protetores" },
                { name: "THE EAGLE", logo: theEagleLogo, country: "🇺🇸", description: "Filtros" },
                { name: "LIQUI MOLY", logo: liquiMolyLogo, country: "🇩🇪", description: "Tecnologia Alemã" }
              ].map((brand) => (
                <div key={brand.name} className="flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-105">
                  <div className="text-2xl mb-2">{brand.country}</div>
                  <div className="text-sm font-bold text-white mb-1">{brand.name}</div>
                  <div className="text-xs text-white/70 mb-3">{brand.description}</div>
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};