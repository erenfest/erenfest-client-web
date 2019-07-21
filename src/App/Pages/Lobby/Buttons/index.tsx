import React, { FC } from 'react'
import styled from 'styled-components'

const Layout = styled.ul`
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

export const Buttons: FC = () => (
  <Layout>
    <LeftButtonList>
      <Item>방 만들기</Item>
    </LeftButtonList>

    <RightButtonList />
  </Layout>
)
