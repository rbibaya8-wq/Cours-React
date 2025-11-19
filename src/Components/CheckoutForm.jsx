import { useState } from "react"

function CheckoutForm({SetShowForm,total}){
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Paiment Done");
        SetShowForm(false)
    };

    const [name,setName]=useState("");
    const [Email,SetEmail]=useState("");
    const [NumCart,SetNumCart]=useState("");
    return(
        <div className="checkout-overlay">

            <div className="checkout-form">
                <button type="button" onClick={()=>SetShowForm(false)}>X</button>
            <h3>Paiment</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Your Name:</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />

                <label htmlFor="">Your Email</label>
                <input type="text" value={Email} onChange={(e)=>SetEmail(e.target.value)} />

                <label htmlFor="">Cart Num:</label>
                <input type="text" value={NumCart} onChange={(e)=>SetNumCart(e.target.value)}/>
                <h3>Total : ${total.toFixed(2)}</h3>
                <button type="sumbit">Confirm your Paiment</button>
            </form>

            </div>
        </div>
            
    )
}
export default CheckoutForm;