import { getCssText } from '.'
import React from 'react'

export function GlobalStyleInjection() {
  return (
    <style
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />
  )
}
