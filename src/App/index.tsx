import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as TranslationProvider } from 'use-translation'

import './clearfix.css'
import { config } from '../constants'
import { BaseTemplate } from './Templates'
import { Pages } from './Pages'

export const App: FC = () => (
  <TranslationProvider host={config.translationHost}>
    <BaseTemplate>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </BaseTemplate>
  </TranslationProvider>
)