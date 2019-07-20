import React, { FC } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'use-translation'

import { Size, I18N } from '../../../constants'

const Layout = styled.div`
  & > div {
    max-width: ${Size.MaxWidth}px;
    width: 100%;

    margin: 0 auto;
  }
`

const CatchPhrase = styled.h2`
  margin-top: 20vh;

  font-size: 32px;
  text-align: center;
`

const StartButton = styled.div`
  cursor: pointer;
  width: min-content;

  margin: 32px auto 0 auto;
  padding: 16px 32px;

  font-size: 20px;
  white-space: nowrap;
  background-color: white;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 1px hsl(0 0% 84%);

  &:hover {
    color: white;
    background-color: hsl(0 16% 24%);
  }
`

export const Home: FC = () => {
  const { t } = useTranslation()
  const catchPhrase = t(I18N.App_Index, 'CatchPhrase')
  const start = t(I18N.App_Index, 'Start')

  return (
    <Layout>
      <div>
        <CatchPhrase>{catchPhrase}</CatchPhrase>
        <StartButton role='button'>{start}</StartButton>
      </div>
    </Layout>
  )
}
