import { clx } from '@/utils'
import { memo, type FC, type HTMLAttributes } from 'react'

export interface LogoProps extends HTMLAttributes<HTMLSpanElement> {}

export const Logo: FC<LogoProps> = memo(({ className, ...props }) => {
  const spanClasses = clx('text-2xl lg:text-3xl', className)

  return (
    <span
      className={spanClasses}
      {...props}
    >
      <strong>Andres</strong>DEV
    </span>
  )
})

Logo.displayName = 'Logo'
