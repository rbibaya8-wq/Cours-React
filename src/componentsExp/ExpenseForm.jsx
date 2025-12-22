import {  useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../ReduxExpense/ActionsCreators";

export default function ExpenseForm(){
    const [name,setName]=useState("")
    const [amount,setAmount]=useState("")
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addExpense({
            id:Date.now(),
            name,
            amount:Number(amount),
        }))
        setName("");
        setAmount("")
    }
    return(
    <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom dépense"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="number"
                placeholder="Montant"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit">Ajouter dépense</button>
    </form>
    )
}