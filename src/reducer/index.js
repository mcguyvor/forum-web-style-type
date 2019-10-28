import {combineReducers} from 'redux';
import FormReducer from '../reducer/FormReducer';
const rootReducer = combineReducers({
        formList : FormReducer
});
export default rootReducer;