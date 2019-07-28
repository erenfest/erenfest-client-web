import { Reducer } from 'react'

export type State = Readonly<{
  isOpen: boolean
  tabIndex: number
}>

enum ActionKind {
  Open = 'App::Modal::Open',
  Close = 'App::Modal::Close'
}

export type Action = Readonly<
  | {
      type: ActionKind.Open
    }
  | {
      type: ActionKind.Close
    }
>

export const openModal = () => ({ type: ActionKind.Open } as const)

export const closeModal = () => ({ type: ActionKind.Close } as const)

const OPEN_STATE: State = { isOpen: true, tabIndex: -1 }

const CLOSE_STATE: State = { isOpen: false, tabIndex: 0 }

const createInitialState = (): State => CLOSE_STATE

export const reducer: Reducer<State, Action> = (state = createInitialState(), action) => {
  switch (action.type) {
    case ActionKind.Open: {
      return OPEN_STATE
    }
    case ActionKind.Close: {
      return CLOSE_STATE
    }
    default: {
      return state
    }
  }
}
