import React, { FC } from 'react'

interface Props extends Styleable {
  readonly viewBox?: string
}

export const Svg: FC<Props> = ({ viewBox = '0 0 64 64', className, children }) => (
  <svg viewBox={viewBox} className={className}>
    {children}
  </svg>
)
