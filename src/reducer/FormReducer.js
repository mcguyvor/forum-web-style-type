//import {addForm} from '../action/index';
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

        case 'DELETE_ITEM':
            const matchDelete =state.find(idx=>idx.formId===action.forumId); // find the match delete forumId
            const newForumList = state.filter(idx=>idx.formId!==action.forumId); //filter only the array that dont match the formId
          db.collection('forums').doc(matchDelete.formId).delete();//delete collection with match ID
           return newForumList; //return the new forums list to redux for client side
        default: return state;
    }
}
