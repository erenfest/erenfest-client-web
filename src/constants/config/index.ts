import { Config } from './types'
import { config as productionConfig } from './production'
import { config as developmentConfig } from './development'

export const config: Config = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig
