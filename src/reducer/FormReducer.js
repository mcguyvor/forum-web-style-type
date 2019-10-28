import {addForm} from '../action/index';
export default function(state=[],action){
    switch(action.type){
        case 'ADD_FORM':
            console.log('test')
            return [...state,action.payload]; // push new list to state
        default: return state;
    }
}
