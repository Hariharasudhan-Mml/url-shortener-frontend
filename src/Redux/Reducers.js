

const initialState={
    isAutheticated:false,
    token:null,
    name:""
}


const Reducer=(state=initialState,action)=>{
switch (action.type) {
    case "AUTHENTICATE":
        localStorage.setItem("token",action.payload.token)
        localStorage.setItem("name",action.payload.name)
        return{
            isAutheticated:true,
            token:action.payload.token,
            name:action.payload.name
        }

    default:
        return {
            ...state
        }
}
}


export default Reducer;