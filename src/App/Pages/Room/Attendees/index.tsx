import React, { FC } from 'react'
import styled from 'styled-components'

import { AttendeeList } from '../types'

const Layout = styled.div``

const AttendeeContainer = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  padding: 16px;
`

const Attendee = styled.li`
  cursor: pointer;
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

const Avatar = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;

  height: 96px;
`

const AttendeeInfo = styled.div`
  padding: 8px;
`

interface Props {
  readonly items: AttendeeList
}

export const Attendees: FC<Props> = ({ items }) => (
  <Layout>
    <AttendeeContainer>
      {items.map(({ id, imageUrl, nickname }, index) => (
        <Attendee key={id}>
          <Avatar>
            <b>{imageUrl}</b>
          </Avatar>

          <AttendeeInfo>
            <b>{nickname}</b>
          </AttendeeInfo>
        </Attendee>
      ))}
    </AttendeeContainer>
  </Layout>
)
