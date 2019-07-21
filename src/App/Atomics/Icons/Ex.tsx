import React, { FC } from 'react'

import { LineSvg } from './LineSvg'

export const Ex: FC = () => (
  <LineSvg>
    <line x1={16} y1={16} x2={48} y2={48} />
    <line x1={16} y1={48} x2={48} y2={16} />
  </LineSvg>
)
