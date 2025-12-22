import { useSelector } from "react-redux"

export default function SummaryCards(){

    const budget=useSelector((state)=>state.budget);
    const expenses = useSelector((state) => state.expenses || []);

    const totalExpenses = expenses.reduce(
    (sum, exp) => sum + Number(exp.amount),
    0
    );

    const diff=budget-totalExpenses;

    const styleDiff =
    diff >= 0
      ? { background: "#5cf69e", border: "5px solid #29e379" }
      : { background: "#ef4444", border: "5px solid #be123cff" };

    return(
        <div className="cards">
            <div className="card">Budget Total :{budget}</div>
            <div className="card">Depenses totals:{totalExpenses}</div>
            <div className="card"  style={styleDiff}>Ecart:{diff}</div>
        </div>
    )
}