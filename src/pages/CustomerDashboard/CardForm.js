import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";



const useOptions = () => {
    const fontSize = '16px';

    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    padding: "200px",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        [fontSize]
    );

    return options;
};

const CardForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [paymentSuccess, setPaymentSuccess] = useState('')
    const [paymentError, setPaymentError] = useState('')

    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        if (payload.error) {
            setPaymentError(payload.error.message)
            setPaymentSuccess('')
        }
        if (payload.paymentMethod) {
            setPaymentSuccess("Payment Succesfull")
            setPaymentError('')
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <label for="Service"> Service Name</label>
            <input type="text" className="form-control" id="Service" value={props.service.name} />
            <label>
                Card number
        <CardNumberElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <label>
                Expiration date
        <CardExpiryElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <label>
                CVC
        <CardCvcElement
                    options={options}
                    onReady={() => {
                        console.log("CardNumberElement [ready]");
                    }}
                    onChange={event => {
                        console.log("CardNumberElement [change]", event);
                    }}
                    onBlur={() => {
                        console.log("CardNumberElement [blur]");
                    }}
                    onFocus={() => {
                        console.log("CardNumberElement [focus]");
                    }}
                />
            </label>
            <button className="btn btn-primary" type="submit" disabled={!stripe}>
                Pay
      </button>
            {paymentSuccess && <p>{paymentSuccess}</p>}
            {paymentError && <p>{paymentError}</p>}
        </form>
    );
};

export default CardForm;