import { SuccessContainer } from "@/styles/pages/success";
import Head from "next/head";
import { ClearCart } from "./ClearCart";
import SessionInfo from "./SessionInfo";
import Skeleton from "./Skeleton";
import { Suspense } from "react";

export default async function SuccessPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const sessionId = String(searchParams.session_id);
  
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
        <SuccessContainer>
          <Suspense fallback={<Skeleton />}>
            <ClearCart />
            <SessionInfo sessionId={sessionId} />
          </Suspense>
        </SuccessContainer>
    </>
  );
}