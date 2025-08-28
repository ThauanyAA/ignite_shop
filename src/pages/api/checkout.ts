/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

type Item = {
  price: string;
  quantity?: number;
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Received request:", req.method, req.body);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const { items } = req.body as { items: Item[] };

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Items array is required." });
    }

    const line_items = items.map((it) => {
      return {
        price: it.price,
        quantity: it.quantity ?? 1
      } as const;
    });

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      line_items,
    });

    return res.status(201).json({ checkoutUrl: session.url });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return res.status(500).json({ error: err.message ?? "Internal server error" });
  }
}