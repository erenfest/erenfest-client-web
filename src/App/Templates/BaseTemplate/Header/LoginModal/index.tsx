import React, { FC } from 'react'
import styled from 'styled-components'

import { Size } from '../../../../../constants'
import { Modal, Form } from '../../../../Atomics'

interface Props {
  readonly close: () => void
}

export const LoginModal: FC<Props> = ({ close }) => {
  return (
    <Modal isClosableOverlay={true} close={close}>
      <Modal.Title>login</Modal.Title>

      <ModalMain>
        <Form>
          <Form.Row>
            <Form.Label>account</Form.Label>
            <Form.Text />
          </Form.Row>

          <Form.Row>
            <Form.Label>password</Form.Label>
            <Form.Password />
          </Form.Row>
        </Form>
      </ModalMain>

      <Modal.ButtonGroup>
        <Modal.Button>cancel</Modal.Button>
        <Modal.Button>create</Modal.Button>
      </Modal.ButtonGroup>
    </Modal>
  )
}

const ModalMain = styled(Modal.Main)`
  & > div {
    width: ${Size.XS - 72}px;
  }
`
