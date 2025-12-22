import { ADD_EXPENSE, DELETE_EXPENSE, SET_BUDGET } from "./ActionsTypes"

export const setBudget=(amount)=>{
    return{
        type:SET_BUDGET,
        payload:amount,
    }
}

export const  addExpense=(expense)=>{
    return{
        type:ADD_EXPENSE,
        payload:expense,
    }
}

export const deleteExpense=(id)=>{
    return{
        type:DELETE_EXPENSE,
        payload:id,
    }
}