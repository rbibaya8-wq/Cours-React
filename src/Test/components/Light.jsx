import { useDispatch, useSelector } from "react-redux";
import { turnOff, turnOn } from "../actions/lightActions";

function Light(){
    const isOn=useSelector((state)=>state.isOn);
    const dispatch=useDispatch();


    return(
        <div>
            <h2>Light is: {isOn ?"On": "OFF"}</h2>
            <button type="button" onClick={()=>dispatch(turnOn())}>On</button>
            <button type="button" onClick={()=>dispatch(turnOff())}>Off</button>
        </div>
    )
}
export default Light;