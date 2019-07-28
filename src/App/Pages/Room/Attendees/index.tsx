import React, { FC } from 'react'
import styled from 'styled-components'

import { Ex } from '../../../Atomics/Icons'
import { AttendeeList } from '../types'

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

          <FireButton>
            <Icon>
              <Ex />
            </Icon>
          </FireButton>
        </Attendee>
      ))}
    </AttendeeContainer>
  </Layout>
)

const Layout = styled.div`
  overflow-y: scroll;

  height: 100%;
`

const AttendeeContainer = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  padding: 16px;
`

const Attendee = styled.li`
  cursor: pointer;
  position: relative;

  display: grid;
  grid-template-columns: 96px 1fr;

  height: 96px;

  background-color: white;
  border: 1px solid hsl(0 16% 84%);
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 12px 0 hsl(0 16% 84%);
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
