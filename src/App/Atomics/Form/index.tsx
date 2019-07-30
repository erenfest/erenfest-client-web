import React, { ReactNode, useImperativeHandle, useRef, forwardRef, FC, Ref, CSSProperties } from 'react'
import styled, { css } from 'styled-components'

interface Props {
  readonly children: ReactNode
}

export function Form({ children }: Props) {
  return <Layout>{children}</Layout>
}

const Layout = styled.form`
  display: grid;
  grid-gap: 24px;
`

Form.Row = styled.div`
  display: grid;
  grid-gap: 8px;
`

const LabelLayout = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
  align-items: center;

  margin: 0 8px;

  white-space: nowrap;

  label {
    flex: 1;

    font-weight: bolder;
    text-transform: capitalize;
  }
`

interface LabelProps {
  readonly isRequired?: boolean
}

const Label: FC<LabelProps> = ({ isRequired, children }) => (
  <LabelLayout>
    <label>{children}</label>
    {isRequired && <small>필수</small>}
  </LabelLayout>
)

Form.Label = Label

interface InputRef {
  readonly value: string
}

const useImperativeRef = (ref: Ref<InputRef>) => {
  const currentRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    get value() {
      return currentRef.current!.value
    }
  }))
  return currentRef
}

interface InputLayoutProps {
  readonly maxLength?: number
}

const InputLayout = styled.div<InputLayoutProps>`
  display: grid;
  grid-template-columns: min-content 1fr min-content;

  padding: 8px;

  background-color: hsl(0 16% 96%);
  border: 1px solid hsl(0 16% 84%);
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 12px 0 hsl(0 16% 84%);
  }

  span {
    white-space: nowrap;
  }

  ${({ maxLength }) =>
    maxLength &&
    css`
      width: min-content;

      input {
        width: calc(${maxLength}ch);
      }
    `}
`

interface BaseProps extends InputLayoutProps, Styleable {
  readonly placeholder?: string
  readonly prefix?: string
  readonly postfix?: string
  readonly style?: CSSProperties
}

interface TextProps extends BaseProps {}

Form.Text = forwardRef<InputRef, TextProps>(({ placeholder, prefix, postfix, maxLength, style }, ref) => {
  const currentRef = useImperativeRef(ref)
  return (
    <InputLayout maxLength={maxLength} style={style}>
      <span>{prefix}</span>
      <input type='text' placeholder={placeholder} maxLength={maxLength} ref={currentRef} />
      <span>{postfix}</span>
    </InputLayout>
  )
})

Form.Password = forwardRef<InputRef, TextProps>(({ placeholder, prefix, postfix, maxLength, style }, ref) => {
  const currentRef = useImperativeRef(ref)
  return (
    <InputLayout maxLength={maxLength} style={style}>
      <span>{prefix}</span>
      <input type='password' placeholder={placeholder} maxLength={maxLength} ref={currentRef} />
      <span>{postfix}</span>
    </InputLayout>
  )
})

const NumericLayout = styled(InputLayout)`
  input {
    text-align: end;
  }
`

interface NumericProps extends BaseProps {
  readonly defaultValue: number
  readonly max?: number
  readonly min?: number
  readonly step?: number
}

Form.Numeric = forwardRef<InputRef, NumericProps>(
  ({ placeholder, prefix, postfix, maxLength, defaultValue, min, max, step = 1, style }, ref) => {
    const currentRef = useImperativeRef(ref)
    return (
      <NumericLayout maxLength={maxLength} style={style}>
        <span>{prefix}</span>
        <input
          type='number'
          placeholder={placeholder}
          maxLength={maxLength}
          defaultValue={defaultValue.toString()}
          min={min}
          max={max}
          step={step}
          ref={currentRef}
        />
        <span>{postfix}</span>
      </NumericLayout>
    )
  }
)
