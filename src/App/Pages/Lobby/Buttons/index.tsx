import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { useSelector } from '../../../Store'
import { Card } from '../../../Atomics'
import { CreatingRoomModal } from './CreatingRoomModal'

enum ModalKind {
  None,
  CreatingRoom
}

export const Buttons: FC = () => {
  const tabIndex = useSelector(store => store.Modal.tabIndex)
  const [modalKind, setModalKind] = useState()

  const openModal = (modalKind: ModalKind) => () => setModalKind(modalKind)
  const closeModal = () => setModalKind(ModalKind.None)
  const isOpenedModal = (currentModalKind: ModalKind) => modalKind === currentModalKind

  return (
    <>
      <Layout className='pa-4'>
        <LeftButtonList>
          <li tabIndex={tabIndex} onClick={openModal(ModalKind.CreatingRoom)}>
            <Button className='py-2 px-4'>방 만들기</Button>
          </li>
        </LeftButtonList>

        <RightButtonList />
      </Layout>

      {isOpenedModal(ModalKind.CreatingRoom) && <CreatingRoomModal close={closeModal} />}
    </>
  )
}

const Layout = styled.div`
  overflow-x: auto;

  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr min-content;

  height: 100%;
`

const ButtonList = styled.ul`
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
`

const LeftButtonList = ButtonList

const RightButtonList = ButtonList

const Button = styled(Card)`
  cursor: pointer;
`
