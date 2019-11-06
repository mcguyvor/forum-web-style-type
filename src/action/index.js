import uuid from 'uuid';

export const addForm=(value)=>{
        const id = uuid();
        const currentTime = new Date();
        return({
            type:'ADD_FORM',
            payload:{formId: id,
                    publishTime: currentTime,
                    value // value is in object
            }
        }
        )
};
export const fetchData=(dataArr)=>{
        return({
                type:'FETCH_DATA',
                dataArr
        })
};