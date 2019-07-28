import React, { FC } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'use-translation'

import { Size, I18N } from '../../../../constants'

export const Header: FC = () => {
  const { t } = useTranslation()
  const serviceName = t(I18N.App_Index, 'ServiceName', 'Erenfest')

  return (
    <Layout>
      <div>
        <h2>{serviceName}</h2>
      </div>
    </Layout>
  )
}

const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;

  padding: 0 16px;

  text-transform: capitalize;
  box-shadow: 0 0 0 1px hsl(0 16% 84%);
  background-color: white;

  & > div {
    display: grid;
    align-items: center;

    max-width: ${Size.MaxWidth}px;
    width: 100%;
    height: ${Size.HeaderHeight}px;

    margin: 0 auto;
  }
`
