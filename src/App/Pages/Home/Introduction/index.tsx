import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'use-translation'

import { I18N, NamedRoutes } from '../../../../constants'

export const Introduction: FC = () => {
  const { t } = useTranslation()
  const catchPhrase = t(I18N.App_Index, 'CatchPhrase')
  const start = t(I18N.App_Index, 'Start')

  return (
    <Layout className='my-0 mx-auto align-center'>
      <CatchPhrase className='text-weight-bold text-size-xl'>{catchPhrase}</CatchPhrase>

      <Link className='mt-8 mx-auto' to={NamedRoutes.Lobby} role='button'>
        <Text className='text-size-sm my-0 mx-auto py-4 px-8 rad-a'>{start}</Text>
      </Link>
    </Layout>
  )
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`

const CatchPhrase = styled.h2`
  margin-top: 20vh;

  word-break: keep-all;
  text-align: center;
`

const Text = styled.h3`
  width: min-content;

  color: white;
  text-align: center;
  white-space: nowrap;
  background-color: hsl(0 16% 24%);
  box-shadow: 1px 1px 3px 1px hsl(0 0% 84%);

  &:hover {
    transform: translateY(1px);
  }
`
