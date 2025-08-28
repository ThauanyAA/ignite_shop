'use client'

import { useCart } from "@/app/(store)/useCart";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product";
import Head from "next/head";
import Image from "next/image";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function ProductClient({ product }: ProductProps) {
  const add = useCart(s => s.add)

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={() => add(product, 1)}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
  
}