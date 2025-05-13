import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '14388709696'; // El número de teléfono sin el "+"
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full transform hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="/ws.png" 
        alt="WhatsApp" 
        className="w-20 h-20" 
      />
    </a>
  );
};

export default WhatsAppButton; 