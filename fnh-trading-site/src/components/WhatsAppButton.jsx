import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace this with your actual phone number in international format
  const phoneNumber = "97455550000"; 
  const message = encodeURIComponent("Hello FNH! I'm interested in a detailing service for my car. Could you provide more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] group flex items-center"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip text that appears on hover */}
      <span className="mr-3 bg-white text-slate-900 px-4 py-2 rounded-full shadow-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-slate-100">
        Chat with us!
      </span>

      {/* The Floating Button */}
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce-slow">
        <MessageCircle className="w-8 h-8 fill-current" />
      </div>

      {/* Optional: The Pulsing Ring Effect */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 -z-10"></div>
    </a>
  );
};

export default WhatsAppButton;