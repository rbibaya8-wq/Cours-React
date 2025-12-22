/*import Light from "./Test/components/Light";

function App(){
  <Light/>
}
export default App;*/

import BudgetForm from "./componentsExp/BudgetForm";
import ExpenseForm from "./componentsExp/ExpenseForm";
import ExpenseTable from "./componentsExp/ExpenseTable";
import SummaryCards from "./componentsExp/SummaryCards";
import Header from "./componentsExp/Header";
import './App.css';
function App(){
  return(
    <div>
       <Header/>
       <SummaryCards/>
       <BudgetForm/>
       <ExpenseForm/>
       <ExpenseTable/>
    </div>
  )
}
export default App;