import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../ReduxExpense/ActionsCreators";

export default function ExpenseTable(){
    const expenses=useSelector((state)=>state.expenses)
    const dispatch=useDispatch();

    return(
        <table border="1">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Montant</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody> 
                {expenses.map((exp)=>(
                    <tr key={exp.id}> 
                        <td>{exp.name}</td>
                        <td>{exp.amount}</td>
                        <td>
                            <button onClick={()=>dispatch(deleteExpense(exp.id))}>Supprimer</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}