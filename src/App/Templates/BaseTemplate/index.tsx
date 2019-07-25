import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Header } from './Header'

export const BaseTemplate: FC = ({ children }) => (
  <Layout>
    <Header />
    <main>{children}</main>
  </Layout>
)

const Layout = styled.div`
  padding-top: ${Size.HeaderHeight}px;
`
