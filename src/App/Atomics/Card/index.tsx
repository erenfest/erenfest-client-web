import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props extends Styleable {
  readonly children: ReactNode
}

export function Card({ className, children }: Props) {
  return <Layout className={className}>{children}</Layout>
}

const Layout = styled.div`
  position: relative;

  display: grid;
  grid-template: 'Left Right';

  width: 100%;

  overflow: hidden;

  white-space: nowrap;
  background-color: white;
  border: 1px solid hsl(0 16% 84%);
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 12px 0 hsl(0 16% 84%);
  }
`

Card.Left = styled.div`
  grid-area: Left;
`

Card.Right = styled.div`
  grid-area: Right;
`
