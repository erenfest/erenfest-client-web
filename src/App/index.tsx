import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider as TranslationProvider } from 'use-translation'

import './styles/index.scss'
import { config } from '../constants'
import { StoreProvider } from './Store'
import { BaseTemplate } from './Templates'
import { Pages } from './Pages'

export const App: FC = () => (
  <TranslationProvider host={config.i18nHost} language='ko'>
    <StoreProvider>
      <BaseTemplate>
        <BrowserRouter>
          <Pages />
        </BrowserRouter>
      </BaseTemplate>
    </StoreProvider>
  </TranslationProvider>
)
