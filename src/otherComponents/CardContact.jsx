import React from 'react';

const CardContact = ({ icon: Icon, text }) => {
  return (
    <div className="relative w-full group transition-all duration-50">
      <div className="cardContact">
        <div className="icon-container">
          <Icon className="w-8 h-8" />
        </div>
        <div className="text-container">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardContact;
