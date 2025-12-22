import lightReducer from "../reducers/lightReducer"

export const turnOn=()=>{
    return{
        type:"TURN_ON"
    }
}
export const turnOff=()=>{
    return{
        type:"TURN_OFF"
    }
}
export default lightReducer;