import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const phoneNumber = "5511989521693"; // Número do WhatsApp sem símbolos
  const message = "Olá! Gostaria de saber mais sobre os produtos ViALUB.";
  
  const handleWhatsAppClick = () => {
    // Usando URL alternativa que funciona melhor em todos os dispositivos
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-20 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      size="icon"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle size={24} />
    </Button>
  );
};