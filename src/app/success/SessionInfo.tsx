import { SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { ProductImgs } from "./ProductImgs";

export default async function SessionInfo({ sessionId }: { sessionId: string }) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details?.name ?? "Cliente";
  
  const lineItems = session.line_items?.data as Stripe.LineItem[] | undefined;
  const product = lineItems?.[0]?.price?.product as Stripe.Product | undefined;

  const images = (lineItems?.map(item => {
    const product = item.price?.product as Stripe.Product | undefined;
    return product?.images?.[0];
  }).filter((img): img is string => typeof img === "string")) ?? [];

  console.log('images', images);
  
  if (!lineItems) {
    return (
      <SuccessContainer>
        <h1>Compra efetuada</h1>
        <p>Não foi possível recuperar as informações do produto.</p>
        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    );
  }
  
  return (
    <>
      <h1>Compra efetuada</h1>

      <ProductImgs images={images} />

      <p>
        Uhuul <strong>{costumerName}</strong>, sua compra {
          lineItems.length > 1
            ? `de ${lineItems.length} camisetas `
            :  <strong>{product?.name} </strong>
        }
        já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </>
  );
}