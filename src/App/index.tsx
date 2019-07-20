import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as TranslationProvider } from 'use-translation'

import './clearfix.css'
import { config } from '../constants'
import { Pages } from './Pages'

export const App: FC = () => (
  <BrowserRouter>
    <TranslationProvider host={config.translationHost}>
      <Pages />
    </TranslationProvider>
  </BrowserRouter>
)
