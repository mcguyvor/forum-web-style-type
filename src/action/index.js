import uuid from 'uuid';
export const addForm=(value)=>{
        const id = uuid();
        const currentTime = new Date();
        return({
            type:'ADD_FORM',
            payload:{formId: id,
                    publishTime: currentTime,
                    payload: value
            }
        }
        )
};