import { useState } from 'react'

import { roomList, chatting } from './dummy'

export const useLobby = () => {
  const [state, setState] = useState(() => ({ roomList, chatting }))
  return [state, setState] as const
}
