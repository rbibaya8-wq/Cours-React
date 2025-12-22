import { useState } from "react";
import { useDispatch } from "react-redux";
import { setBudget } from "../ReduxExpense/ActionsCreators";

export default function BudgetForm(){
    const [amount,setAmount]=useState("")
    const dispatch=useDispatch();


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(setBudget(Number(amount)))
        setAmount("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Entrer le budget"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Ajouter budget</button>
        </form>
    )
}