'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { useCart } from '@/app/(store)/useCart'
import { CartButton, CartBadge, CartContent, CartList, CartItem, CartFooter, CartClose, CartOverlay, IconBtn, QtyValue, QtyRow } from '../styles/components/cart'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'

export function CartSheet() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const { items, subtotal, remove, dec, add, count } = useCart()
  const countItems = count()

  async function handleCheckout() {
    if (!items.length) return
    try {
      setIsCreatingCheckoutSession(true);

      const res = await axios.post('/api/checkout', {
        items: items.map(i => ({
          price: i.defaultPriceId,
          quantity: i.quantity
        }))
      })
      const { checkoutUrl } = res.data;
      if (checkoutUrl) window.location.href = checkoutUrl
    } catch {
      setIsCreatingCheckoutSession(false);
      alert('Falha ao redirecionar ao checkout!')  
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton aria-label="Abrir carrinho" variant="secondary">
          <ShoppingCart />
          {countItems > 0 && <CartBadge>{countItems}</CartBadge>}
        </CartButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartOverlay />
        <Dialog.Title className="sr-only">Seu carrinho</Dialog.Title>
        <CartContent>
          <h2>Seu carrinho</h2>

          {items.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <CartList>
              {items.map((it) => (
                <CartItem key={it.id}>
                  <Image src={it.imageUrl} width={94} height={94} alt="" />
                  <div>
                    <strong>{it.name}</strong>
                    <span>R$ {it.price}</span>
                    <div className="controls">
                      <QtyRow>
                        <IconBtn
                          aria-label="Diminuir quantidade"
                          onClick={() => dec(it.id)}
                          disabled={it.quantity <= 1}
                        >
                          <Minus />
                        </IconBtn>

                        <QtyValue aria-live="polite">{it.quantity}</QtyValue>

                        <IconBtn
                          aria-label="Aumentar quantidade"
                          onClick={() =>
                            add({ ...it }, 1)
                          }
                        >
                          <Plus />
                        </IconBtn>
                      </QtyRow>

                      <button onClick={() => remove(it.id)}>Remover</button>
                    </div>
                  </div>
                </CartItem>
              ))}
            </CartList>
          )}

          <CartFooter>
            <div className="details">
              <div className="row">
                <span>Quantidade</span>
                <span>{items.reduce((n, i) => n + i.quantity, 0)} ite{items.length > 1 ? 'ns' : 'm'}</span>
              </div>

              <div className="row total">
                <strong>Valor total</strong>
                <strong>{subtotal()}</strong>
              </div>
            </div>

            <button
              className="cta"
              disabled={!items.length || isCreatingCheckoutSession}
              onClick={handleCheckout}
            >
              Finalizar compra
            </button>

            <Dialog.Close asChild>
              <CartClose>Continuar comprando</CartClose>
            </Dialog.Close>
          </CartFooter>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}