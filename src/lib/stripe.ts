import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY environment variable is not set');
}

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-07-30.basil",
  appInfo: {
    name: 'Ignite Shop',
  }
})