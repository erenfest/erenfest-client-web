import { Reducer, ReactNode } from 'react'
import immer from 'immer'

export type State = Readonly<{
  title: ReactNode
}>

enum ActionKind {
  Reset = 'App::Header::Reset',
  UpdateTitle = 'App::Header::UpdateTitle'
}

export type Action = Readonly<
  | {
      type: ActionKind.Reset
    }
  | {
      type: ActionKind.UpdateTitle
      title: string
    }
>

const createInitialState = (): State => ({
  title: null
})

export const reducer: Reducer<State, Action> = (state = createInitialState(), action) => {
  switch (action.type) {
    case ActionKind.Reset: {
      return createInitialState()
    }
    case ActionKind.UpdateTitle: {
      const { title } = action
      return immer(state, draft => {
        draft.title = title
      })
    }
    default: {
      return state
    }
  }
}
