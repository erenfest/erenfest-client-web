import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { useSelector } from '../../../Store'
import { Card } from '../../../Atomics'
import { RoomList } from '../types'

interface Props {
  readonly items: RoomList
}

export const Rooms: FC<Props> = ({ items }) => {
  const tabIndex = useSelector(store => store.Modal.tabIndex)

  return (
    <Layout>
      <RoomContainer>
        {items.map(({ id, imageUrl, title }) => (
          <Link to={`/room/${id}`} replace={true} tabIndex={tabIndex} key={id}>
            <Room>
              <Left>
                <h4>{imageUrl}</h4>
              </Left>

              <Right>
                <h4>
                  [{id}] {title}
                </h4>
              </Right>
            </Room>
          </Link>
        ))}
      </RoomContainer>
    </Layout>
  )
}

const Layout = styled.div`
  overflow-y: scroll;

  height: 100%;
`

const RoomContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  padding: 16px;
`

const Room = styled(Card)`
  grid-template-columns: 96px 1fr;

  height: 96px;
`

const Left = styled(Card.Left)`
  display: grid;
  justify-content: center;
  align-items: center;
`

const Right = styled(Card.Right)`
  padding: 8px;
`
