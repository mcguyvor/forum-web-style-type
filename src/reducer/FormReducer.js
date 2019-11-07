import {addForm} from '../action/index';
import firebase from '../firebase';
export default function(state=[],action){
    const db = firebase.firestore();
    db.collection('forums').doc();
    switch(action.type){
        case 'ADD_FORM':
            console.log('test');
            db.collection('forums').doc(action.payload.formId).set(action.payload);
            return [...state,action.payload]; // push new list to state
        case 'FETCH_DATA':
        return action.dataArr;
        default: return state;
    }
}
