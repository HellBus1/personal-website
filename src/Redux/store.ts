import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './reducer/root_reducer';
import { persistStore } from "redux-persist";

const store = createStore(rootReducer, applyMiddleware(thunk))

const persistor = persistStore(store)

export { store, persistor }