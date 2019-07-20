import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import * as serviceWorker from './serviceWorker'

declare var Root: HTMLDivElement

ReactDOM.render(<App />, Root)

serviceWorker.unregister()
