import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Header } from './Header'

const Layout = styled.div`
  padding-top: ${Size.HeaderHeight}px;
`

export const BaseTemplate: FC = ({ children }) => (
  <Layout>
    <Header />
    <main>{children}</main>
  </Layout>
)
