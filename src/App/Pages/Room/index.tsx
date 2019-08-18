import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Chatting } from '../../Components'
import { HEADER_HEIGHT } from '../../Templates/BaseTemplate/constants'
import { Buttons } from './Buttons'
import { Attendees } from './Attendees'
import { useRoom } from './useRoom'

export const Room: FC = () => {
  const [state] = useRoom()

  return (
    <div className='mt-8 pr-4'>
      <Children className='my-a mx-auto'>
        <div style={{ gridArea: 'buttons' }}>
          <Buttons />
        </div>

        <div style={{ gridArea: 'attendees' }}>
          <Attendees items={state.attendeeList} />
        </div>

        <div style={{ gridArea: 'chatting', marginTop: '16px' }}>
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
    'attendees chatting' calc(100vh - ${HEADER_HEIGHT}px - 16px * 9)
    / calc(100% - ${Size.XS}px) 1fr;

  max-width: ${Size.LG}px;
  width: 100%;
`
