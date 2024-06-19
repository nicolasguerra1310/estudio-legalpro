import React from 'react';

const CardContact = ({ icon: Icon, text, link }) => {
  const renderContent = () => {
    if (link) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-white">
          <div className="cardContact">
            <div className="icon-container">
              <Icon className="w-8 h-8" />
            </div>
          </div>
        </a>
      );
    } else {
      return (
        <div className="cardContact">
          <div className="icon-container">
            <Icon className="w-8 h-8" />
          </div>
          <div className="text-container">
            <p>{text}</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative w-full group transition-all duration-50">
      {renderContent()}
    </div>
  );
}

export default CardContact;
