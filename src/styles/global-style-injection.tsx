import { getCssText } from '.'

export function GlobalStyleInjection() {
  return (
    <style
      id="stitches"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />
  )
}

