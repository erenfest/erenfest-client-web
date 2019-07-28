import React, { FC } from 'react'
import styled from 'styled-components'

import { useSelector } from '../../../Store'

export const Buttons: FC = () => {
  const tabIndex = useSelector(store => store.Modal.tabIndex)

  return (
    <>
      <Layout>
        <LeftButtonList>
          <Button tabIndex={tabIndex}>방 만들기</Button>
        </LeftButtonList>

        <RightButtonList />
      </Layout>
    </>
  )
}

const Layout = styled.div`
  overflow-x: scroll;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr min-content;

  height: 100%;

  padding: 16px;
`

const ButtonList = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
`

const LeftButtonList = ButtonList

const RightButtonList = ButtonList

const Button = styled.li`
  cursor: pointer;

  width: min-content;

  padding: 8px 16px;

  white-space: nowrap;
  background-color: white;
  border: 1px solid hsl(0 16% 84%);
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 12px 0 hsl(0 0% 84%);
  }
`
