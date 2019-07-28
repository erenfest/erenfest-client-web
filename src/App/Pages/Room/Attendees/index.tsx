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
      <AttendeeContainer>
        {items.map(({ id, imageUrl, nickname }, index) => (
          <Link to='' tabIndex={tabIndex} key={id}>
            <Attendee>
              <Avatar>
                <b>{imageUrl}</b>
              </Avatar>

              <AttendeeInfo>
                <b>{nickname}</b>
              </AttendeeInfo>

              <FireButton>
                <Icon>
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
  overflow-y: scroll;

  height: 100%;
`

const AttendeeContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  padding: 16px;
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

const AttendeeInfo = styled(Card.Right)`
  padding: 8px;
`

const FireButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const Icon = styled.div`
  width: 24px;
  height: 24px;

  border-radius: 3px;

  &:hover {
    background-color: red;
    box-shadow: 0 0 3px 0 red;

    & > svg {
      stroke: white;
    }
  }
`
