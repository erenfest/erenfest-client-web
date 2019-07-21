import React, { FC, Fragment } from 'react'
import styled from 'styled-components'

import { HEADER_HEIGHT } from '../../Templates/BaseTemplate/constants'

const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;

  width: 100%;
  height: calc(100vh - ${HEADER_HEIGHT}px - 16px * 4);

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
  border: 1px solid hsl(0 0% 84%);
  border-radius: 3px;
`

const InputText = styled.input`
  padding: 8px;
`

const Button = styled.button`
  cursor: pointer;

  background-color: hsl(210 100% 96%);
  border-radius: 3px;
  box-shadow: 0 0 0 1px hsl(0 0% 84%);

  &:hover {
    background-color: hsl(210 100% 92%);
  }
`

export const Chatting: FC = () => (
  <Layout>
    <ChatList>
      {Array.from({ length: 21 }, (_, index) => (
        <Fragment key={index}>
          <Chat>
            <b>Danuel</b>
            <span>: </span>
            <span>Lorem Ipsum 시러요</span>
          </Chat>

          <Chat>
            <b>Danuel</b>
            <span>: </span>
            <span>ㅇㅈ합니까</span>
          </Chat>
        </Fragment>
      ))}
    </ChatList>

    <InputContainer>
      <InputText type='text' spellCheck={false} />
      <Button />
    </InputContainer>
  </Layout>
)
