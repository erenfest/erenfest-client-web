import React, { FC } from 'react'
import styled from 'styled-components'

import { HEADER_HEIGHT } from '../../Templates/BaseTemplate/constants'
import { useSelector } from '../../Store'

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
    <Layout>
      <ChatList>
        {items.map(({ id, message, user }) => (
          <Chat key={id}>
            <b>{user.nickname}</b>
            <span>: </span>
            <span>{message}</span>
          </Chat>
        ))}
      </ChatList>

      <InputContainer>
        <InputText type='text' tabIndex={tabIndex} spellCheck={false} />
        <Button tabIndex={tabIndex} />
      </InputContainer>
    </Layout>
  )
}

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;

  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px - 16px * 5);

  border-radius: 3px;
`

const ChatList = styled.ul`
  overflow-y: scroll;
`

const Chat = styled.li`
  margin: 8px;
`

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;

  background-color: white;
  border: 1px solid hsl(0 16% 84%);
  border-radius: 3px;
`

const InputText = styled.input`
  padding: 8px;
`

const Button = styled.button`
  cursor: pointer;

  background-color: hsl(210 100% 96%);
  border-radius: 3px;
  box-shadow: 0 0 0 1px hsl(0 16% 84%);

  &:hover,
  &:focus {
    background-color: hsl(210 100% 92%);
  }
`
