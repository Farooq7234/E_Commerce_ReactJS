import React from 'react';
import ContactCard from './ContactCard';

const CardList = ({ data }) => {
  return (
    <div className="flex justify-around items-center">
      {data.map((card, index) => (
        <ContactCard key={index} icon={card.icon} contaclDetail={card.contactDetail} />
      ))
      }
    </div>
  );
};

export default CardList;
