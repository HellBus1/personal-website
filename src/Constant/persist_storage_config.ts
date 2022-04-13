// @ts-ignore
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'

const persistAuthConfig = {
  key: 'auth',
  storage: new CookieStorage(Cookies, {
    expiration: {
      'default': 86400
    },
    secure: true
  }),
  whitelist: ['access_token', 'refresh_token']
}

export { persistAuthConfig }