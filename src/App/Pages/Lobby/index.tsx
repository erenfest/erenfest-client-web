import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Chatting } from '../../Components'
import { Rooms } from './Rooms'
import { Buttons } from './Buttons'
import { HEADER_HEIGHT } from '../../Templates/BaseTemplate/constants'

const Layout = styled.div`
  margin-top: 32px;
  padding-right: 16px;

  & > div {
    display: grid;
    grid-gap: 16px;
    grid-template:
      'buttons chatting' 64px
      'rooms chatting' calc(100vh - ${HEADER_HEIGHT}px - 16px * 9)
      / 1fr ${Size.XS}px;

    max-width: ${Size.LG}px;
    width: 100%;

    margin: 0 auto;
  }
`

export const Lobby: FC = () => (
  <Layout>
    <div>
      <div style={{ gridArea: 'buttons' }}>
        <Buttons />
      </div>

      <div style={{ gridArea: 'rooms' }}>
        <Rooms />
      </div>

      <div style={{ gridArea: 'chatting', marginTop: '16px' }}>
        <Chatting />
      </div>
    </div>
  </Layout>
)
