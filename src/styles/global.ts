import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: '$body',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100'
  },
  'body, input, textarea, button': {
    fontFamily: '$body',
    fontWeight: 400
  }
})
