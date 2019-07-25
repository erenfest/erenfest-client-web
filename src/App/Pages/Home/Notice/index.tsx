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
    <Layout>
      <Heading>{notice}</Heading>

      <NoticeList>
        <li>
          <Title onClick={() => toggle(0)}>[업데이트] 2019.07.18 업데이트 안내입니다</Title>

          {isToggled(0) && (
            <Text>
              <p>안녕하세요, 용사님!</p>
              <p>
                단풍마을의 평온함을 위해 힘쓰고 있는 <span style={{ color: 'blue' }}>GM소리</span>입니다
              </p>
              <br />
              <p>7월 18일 (목) 메이플스토리 클라이언트 2019.07.18의 업데이트 내용은 아래와 같습니다</p>
              <p>업데이트 내용을 꼭 확인하고, 메이플스토리와 함께 즐거운 시간 보내주세요</p>
            </Text>
          )}
        </li>

        <li>
          <Title onClick={() => toggle(1)}>[업데이트] 2019.07.18 업데이트 안내입니다</Title>

          {isToggled(1) && (
            <Text>
              <Text>
                <p>안녕하세요, 용사님!</p>
                <p>단풍마을의 평온함을 위해 힘쓰고 있는 GM소리입니다</p>
                <br />
                <p>7월 18일 (목) 메이플스토리 클라이언트 2019.07.18의 업데이트 내용은 아래와 같습니다</p>
                <p>업데이트 내용을 꼭 확인하고, 메이플스토리와 함께 즐거운 시간 보내주세요</p>
              </Text>
            </Text>
          )}
        </li>
      </NoticeList>
    </Layout>
  )
}

const Layout = styled.div`
  max-width: ${Size.MD}px;
  width: 100%;

  margin: 0 auto;
`

const Heading = styled.h2`
  padding: 8px 16px;
`

const NoticeList = styled.ul`
  display: grid;
  grid-gap: 8px;
`

const Title = styled.h4`
  cursor: pointer;

  padding: 16px 24px;

  background-color: white;
  border-radius: 3px;
  box-shadow: 0 0 0 1px hsl(0 0% 84%);

  &:hover {
    transform: translateY(1px);
  }
`

const Text = styled.div`
  padding: 8px 0;

  p {
    margin: 16px;
  }
`
