'use client'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderRoot} from '../styles/components/header'
import logoImg from "../assets/logo.svg"
import { CartSheet } from './CartSheet'

export function Header() {
  return (
    <HeaderRoot>
      <Link href="/"><Image src={logoImg} alt="ignite shop" width={130} height={52} /></Link>
      <CartSheet />
    </HeaderRoot>
  )
}
