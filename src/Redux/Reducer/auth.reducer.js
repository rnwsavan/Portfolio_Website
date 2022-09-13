import * as ActionType from '../ActionType'

const newvalue = {
    isLoading : false,
    user : null,
    error:''
}
export const authReducer =(state=newvalue ,action) =>{
    // console.log(action.type, action.payload);
    switch (action.type){
        case ActionType.LOGED_FORM:
            return{
                ...state,
                isLoading: false,
                user:action.payload,
                error: ''
            }

            case ActionType.LOGGEDOUT_USER:
            return{
                ...state,
                isLoading: false,
                user:null,
                error: ''
            }
            
        default : 
            return state;
            
    }
    
}