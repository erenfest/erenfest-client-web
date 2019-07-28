import React, { FC, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { KeyInfo } from 'key-info'

import { useDispatch } from '../../Store'
import { openModal, closeModal } from '../../Store/Modal'

{
  // body 안쪽에 ModalRoot 추가
  // * index.html에 별다른 맥락을 추가하지 않기 위함
  const ModalRoot = window.document.createElement('div')
  ModalRoot.setAttribute('id', 'ModalRoot')
  window.document.body.appendChild(ModalRoot)
}

declare const ModalRoot: HTMLDivElement

interface Props extends Styleable {
  readonly isOpen: boolean
  readonly isClosableOverlay: boolean
  readonly close?: () => void
  readonly children: ReactNode
}

export function Modal({ isOpen, isClosableOverlay, className, close = () => {}, children }: Props) {
  const dispatch = useDispatch()

  const controlScroll = () => {
    if (!isOpen) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      const keyinfo = KeyInfo.from(event)
      if (keyinfo.isEscape) {
        close()
      }
    }

    const DISABLE_SCROLL = 'disable-scroll'

    window.document.documentElement.classList.add(DISABLE_SCROLL)
    window.addEventListener('keydown', closeOnEscape)
    dispatch(openModal())

    return () => {
      window.document.documentElement.classList.remove(DISABLE_SCROLL)
      window.removeEventListener('keydown', closeOnEscape)
      dispatch(closeModal())
    }
  }
  useEffect(controlScroll, [isOpen])

  if (!isOpen) {
    return null
  }

  const onClick = () => {
    if (isClosableOverlay) {
      close()
    }
  }

  const modal = (
    <Layout className={className} onClick={onClick}>
      <div>
        <div onClick={event => event.stopPropagation()}>{children}</div>
      </div>
    </Layout>
  )

  return createPortal(modal, ModalRoot)
}

const Layout = styled.div`
  overflow: scroll;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 32px;

  background-color: hsl(0 0% 0% / 36%);

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;

    & > div {
      position: relative;
      overflow: hidden;

      background-color: hsl(0 0% 96%);
      border-radius: 3px;
      box-shadow: 0 0 3px 1px hsl(0 0% 64%);
    }
  }
`

const TitleLayout = styled.div`
  margin: 0 16px;
  padding: 16px 0;

  text-align: center;
  text-transform: capitalize;

  border-bottom: 1px solid hsl(0 16% 84%);
  border-radius: 1ch;
`

interface TitleProps {
  readonly children: string
}

const Title: FC<TitleProps> = ({ children }) => (
  <TitleLayout>
    <h2>{children}</h2>
  </TitleLayout>
)

Modal.Title = Title

Modal.Main = styled.div`
  width: 100%;

  margin: 0 auto;
  padding: 32px;

  p {
    text-indent: 2ch;
  }

  p:first-child {
    text-transform: uppercase;
    font-weight: bolder;
  }

  p + p {
    margin-top: 1.5ch;
  }
`

interface ButtonProps {
  readonly children: string
}

const Button = styled.button<ButtonProps>`
  cursor: pointer;

  width: 100%;

  padding: 16px 32px;

  text-align: center;
  text-transform: capitalize;
  font-weight: bolder;
`

Modal.Button = Button

const ButtonGroupLayout = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  text-align: center;
  border-top: 1px solid hsl(0 16% 84%);

  ${Button} + ${Button} {
    border-left: 1px solid hsl(0 16% 84%);
  }
`

const ButtonGroup: FC = ({ children }) => <ButtonGroupLayout className='button-group'>{children}</ButtonGroupLayout>

Modal.ButtonGroup = ButtonGroup
