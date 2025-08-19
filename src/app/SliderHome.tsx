'use client'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "../styles/pages/home"

interface ProductItem {
  id: string
  name: string
  imageUrl: string
  price: number
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

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product => (
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt="" />
          <footer>
            <strong>{product.name}</strong>
            <span>R$ {product.price.toFixed(2)}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  );
}
