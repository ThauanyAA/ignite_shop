import { keyframes } from "@stitches/react";
import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    }
  }
});

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',


  img: {
    objectFit: 'cover',
  }
});

const float = keyframes({
  '0%,100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-6px)' },
})

export const SuccessArt = styled('div', {
  position: 'relative',
  height: 180,
  margin: '2.5rem auto 1.25rem',
  // variáveis com valores padrão
  '--spacing': '90px',       // distância horizontal entre discos
  '--disk': '140px',         // tamanho do disco
  '@bp1': { '--spacing': '70px', '--disk': '120px', height: 160 },

  // glow atrás
  '&::before': {
    content: '',
    position: 'absolute',
    inset: 0,
    margin: 'auto',
    width: '90%',
    height: '75%',
    borderRadius: '40%',
    background:
      'radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 70%)',
    filter: 'blur(18px)',
    zIndex: 0,
  },
})

export const Disk = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 'var(--disk)',
  height: 'var(--disk)',
  borderRadius: 9999,
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0 8px 24px rgba(0,0,0,.35)',
  display: 'grid',
  placeItems: 'center',
  // CSS vars por item:
  // --pos: deslocamento relativo ao centro (ex: -1, 0, 1, 1.5…)
  // --scale: escala opcional (ex: 1.04 p/ o centro)
  transform:
    'translate(calc(var(--pos) * var(--spacing)), -50%) scale(var(--scale, 1))',
  zIndex: 'var(--z, 1)',
  animation: `${float} 6s ease-in-out infinite`,
  // aura
  '&::after': {
    content: '',
    position: 'absolute',
    inset: -8,
    borderRadius: 'inherit',
    background:
      'radial-gradient(closest-side, rgba(116,101,212,0.22), rgba(30,164,131,0.12), transparent 70%)',
    filter: 'blur(8px)',
    zIndex: -1,
  },
  img: {
    width: 'calc(var(--disk) * 0.55)',
    height: 'auto',
    filter: 'drop-shadow(0 6px 10px rgba(0,0,0,.30))',
  },
})