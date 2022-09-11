import { combineReducers } from 'redux';
import user from './user';
import wallet from './wallet';

// todos os reducers da aplicação devem ser passados 
// como OBJETO para nosso combineReducers.
// ATENÇÂO : Usar sembre o combineReducer, mesmo que tenha
// somente um reducer na app, pois em caso de aumentar a escala
// da aplicação não haverá mudança na lógica
const rootReducer = combineReducers({ wallet, user });

export default rootReducer;
