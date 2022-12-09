import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
   const [cardError, setCardError] = useState('');
   const [clientSecret, setClientSecret] = useState('');



  //  useEffect(() => {  
  //        fetch('https://dark-pink-tortoise-slip.cyclic.app/create-payment-intent',{

  //           method: "POST",
  //           headers: {
  //               'content-type' : 'application/json'
  //           },
  //           body: JSON.stringify({price})
  //        })
  //        .then(res => res.json())
  //        .then(data => {
  //          if(data?.clientSecret){
  //           setClientSecret(data.clientSecret);
  //          }
  //        })




  //  }, [price])






    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();
    
        if (!stripe || !elements) {

          return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
          }
    
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if(error){
            setCardError(error.message);
          }else{
            setCardError('')
          }

        // // Get a reference to a mounted CardElement. Elements knows how
        // // to find your CardElement because there can only ever be one of
        // // each type of element.
     
    
      
    
        // // Use your card Element with other Stripe.js APIs
      
    
        // if (error) {
        //   console.log('[error]', error);
        // } else {
        //   console.log('[PaymentMethod]', paymentMethod);
        // }
      };




    return (
        <div>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#fff',
              '::placeholder': {
                color: '#fff',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div class="form-control w-full mt-8 text-white">
        <button type="submit" className='py-2 bg-gray-100 font-medium text-lg ' disabled={!stripe}>Payment Now</button>
      </div>
    </form>
    {
        cardError && <p className='text-red-500 mt-4'>{cardError}</p>
    }
        </div>
    );
};

export default CheckoutForm;