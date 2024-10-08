const initialState={
    isLogIn : false,
    username:''
}
function authReducer(state=initialState,action){
    switch(action.type){
        case'LOGIN' :
        return{
            ...state,
            isLogIn:true,
            username: action.name
        }
        case'LOGOUT' :
        return{
            ...state,
            isLogOut:false,
            username:''
        }
        default:
            return state
    }
}