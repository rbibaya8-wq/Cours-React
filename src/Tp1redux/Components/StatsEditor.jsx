import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../ActionsCreators";

function StatsEditor(){

    const stats=useSelector((state)=>state.stats)
    const dispatch=useDispatch();
    const handleChange = (e) => {
        let value = Number(e.target.value);
        if (value < 0) value = 0;
        if (value > 5) value = 5;
        dispatch(
          updateState({ ...stats, [e.target.name]: value,})
        );
      };
    return(
        <div>
        <form action="">
            <input name="strength" type="number" min="0" max="5" value={stats.strength} onChange={handleChange} />
            <input name="intelligence" type="number" min="0" max="5" value={stats.intelligence} onChange={handleChange} />
            <input name="agility" type="number" min="0" max="5"
                value={stats.agility} onChange={handleChange} />
        </form>
        </div>
    )
}
export default StatsEditor;