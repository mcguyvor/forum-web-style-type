import firebase from '../firebase';
export default function(state=[],action){
    const db = firebase.firestore();
    db.collection('users').doc();
    switch(action.type){
        case 'LOGIN_FORM':
        return action.loginData;
        default : return state;
    }
}