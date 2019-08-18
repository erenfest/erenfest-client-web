import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Ex } from '../../../Atomics/Icons'
import { Card } from '../../../Atomics'
import { useSelector } from '../../../Store'
import { AttendeeList } from '../types'

interface Props {
  readonly items: AttendeeList
}

export const Attendees: FC<Props> = ({ items }) => {
  const tabIndex = useSelector(store => store.Modal.tabIndex)

  return (
    <Layout>
      <AttendeeContainer className='pa-4'>
        {items.map(({ id, imageUrl, nickname }, index) => (
          <Link to='#' tabIndex={tabIndex} key={id}>
            <Attendee>
              <Avatar>
                <b>{imageUrl}</b>
              </Avatar>

              <Card.Right className='pa-2'>
                <b>{nickname}</b>
              </Card.Right>

              <FireButton>
                <Icon className='rad-a'>
                  <Ex />
                </Icon>
              </FireButton>
            </Attendee>
          </Link>
        ))}
      </AttendeeContainer>
    </Layout>
  )
}

const Layout = styled.div`
  overflow-y: auto;

  height: 100%;
`

const AttendeeContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const Attendee = styled(Card)`
  position: relative;

  grid-template-columns: 96px 1fr;

  height: 96px;
`

const Avatar = styled(Card.Left)`
  display: grid;
  justify-content: center;
  align-items: center;

  height: 96px;
`

const FireButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;

  &:hover {
    background-color: red;
    box-shadow: 0 0 3px 0 red;

    & > svg {
      stroke: white;
    }
  }
`
