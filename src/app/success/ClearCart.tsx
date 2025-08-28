'use client'

import { useEffect } from 'react'
import { useCart } from '@/app/(store)/useCart'

export function ClearCart() {
  const clear = useCart(s => s.clear)

  useEffect(() => {
    clear()
  }, [clear])

  return null
}