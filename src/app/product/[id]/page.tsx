import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import Image from "next/image";

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
    description: response.description
  }

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
