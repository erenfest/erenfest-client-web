import React, { FC } from 'react'
import styled from 'styled-components'

import { useSelector } from '../../../Store'
import { Card } from '../../../Atomics'

export const Buttons: FC = () => {
  const tabIndex = useSelector(store => store.Modal.tabIndex)

  return (
    <>
      <Layout>
        <LeftButtonList>
          <li tabIndex={tabIndex}>
            <CardLayout>방 만들기</CardLayout>
          </li>
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

const CardLayout = styled(Card)`
  padding: 8px 16px;
`
