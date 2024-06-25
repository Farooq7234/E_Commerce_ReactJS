import React, { useState } from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    if (!cardNumberElement._complete || !cardExpiryElement._complete || !cardCvcElement._complete) {
      setErrorMessage('Please complete all card details.');
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setErrorMessage('');
      console.log('PaymentMethod:', paymentMethod);
      alert('Payment successful (test mode)');
    }
  };

  const handleCardInputChange = (event) => {
    if (event.error) {
      setErrorMessage(event.error.message);
    } else {
      setErrorMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='min-h-[100vh] bg-red-400 flex justify-center items-center'>
      <div>
        <label>
          Card Number
          <CardNumberElement onChange={handleCardInputChange} />
        </label>
      </div>
      <div>
        <label>
          Expiry Date
          <CardExpiryElement onChange={handleCardInputChange} />
        </label>
      </div>
      <div>
        <label>
          CVC
          <CardCvcElement onChange={handleCardInputChange} />
        </label>
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
