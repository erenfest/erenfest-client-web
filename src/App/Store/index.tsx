import { createStore, combineReducers } from 'react-hookable-store'

import { reducer as Modal } from './Modal'

type State = Readonly<{
  Modal: import('./Modal').State
}>

type Action = import('./Modal').Action

const reducer = combineReducers<State, Action>({
  Modal
})

export const { StoreProvider, useStore, useSelector, useDispatch } = createStore(reducer)
