import { ArrowRight, Zap, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-automotive.jpg";

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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              Ver Produtos
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline-premium text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary"
            >
              Solicitar Acesso
            </Button>
          </div>

          {/* Brand Logos Section */}
          <div className="mt-16 animate-fade-in">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
              Distribuição, lubrificantes e aditivos
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center opacity-80">
              {["MANNOL", "ATF6000", "PEAK", "LUBEGARD", "THE EAGLE", "LIQUI MOLY"].map((brand) => (
                <div key={brand} className="text-white/80 font-semibold text-sm tracking-wide hover:text-secondary transition-colors cursor-pointer">
                  {brand}
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