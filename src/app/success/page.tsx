import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import Head from "next/head";

export default async function SuccessPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const sessionId = String(searchParams.session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const costumerName = session.customer_details?.name ?? "Cliente";
  const product = session.line_items?.data?.[0]?.price?.product as Stripe.Product | undefined;
  
  if (!product) {
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
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <ImageContainer>
          <Image src={product.images[0]} width={120} height={110} alt="" />
        </ImageContainer>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
  );
}