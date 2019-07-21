import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Chatting } from '../../Components'
import { Attendees } from './Attendees'

const Layout = styled.div`
  margin-top: 32px;
  padding: 0 16px;

  & > div {
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr ${Size.XS}px;

    max-width: ${Size.LG}px;
    width: 100%;

    margin: 0 auto;
  }
`

export const Room: FC = () => (
  <Layout>
    <div>
      <Attendees />
      <Chatting />
    </div>
  </Layout>
)
