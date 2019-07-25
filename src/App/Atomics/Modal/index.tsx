import React, { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

{
  // body 안쪽에 ModalRoot 추가
  // * index.html에 별다른 맥락을 추가하지 않기 위함
  const ModalRoot = window.document.createElement('div')
  ModalRoot.setAttribute('id', 'ModalRoot')
  window.document.body.appendChild(ModalRoot)
}

declare const ModalRoot: HTMLDivElement

let index = 0

interface Props extends Styleable {
  readonly isOpen: boolean
  readonly component: FC
}

export const Modal: FC<Props> = ({ isOpen, className, component: Component }) => {
  const controlScroll = () => {
    if (!isOpen) {
      return
    }

    const DISABLE_SCROLL = 'disable-scroll'

    const FIRST = 1
    const ZERO = 0

    index += 1
    if (index === FIRST) {
      window.document.documentElement.classList.add(DISABLE_SCROLL)
    }

    return () => {
      index += -1
      if (index === ZERO) {
        window.document.documentElement.classList.remove(DISABLE_SCROLL)
      }
    }
  }
  useEffect(controlScroll, [isOpen])

  if (!isOpen) {
    return null
  }

  const children = (
    <Layout className={className}>
      <div>
        <Component />
      </div>
    </Layout>
  )

  return createPortal(children, ModalRoot)
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

  & > div {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
  }
`
