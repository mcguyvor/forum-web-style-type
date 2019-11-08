import uuid from 'uuid';

export const addForm=(value)=>{
        const id = uuid();
        const currentTime = new Date();
        return({
            type:'ADD_FORM',
            value,formId: id,publishTime: currentTime
            //payload:{ value
                    //formId: id,
                    //publishTime: currentTime,
                     // value is in object
            //}
        }
        )
};
export const fetchData=(dataArr)=>{
        return({
                type:'FETCH_DATA',
                dataArr
        })
};
export const loginForm=(loginData)=>{
        return({
                type:'LOGIN_FORM',
                loginData
        })
};
export const deleteItem=forumId=>{
        return({
                type:'DELETE_ITEM',
                forumId
        })
}