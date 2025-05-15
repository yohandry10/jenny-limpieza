import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '14388709696'; // El número de teléfono sin el "+"
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 shadow-lg rounded-full transform hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="/ws.png" 
        alt="WhatsApp" 
        className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20" 
      />
    </a>
  );
};

export default WhatsAppButton; 