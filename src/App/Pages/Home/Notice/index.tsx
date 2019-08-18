import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'use-translation'

import { I18N, Size } from '../../../../constants'

export const Notice: FC = () => {
  const { t } = useTranslation()
  const notice = t(I18N.App_Index, 'Notice')

  const [toggledList, setToggleList] = useState<readonly number[]>([0])

  const toggle = (currentIndex: number) => {
    setToggleList(toggleList => {
      const nextToggleList = toggleList.includes(currentIndex)
        ? toggleList.filter(index => index !== currentIndex)
        : toggleList.concat(currentIndex)
      return nextToggleList
    })
  }

  const isToggled = (index: number) => toggledList.includes(index)

  return (
    <Layout className='mx-auto mx-auto'>
      <h2 className='py-4 px-2'>{notice}</h2>

      <NoticeList>
        <li>
          <Title className='py-4 px-6 rad-a' onClick={() => toggle(0)}>
            [업데이트] 2019.07.18 업데이트 안내입니다
          </Title>

          {isToggled(0) && (
            <div className='py-0 px-2'>
              <p className='ma-4'>안녕하세요, 용사님!</p>
              <p className='ma-4'>
                단풍마을의 평온함을 위해 힘쓰고 있는 <span style={{ color: 'blue' }}>GM소리</span>입니다
              </p>
              <br />
              <p className='ma-4'>7월 18일 (목) 메이플스토리 클라이언트 2019.07.18의 업데이트 내용은 아래와 같습니다</p>
              <p className='ma-4'>업데이트 내용을 꼭 확인하고, 메이플스토리와 함께 즐거운 시간 보내주세요</p>
            </div>
          )}
        </li>

        <li>
          <Title className='py-4 px-6 rad-a' onClick={() => toggle(1)}>
            [업데이트] 2019.07.18 업데이트 안내입니다
          </Title>

          {isToggled(1) && (
            <div className='py-0 px-2'>
              <p className='ma-4'>안녕하세요, 용사님!</p>
              <p className='ma-4'>단풍마을의 평온함을 위해 힘쓰고 있는 GM소리입니다</p>
              <br />
              <p className='ma-4'>7월 18일 (목) 메이플스토리 클라이언트 2019.07.18의 업데이트 내용은 아래와 같습니다</p>
              <p className='ma-4'>업데이트 내용을 꼭 확인하고, 메이플스토리와 함께 즐거운 시간 보내주세요</p>
            </div>
          )}
        </li>
      </NoticeList>
    </Layout>
  )
}

const Layout = styled.div`
  max-width: ${Size.MD}px;
  width: 100%;
`

const NoticeList = styled.ul`
  display: grid;
  grid-gap: 8px;
`

const Title = styled.h4`
  cursor: pointer;

  background-color: white;
  box-shadow: 0 0 0 1px hsl(0 0% 84%);

  &:hover {
    transform: translateY(1px);
  }
`
