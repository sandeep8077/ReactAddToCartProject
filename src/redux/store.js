import { createStore } from 'redux';
import rootReducer from './mainStore';
export const store = createStore(rootReducer);