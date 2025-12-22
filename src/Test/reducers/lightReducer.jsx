const initialState={
    isOn:false
};

function lightReducer(state=initialState,action){
    switch(action.type){
        case "TURN_ON":
            return{isOn:true};
        case "TURN_OFF":
            return{isOn:false}    
        default:
            return state;    
    }
}
export default lightReducer;