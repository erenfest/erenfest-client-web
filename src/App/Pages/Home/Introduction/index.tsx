import React, { FC } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'use-translation'

import { Size, I18N } from '../../../../constants'

const Layout = styled.div`
  max-width: ${Size.MaxWidth}px;
  width: 100%;

  margin: 0 auto;
`

const CatchPhrase = styled.h2`
  margin-top: 20vh;

  word-break: keep-all;
  font-size: 32px;
  text-align: center;
`

const StartButton = styled.div`
  cursor: pointer;
  width: min-content;

  margin: 32px auto 0 auto;
  padding: 16px 32px;

  color: white;
  font-size: 20px;
  white-space: nowrap;
  background-color: hsl(0 16% 24%);
  border-radius: 3px;
  box-shadow: 1px 1px 3px 1px hsl(0 0% 84%);

  &:hover {
    transform: translateY(1px);
  }
`

export const Introduction: FC = () => {
  const { t } = useTranslation()
  const catchPhrase = t(I18N.App_Index, 'CatchPhrase')
  const start = t(I18N.App_Index, 'Start')

  return (
    <Layout>
      <CatchPhrase>{catchPhrase}</CatchPhrase>
      <StartButton role='button'>{start}</StartButton>
    </Layout>
  )
}
