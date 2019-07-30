import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'use-router'

import { Size, NamedRoutes } from '../../../../../constants'
import { Modal, Form } from '../../../../Atomics'

interface Props {
  readonly close: () => void
}

export const CreatingRoomModal: FC<Props> = ({ close }) => {
  const router = useRouter()
  const goToRoom = () => {
    router.update(NamedRoutes.Room)
  }

  return (
    <Modal isClosableOverlay={true} close={close}>
      <Modal.Title>방 만들기</Modal.Title>

      <ModalMain>
        <Form>
          <Form.Row>
            <Form.Label>방 제목</Form.Label>
            <Form.Text placeholder='Danuel님의 방에 어서 오세요!' />
          </Form.Row>

          <Form.Row>
            <Form.Label>비밀번호</Form.Label>
            <Form.Password placeholder='엄청 어려운 비밀번호' />
          </Form.Row>

          <Form.Row>
            <Form.Label isRequired={true}>최대 인원</Form.Label>
            <Form.Numeric placeholder='8' postfix='명' maxLength={4} defaultValue={8} min={2} max={8} />
          </Form.Row>

          <Form.Row>
            <Form.Label isRequired={true}>라운드</Form.Label>
            <Form.Numeric placeholder='5' postfix='라운드' maxLength={4} defaultValue={5} min={1} max={10} />
          </Form.Row>

          <Form.Row>
            <Form.Label isRequired={true}>라운드 시간</Form.Label>
            <Form.Numeric placeholder='90' postfix='초' maxLength={4} defaultValue={120} min={90} max={150} step={10} />
          </Form.Row>
        </Form>
      </ModalMain>

      <Modal.ButtonGroup>
        <Modal.Button onClick={close} style={{ color: '#f88' }}>
          cancel
        </Modal.Button>
        <Modal.Button onClick={goToRoom} style={{ backgroundColor: 'hsl(0 16% 96%)' }}>
          ok
        </Modal.Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}

const ModalMain = styled(Modal.Main)`
  & > div {
    width: ${Size.XS}px;

    @media (max-width: ${Size.MD}px) {
      width: ${Size.XS - 72}px;
    }
  }
`
