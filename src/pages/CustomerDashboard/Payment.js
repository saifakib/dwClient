import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm'

const stripePromise = loadStripe(
    'pk_test_51IgXCsA8jYHylR1DQnw2goj12CKBgbQ2GUROxc14IFWVctMqR2XyP88SFGYm7R5ZqpBJwKDqqSpHUJcVNLi0Oi2I00HkrhQvtI'
);

export default function Payment({ service }) {
    return (
        <div>
            <Elements stripe={stripePromise} service={service}>
                <CardForm />
            </Elements>
        </div>
    )
}
