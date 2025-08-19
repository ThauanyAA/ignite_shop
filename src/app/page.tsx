import { stripe } from "../lib/stripe"
import Stripe from "stripe"
import 'keen-slider/keen-slider.min.css'
import { SliderHome } from './SliderHome'

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: (price.unit_amount ?? 0) / 100,
    }
  })

  return <SliderHome products={products} />
}