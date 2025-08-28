import Image from 'next/image'
import { SuccessArt, Disk } from '../../styles/pages/success'

type Props = {
  images: string[]              // URLs das imagens dos produtos
  spacing?: number              // opcional, default 90
  diskSize?: number             // opcional, default 140
}

export function ProductImgs({ images, spacing = 90, diskSize = 140 }: Props) {
  const n = images.length
  const half = (n - 1) / 2

  // largura mínima do container (para não cortar os discos laterais)
  const width = Math.max(diskSize * 2, diskSize + (n - 1) * spacing)

  return (
    <SuccessArt style={
      { width, '--spacing': `${spacing}px`, '--disk': `${diskSize}px` } as React.CSSProperties
    }>
      {images.map((src, i) => {
        const pos = i - half                // -2,-1,0,1,2...
        const z = 100 - Math.abs(pos)       // centro por cima
        const scale = pos === 0 ? 1.04 : 1  // destaca o central (opcional)

        return (
          <Disk
            key={src + i}
            style={
              { '--pos': pos.toString(), '--z': z.toString(), '--scale': scale.toString() } as React.CSSProperties
            }
          >
            <Image src={src} alt="" width={Math.round(diskSize * 0.55)} height={Math.round(diskSize * 0.55)} />
          </Disk>
        )
      })}
    </SuccessArt>
  )
}
