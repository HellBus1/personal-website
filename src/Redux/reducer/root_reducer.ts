
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { persistAuthConfig } from '../../Constant/persist_storage_config';
import AuthReducer from './auth_reducer';

const rootReducer = combineReducers({
  authReducer: persistReducer(persistAuthConfig, AuthReducer),
})

export type ApplicationState = ReturnType<typeof rootReducer>

export { rootReducer }