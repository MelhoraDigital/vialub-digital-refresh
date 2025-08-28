import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import vialubLogo from "@/assets/vialub-logo.png";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={vialubLogo} 
                alt="ViALUB Logo" 
                className="h-8 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Especialista em distribuição de produtos automotivos de alta performance. 
              Oferecemos as melhores marcas mundiais com qualidade garantida e suporte técnico especializado.
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-medium">R. Bom Pastor, 103 - Ipiranga</p>
              <p className="text-primary-foreground/80">São Paulo/SP - Brasil</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Produtos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Óleos Lubrificantes</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Filtros Automotivos</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Aditivos Premium</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Fluidos Especiais</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-bold mb-4">Marcas</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Mannol</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">ATF6000</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Peak</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Lubegard</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">The Eagle</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Liqui Moly</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
            © {currentYear} ViALUB. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <span className="text-primary-foreground/40">•</span>
            <a 
              href="#" 
              className="text-primary-foreground/80 hover:text-secondary text-sm transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-secondary hover:bg-secondary-dark text-primary shadow-glow z-40 transition-all duration-300 hover:scale-110"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};