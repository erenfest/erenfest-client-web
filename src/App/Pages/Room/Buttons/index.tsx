import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { NamedRoutes } from '../../../../constants'

export const Buttons: FC = () => (
  <Layout>
    <LeftButtonList>
      <Item>방 설정</Item>
      <Item>게임 준비</Item>
      <Item>게임 시작</Item>
    </LeftButtonList>

    <RightButtonList>
      <Link to={NamedRoutes.Lobby}>
        <Item>방 나가기</Item>
      </Link>
    </RightButtonList>
  </Layout>
)

const Layout = styled.div`
  overflow-x: scroll;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr min-content;

  height: 100%;

  padding: 16px;
`

const ButtonList = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
`

const LeftButtonList = ButtonList

const RightButtonList = ButtonList

const Item = styled.div`
  cursor: pointer;

  width: min-content;

  padding: 8px 16px;

  white-space: nowrap;
  background-color: white;
  border: 1px solid hsl(0 0% 84%);
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 12px 0 hsl(0 0% 84%);
  }
`
