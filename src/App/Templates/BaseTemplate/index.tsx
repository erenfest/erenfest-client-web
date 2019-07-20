import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Header } from './Header'

const Layout = styled.div`
  padding-top: ${Size.HeaderHeight}px;
`

const MainLayout = styled.main`
  max-width: ${Size.MaxWidth}px;
  width: 100%;
  height: calc(100vh - ${Size.HeaderHeight}px);

  margin: 0 auto;
`

export const BaseTemplate: FC = ({ children }) => (
  <Layout>
    <Header />
    <MainLayout>{children}</MainLayout>
  </Layout>
)
