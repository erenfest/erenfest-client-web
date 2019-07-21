import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { NamedRoutes } from '../../../../constants'

const Layout = styled.div`
  overflow-y: scroll;

  display: grid;
  grid-auto-rows: min-content;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;

  height: 100%;

  padding: 16px;
`

const Room = styled(Link)`
  overflow: hidden;

  display: grid;
  grid-template-columns: 96px 1fr;

  height: 96px;

  background-color: white;
  border: 1px solid hsl(0 0% 84%);
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 12px 0 hsl(0 0% 84%);
  }
`

const Left = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  padding: 8px;
`

export const Rooms: FC = () => (
  <Layout>
    {Array.from({ length: 21 }, (_, index) => (
      <Room to={NamedRoutes.Room} key={index}>
        <Left>
          <h4>Image</h4>
        </Left>

        <Right>
          <h4>[{index}] 어서 오세요</h4>
        </Right>
      </Room>
    ))}
  </Layout>
)
