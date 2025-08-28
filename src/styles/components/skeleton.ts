import { keyframes } from "@stitches/react";
import { styled } from '@/styles'

const shimmer = keyframes({
  '0%':   { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
})

export const Page = styled('main', {
  display: 'grid',
  justifyItems: 'center',
  gap: '1.5rem',
  padding: '3rem 1rem',
})

export const SkeletonBox = styled('div', {
  position: 'relative',
  borderRadius: 8,
  backgroundColor: '$gray700',
  overflow: 'hidden',
  '&::after': {
    content: '',
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.08) 50%, rgba(255,255,255,0) 100%)',
    backgroundSize: '200% 100%',
    animation: `${shimmer} 1.4s ease-in-out infinite`,
  },
})

export const ArtPlaceholder = styled(SkeletonBox, {
  width: 520,
  height: 180,
  borderRadius: 12,
  '@bp1': { width: 360, height: 150 },
})

export const TitlePlaceholder = styled(SkeletonBox, {
  width: 280,
  height: 32,
  borderRadius: 6,
})

export const SubPlaceholder = styled(SkeletonBox, {
  width: 420,
  height: 20,
  borderRadius: 6,
  '@bp1': { width: 320 },
})

export const ButtonPlaceholder = styled(SkeletonBox, {
  width: 200,
  height: 56,
  borderRadius: 8,
  backgroundColor: '$green500', // mantém a “sensação” do CTA
  '&::after': { backgroundImage:
    'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.18) 50%, rgba(255,255,255,0) 100%)'
  }
})
