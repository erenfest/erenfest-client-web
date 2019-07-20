import React, { FC } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'use-translation'

import { Size, I18N } from '../../../../constants'

const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;

  text-transform: capitalize;
  box-shadow: 0 0 1px 0 currentColor;
`

const MaxWidth = styled.div`
  display: grid;
  align-items: center;

  max-width: ${Size.MaxWidth}px;
  width: 100%;
  height: ${Size.HeaderHeight}px;

  margin: 0 auto;
`

export const Header: FC = () => {
  const { t } = useTranslation()
  const serviceName = t(I18N.App_Index, 'ServiceName', 'Erenfest')

  return (
    <Layout>
      <MaxWidth>{serviceName}</MaxWidth>
    </Layout>
  )
}
