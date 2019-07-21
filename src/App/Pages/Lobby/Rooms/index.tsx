import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { RoomList } from '../types'

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

interface Props {
  readonly items: RoomList
}

export const Rooms: FC<Props> = ({ items }) => (
  <Layout>
    {items.map(({ id, imageUrl, title }) => (
      <Room to={`/room/${id}`} key={id}>
        <Left>
          <h4>{imageUrl}</h4>
        </Left>

        <Right>
          <h4>
            [{id}] {title}
          </h4>
        </Right>
      </Room>
    ))}
  </Layout>
)
