import React from 'react'

const ContactCard = ({ icon, contactDetail }) => {
  return (
    <div className=" px-10 py-8 rounded border-black border-2 bg-white">
      <h2 className=''>{icon}</h2>
      <p className='text-3xl'>{contactDetail}</p>
    </div>
  );
};


export default ContactCard