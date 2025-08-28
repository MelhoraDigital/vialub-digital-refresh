
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Filter, Cog, Wrench, ArrowRight } from "lucide-react";
import productsImage from "/lovable-uploads/88daf1bc-11ab-4f55-9eeb-bf738e4102db.png";

export const ProductsSection = () => {
  const productCategories = [
    {
      icon: <Droplets className="w-8 h-8 text-secondary" />,
      title: "Óleos Lubrificantes",
      description: "Linha completa de óleos automotivos para motores, transmissões automáticas e manuais e diferenciais.",
      features: ["Motor", "Transmissões automáticas e manuais", "Diferencial", "Hidráulico"]
    },
    {
      icon: <Filter className="w-8 h-8 text-secondary" />,
      title: "Filtros de Transmissão",
      description: "Filtros de alta qualidade para proteção máxima do sistema.",
      features: ["Automáticas Convencionais", "Dupla Embreagem", "CVT"]
    },
    {
      icon: <Cog className="w-8 h-8 text-secondary" />,
      title: "Aditivos Premium",
      description: "Aditivos especializados para otimização de performance.",
      features: ["Performance", "Limpeza", "Proteção", "Economia"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-secondary" />,
      title: "Fluidos Especiais",
      description: "Fluidos técnicos para sistemas específicos do veículo.",
      features: ["Freio", "Direção", "Arrefecimento", "Limpeza"]
    }
  ];

  return (
    <section id="produtos" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="performance-indicator mb-4 inline-flex">
            <Cog size={16} />
            Nossos Produtos
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Produtos de <span className="text-gradient">Alta Qualidade</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
            Oferecemos uma linha completa de produtos automotivos das melhores marcas mundiais, 
            garantindo performance e proteção máxima para seu veículo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {productCategories.map((category, index) => (
            <Card key={index} className="card-premium group cursor-pointer">
              <CardContent className="p-4 md:p-6">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">{category.description}</p>
                <div className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                      <span className="text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Showcase Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-premium">
            <img 
              src={productsImage} 
              alt="Showcase de produtos ViALUB - lubrificantes e filtros automotivos"
              className="w-full h-60 md:h-80 lg:h-96 object-contain bg-black"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
              <div className="p-6 md:p-8 lg:p-12 text-white max-w-lg">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  Tecnologia e Qualidade
                </h3>
                <p className="text-white/90 mb-6 text-sm md:text-base">
                  Produtos desenvolvidos com as mais avançadas tecnologias para garantir 
                  máxima performance e durabilidade.
                </p>
                <Button className="btn-hero">
                  Ver Catálogo
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
