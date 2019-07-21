import { useState } from 'react'

import { chatting, attendeeList } from './dummy'

export const useRoom = () => {
  const [state, setState] = useState(() => ({ chatting, attendeeList }))
  return [state, setState] as const
}
