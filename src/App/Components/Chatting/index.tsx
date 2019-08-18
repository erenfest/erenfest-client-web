import React, { FC } from 'react'
import styled from 'styled-components'

import { HEADER_HEIGHT } from '../../Templates/BaseTemplate/constants'
import { useSelector } from '../../Store'
import { Card } from '../../Atomics'

export type Chat = Readonly<{
  id: number
  message: string
  user: {
    id: number
    nickname: string
  }
}>

export type ChatList = readonly Chat[]

interface Props {
  readonly items: readonly Chat[]
}

export const Chatting: FC<Props> = ({ items }) => {
  const tabIndex = useSelector(store => store.Modal.tabIndex)

  return (
    <Layout className='rad-a'>
      <ChatList>
        {items.map(({ id, message, user }) => (
          <li className='ma-2' key={id}>
            <b>{user.nickname}</b>
            <span>: </span>
            <span>{message}</span>
          </li>
        ))}
      </ChatList>

      <InputContainer>
        <input className='pa-2' type='text' tabIndex={tabIndex} spellCheck={false} />
        <Button className='rad-a' tabIndex={tabIndex} />
      </InputContainer>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;

  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px - 16px * 5);
`

const ChatList = styled.ul`
  overflow-y: auto;
`

const InputContainer = styled(Card)`
  grid-template-columns: 1fr 40px;
`

const Button = styled.button`
  cursor: pointer;

  background-color: hsl(210 100% 96%);
  box-shadow: 0 0 0 1px hsl(0 16% 84%);

  &:hover,
  &:focus {
    background-color: hsl(210 100% 92%);
  }
`
