import React, { FC } from 'react'
import styled from 'styled-components'

import { Introduction } from './Introduction'
import { Notice } from './Notice'

const Layout = styled.div`
  display: grid;
  grid-gap: 32px;
`

export const Home: FC = () => (
  <Layout>
    <Introduction />
    <Notice />
  </Layout>
)
