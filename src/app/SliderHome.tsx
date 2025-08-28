'use client'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "../styles/pages/home"
import Link from 'next/link'
import Head from 'next/head'
import { ShoppingBag } from 'lucide-react'
import { CartButton } from '@/styles/components/cart'
import { useCart } from '@/app/(store)/useCart'

interface ProductItem {
  id: string
  name: string
  imageUrl: string
  price: number
  defaultPriceId: string
}

interface Props {
  products: ProductItem[]
}

export function SliderHome({ products }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });

  const add = useCart(s => s.add)

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => (
          <Product key={product.id} className="keen-slider__slide">
            <Link href={`/product/${product.id}`} prefetch={false}>
              <Image src={product.imageUrl} width={520} height={480} alt="" />
            </Link>
            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>R$ {product.price.toFixed(2)}</span>
              </div>
              <CartButton
                aria-label="Adicionar ao carrinho"
                onClick={() => add(product, 1)}
              >
                <ShoppingBag />
              </CartButton>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  );
}
