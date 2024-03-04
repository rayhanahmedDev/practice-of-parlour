import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payments_method)

const Payments = () => {
    return (
        <div>
            <div className="max-w-3xl mx-auto">
               <Elements stripe={stripePromise}>
                  <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payments;