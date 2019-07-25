import React, { FC } from 'react'
import styled from 'styled-components'

import { Introduction } from './Introduction'
import { Notice } from './Notice'

export const Home: FC = () => (
  <Layout>
    <Introduction />
    <Notice />
  </Layout>
)

const Layout = styled.div`
  display: grid;
  grid-gap: 32px;
`
