import {combineReducers} from 'redux';
import FormReducer from '../reducer/FormReducer';
import LoginForm from '../reducer/LoginFrom';
const rootReducer = combineReducers({
        formList : FormReducer,
        users : LoginForm
});
export default rootReducer;