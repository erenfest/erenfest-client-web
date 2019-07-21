import React, { FC } from 'react'
import styled from 'styled-components'

const Layout = styled.ul`
  overflow-x: scroll;

  height: 100%;

  padding: 16px;

  box-shadow: 1px solid hsl(0 0% 84%);
`

const Item = styled.li`
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
    <Item>방 만들기</Item>
  </Layout>
)
