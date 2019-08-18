import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'use-translation'

import { Size, I18N } from '../../../../constants'
import { useSelector } from '../../../Store'
import { Card } from '../../../Atomics'
import { LoginModal } from './LoginModal'

enum ModalKind {
  None,
  Login
}

export const Header: FC = () => {
  const { t } = useTranslation()
  const serviceName = t(I18N.App_Index, 'ServiceName', 'Erenfest')
  const title = useSelector(({ Header }) => Header.title)
  const [modalKind, setModalKind] = useState(ModalKind.None)

  const isOpenModal = (currentModalKind: ModalKind) => currentModalKind === modalKind
  const openModal = (modalKind: ModalKind) => () => setModalKind(modalKind)
  const closeModal = () => setModalKind(ModalKind.None)

  return (
    <>
      <Layout className='py-0 px-4'>
        <div>
          <div>
            <h2>{serviceName}</h2>
          </div>

          <div>{title}</div>

          <div>
            <Button className='py-2 px-4' onClick={openModal(ModalKind.Login)}>
              login
            </Button>
          </div>
        </div>
      </Layout>

      {isOpenModal(ModalKind.Login) && <LoginModal close={closeModal} />}
    </>
  )
}

const Layout = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  width: 100%;

  text-transform: capitalize;
  box-shadow: 0 0 0 1px hsl(0 16% 84%);
  background-color: white;

  & > div {
    display: grid;
    grid-template-columns: 128px 1fr 128px;
    justify-content: center;
    align-items: center;

    max-width: ${Size.MaxWidth}px;
    width: 100%;
    height: ${Size.HeaderHeight}px;

    margin: 0 auto;
  }
`

const Button = styled(Card)`
  cursor: pointer;

  width: min-content;

  justify-content: center;
  align-items: center;

  &:hover {
    color: white;
    background-color: hsl(0 16% 24%);
  }
`
