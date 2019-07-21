import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../constants'
import { Chatting } from '../../Components'
import { HEADER_HEIGHT } from '../../Templates/BaseTemplate/constants'
import { Buttons } from './Buttons'
import { Attendees } from './Attendees'
import { useRoom } from './useRoom'

const Layout = styled.div`
  margin-top: 32px;
  padding-right: 16px;

  & > div {
    display: grid;
    grid-gap: 16px;
    grid-template:
      'buttons chatting' 72px
      'attendees chatting' calc(100vh - ${HEADER_HEIGHT}px - 16px * 9)
      / calc(100% - ${Size.XS}px) 1fr;

    max-width: ${Size.LG}px;
    width: 100%;

    margin: 0 auto;
  }
`

export const Room: FC = () => {
  const [state] = useRoom()

  return (
    <Layout>
      <div>
        <div style={{ gridArea: 'buttons' }}>
          <Buttons />
        </div>

        <div style={{ gridArea: 'attendees' }}>
          <Attendees items={state.attendeeList} />
        </div>

        <div style={{ gridArea: 'chatting', marginTop: '16px' }}>
          <Chatting items={state.chatting} />
        </div>
      </div>
    </Layout>
  )
}
