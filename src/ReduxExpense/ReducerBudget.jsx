import { ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET } from "./ActionsTypes";

const initial_state = { 
budget:0, 
expenses : [] 
} 

export default function ReducerBudget(state=initial_state,action){
    switch(action.type){
        case SET_BUDGET:
            return{
                ...state,
                budget:action.payload,
            }
        case ADD_EXPENSE:
            return{
                ...state,
                expenses:[...state.expenses,action.payload]
            } 
        case DELETE_EXPENSE:
            return{
                ...state,
                expenses:state.expenses.filter((expense)=>expense.id !== action.payload)
            }
        default:
            return state;           
    }
    }
