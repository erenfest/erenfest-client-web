import { createStore, combineReducers } from 'react-hookable-store'

import { reducer as Modal } from './Modal'
import { reducer as Header } from './Header'

type State = Readonly<{
  Modal: import('./Modal').State
  Header: import('./Header').State
}>

type Action = import('./Modal').Action | import('./Header').Action

const reducer = combineReducers<State, Action>({
  Modal,
  Header
})

export const { StoreProvider, useStore, useSelector, useDispatch } = createStore(reducer)
