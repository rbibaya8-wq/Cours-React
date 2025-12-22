import { useDispatch, useSelector } from "react-redux";
import { setName } from "../ActionsCreators";

function  CharacterName (){

    const name=useSelector((state)=>state.name)
    const dispatch=useDispatch()
    return(
        <div>
            <form action="">
                <label htmlFor="">Nom de Personnnage:</label>
                <input type="text"  value={name} onChange={(e)=>dispatch(setName(e.target.value))}/>
            </form>
        </div>
    )
}
export default CharacterName;