
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "5511989521693";
  const message = "Olá! Gostaria de saber mais sobre os produtos ViALUB.";
  
  const handleWhatsAppClick = () => {
    // Usando URL mais simples que funciona universalmente
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-24 md:bottom-6 right-4 md:right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};
