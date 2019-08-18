import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { NamedRoutes } from '../../../../constants'
import { useSelector } from '../../../Store'

export const Buttons: FC = () => {
  const tabIndex = useSelector(store => store.Modal.tabIndex)

  return (
    <Layout className='pa-4'>
      <LeftButtonList>
        <Button className='py-2 px-4 rad-a' role='button' tabIndex={tabIndex}>
          방 설정
        </Button>
        <Button className='py-2 px-4 rad-a' role='button' tabIndex={tabIndex}>
          게임 준비
        </Button>
        <Button className='py-2 px-4 rad-a' role='button' tabIndex={tabIndex}>
          게임 시작
        </Button>
      </LeftButtonList>

      <RightButtonList>
        <Link to={NamedRoutes.Lobby} replace={true} tabIndex={tabIndex}>
          <Button className='py-2 px-4 rad-a'>방 나가기</Button>
        </Link>
      </RightButtonList>
    </Layout>
  )
}

const Layout = styled.div`
  overflow-x: auto;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr min-content;

  height: 100%;
`

const ButtonList = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
`

const LeftButtonList = ButtonList

const RightButtonList = ButtonList

const Button = styled.div`
  cursor: pointer;

  width: min-content;

  white-space: nowrap;
  background-color: white;
  border: 1px solid hsl(0 16% 84%);

  &:hover {
    box-shadow: 0 0 12px 0 hsl(0 16% 84%);
  }
`
