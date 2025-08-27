import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import ProductClient from "./ProductClient";

export const revalidate = 3600 // 1 hora

export async function generateStaticParams() {
  const response = await stripe.products.list()
  return response.data.map((product) => ({ id: product.id }))
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const productId = params.id;

  const response = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = response.default_price as Stripe.Price;

  const product = {
    id: response.id,
    name: response.name,
    imageUrl: response.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format((price.unit_amount ?? 0) / 100),
    description: response.description,
    defaultPriceId: price.id,
  }

  return (
    <ProductClient product={product} />
  );
}
