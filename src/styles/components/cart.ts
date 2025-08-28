import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const CartOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,.5)',
  zIndex: 50,
})

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: 480,
  maxWidth: '100%',
  backgroundColor: '$gray800',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '-4px 0 30px rgba(0,0,0,.35)',
  zIndex: 60,
})

export const CartList = styled('ul', {
  flex: 1,
  marginTop: '2rem',
  overflowY: 'auto',
})

export const CartItem = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1.5rem',

  img: {
    width: 94,
    height: 94,
    borderRadius: 8,
    objectFit: 'cover',
    background: 'linear-gradient(180deg,#1ea483 0%,#7465d4 100%)',
  },

  div: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    strong: { color: '$gray100', fontSize: '$md' },
    span: { color: '$gray100', fontWeight: 'bold', marginTop: 4 },

    '.controls': {
      marginTop: '0.5rem',
      display: 'flex',
      flexDirection: 'row!important',
      alignItems: 'center',
      gap: '0.75rem',
      justifyContent: 'space-between',

      button: {
        marginTop: 8,
        border: 0,
        background: 'transparent',
        color: '$green500',
        fontWeight: 'bold',
        fontSize: '$sm',
        cursor: 'pointer',
        '&:hover': { color: '$green300' },
      },
    },
  },
})

export const CartFooter = styled('footer', {
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '.details': {
    display: 'flex',
    flexDirection: 'column',
    gap: '.5rem',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '$gray300',
    },

    '.total': {
      color: '$gray100',
      fontSize: '$xl',
      fontWeight: 'bold',
    },
  },

  '.checkout': {
    marginTop: '1rem',
    height: 56,
    border: 0,
    borderRadius: 8,
    background: '$green500',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '$md',
    cursor: 'pointer',
    '&:disabled': { opacity: 0.6, cursor: 'not-allowed' },
    '&:hover': { filter: 'brightness(1.1)' },
  },
})

export const CartClose = styled('button', {
  background: 'transparent',
  border: 0,
  color: '$gray300',
})

export const CartButton = styled('button', {
  position: 'relative',
  width: 48,
  height: 48,
  borderRadius: 8,
  variants: {
    variant: {
      primary: {
        backgroundColor: '$green500',
        color: 'white',
        '&:hover': { filter: 'brightness(1.1)' }
      },
      secondary: {
        backgroundColor: '$gray800',
        color: '$gray100',
        '&:hover': { filter: 'brightness(1.1)' }
      }
    },
  },

  defaultVariants: {
    variant: 'primary',
  },

  border: 0,
  display: 'grid',
  placeItems: 'center',
  '&:hover': { filter: 'brightness(1.1)' },
  cursor: 'pointer',
})

export const CartBadge = styled('span', {
  position: 'absolute',
  right: -8,
  top: -8,
  minWidth: 24,
  height: 24,
  borderRadius: 9999,
  background: '$green500',
  color: 'white',
  fontSize: 12,
  fontWeight: 700,
  display: 'grid',
  placeItems: 'center',
  padding: '0 6px',
  border: '3px solid $gray900',
})

export const QtyRow = styled('div', {
  marginTop: '0.5rem',
  display: 'flex',
  flexDirection: 'row !important',
  alignItems: 'center',
  gap: '0.5rem',
});

export const IconBtn = styled('button', {
  all: 'unset',
  width: 28,
  height: 28,
  borderRadius: 9999,
  background: '$gray700',
  color: '$gray100',
  cursor: 'pointer',
  alignSelf: 'center',
  boxShadow: '0 0 0 1px $colors$gray600 inset',
  '&:hover': { filter: 'brightness(1.05)' },
  '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
});

export const QtyValue = styled('span', {
  padding: '0 6px',
  alignSelf: 'center',
  background: '$gray700',
  color: '$gray100',
  fontWeight: 700,
  boxShadow: '0 0 0 1px $colors$gray600 inset',
});
