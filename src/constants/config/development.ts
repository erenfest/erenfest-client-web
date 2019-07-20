import { Config } from './types'

export const config: Config = {
  isProduction: process.env.NODE_ENV === 'production',
  translationHost: 'http://localhost:3001/i18n'
}
