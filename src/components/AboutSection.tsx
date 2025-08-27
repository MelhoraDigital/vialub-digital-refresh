import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Truck, 
  Clock, 
  MapPin, 
  Phone,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import performanceImage from "@/assets/performance-tech.jpg";

export const AboutSection = () => {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      number: "15+",
      label: "Anos de Experiência",
      description: "Tradição no mercado automotivo"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      number: "1000+", 
      label: "Clientes Ativos",
      description: "Oficinas e distribuidores parceiros"
    },
    {
      icon: <Truck className="w-8 h-8 text-secondary" />,
      number: "4",
      label: "Marcas Premium",
      description: "Melhores marcas mundiais"
    },
    {
      icon: <Clock className="w-8 h-8 text-secondary" />,
      number: "Suporte",
      label: "Especializado",
      description: "Atendimento especializado"
    }
  ];

  const advantages = [
    "Distribuição autorizada de marcas premium internacionais",
    "Estoque completo para pronta entrega",
    "Equipe técnica especializada em produtos automotivos", 
    "Suporte pós-venda e consultoria técnica",
    "Logística otimizada para todo o Brasil",
    "Parcerias estratégicas com fabricantes globais"
  ];

  return (
    <>
      {/* About Section */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="performance-indicator mb-4 inline-flex">
                <Award size={16} />
                Sobre a ViALUB
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Excelência em <span className="text-gradient">Distribuição Automotiva</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A ViALUB é especializada na distribuição de produtos automotivos de alta 
                performance, oferecendo soluções completas em lubrificantes, aditivos e 
                filtros das melhores marcas mundiais.
              </p>

              <div className="space-y-4 mb-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{advantage}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero">
                  Conheça Nossa História
                  <ArrowRight size={18} className="ml-2" />
                </Button>
                <Button variant="outline" className="btn-outline-premium">
                  Solicitar Catálogo
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-premium animate-float">
                <img 
                  src={performanceImage} 
                  alt="Tecnologia automotiva ViALUB - dashboard de performance"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
              </div>
              
              {/* Stats Card Overlay */}
              <Card className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm border-0 shadow-glow">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">R. Bom Pastor, 103</div>
                    <div className="text-sm text-muted-foreground">Ipiranga - São Paulo/SP</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-secondary">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm text-white/80">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contato" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="performance-indicator mb-4 inline-flex">
              <Phone size={16} />
              Entre em Contato
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="text-gradient">Começar?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Solicite acesso à nossa plataforma e descubra como podemos otimizar 
              o fornecimento de produtos automotivos para seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="btn-hero text-lg px-8 py-4">
                Solicitar Acesso
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline-premium text-lg px-8 py-4"
              >
                Falar com Consultor
              </Button>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-premium">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Endereço</h3>
                  <p className="text-sm text-muted-foreground">
                    R. Bom Pastor, 103<br />
                    Ipiranga - São Paulo/SP
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-premium">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground">
                    Entre em contato<br />
                    para mais informações
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-premium">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-secondary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Atendimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Seg à Sex: 8h às 18h<br />
                    Suporte especializado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};