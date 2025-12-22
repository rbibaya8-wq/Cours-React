import { useDispatch, useSelector } from "react-redux";
import { setClass } from "../ActionsCreators";

function ClassSelector (){

    const classe = useSelector((state) => state.class);
    const dispatch = useDispatch();
    return(
        <div>
            <form action="">
                <label>
                        <input type="radio" checked={classe === "warrior"} onChange={() => dispatch(setClass("warrior"))}/>
                        Guerrier
                </label>


                <label>
                        <input type="radio" checked={classe === "mage"} onChange={() => dispatch(setClass("mage"))}/>
                        mage
                </label>

                <label>
                        <input type="radio" checked={classe === "archer"} onChange={() => dispatch(setClass("archer"))}/>
                        archer
                </label>
            </form>
        </div>
    )
} 
export default  ClassSelector;