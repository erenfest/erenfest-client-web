import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Chatting } from '../../Components'
import { HEADER_HEIGHT } from '../../Templates/BaseTemplate/constants'
import { Rooms } from './Rooms'
import { Buttons } from './Buttons'
import { useLobby } from './useLobby'

export const Lobby: FC = () => {
  const [state] = useLobby()

  return (
    <div className='mt-8 pr-4'>
      <Children className='my-0 mx-auto'>
        <div style={{ gridArea: 'buttons' }}>
          <Buttons />
        </div>

        <div style={{ gridArea: 'rooms' }}>
          <Rooms items={state.roomList} />
        </div>

        <div className='mt-4' style={{ gridArea: 'chatting' }}>
          <Chatting items={state.chatting} />
        </div>
      </Children>
    </div>
  )
}

const Children = styled.div`
  display: grid;
  grid-template:
    'buttons chatting' 72px
    'rooms chatting' calc(100vh - ${HEADER_HEIGHT}px - 16px * 9)
    / calc(100% - ${Size.XS}px) 1fr;

  max-width: ${Size.LG}px;
  width: 100%;
`
