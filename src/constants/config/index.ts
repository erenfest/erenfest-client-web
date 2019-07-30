export const config = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isLocal: process.env.REACT_APP_MODE === 'local',

  i18nHost: process.env.REACT_APP_I18N_HOST!
}
