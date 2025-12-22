import { SET_CLASS, SET_NAME, SET_STATS } from "./ActionsTypes";

const initialState = { 
name: 'Aventurier', 
class: 'warrior', 
stats: { 
strength: 5, 
intelligence: 5, 
agility: 5, 
}, 
totalPoints: 15, 
};

const ReducerPerso =(state=initialState,action)=>{
    let newState = { ...state };
    switch(action.type){
        case SET_NAME:
            newState.name=action.payload;
            break;
        case SET_CLASS:
            newState.class=action.payload;
            break;
        case SET_STATS:
            newState.stats=action.payload;
            newState.totalPoints=
            action.payload.strength +
            action.payload.intelligence +
            action.payload.agility;
            break;        
    }
    return newState;
}
export default ReducerPerso;