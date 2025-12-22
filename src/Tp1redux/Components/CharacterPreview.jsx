import { useSelector } from "react-redux";

function CharacterPreview() {
  const state = useSelector((state) => state);
  return (
    <div>
      <h3>{state.name}</h3>
      <p>Classe : {state.class}</p>
      <p>Force : {state.stats.strength}</p>
      <p>Intelligence : {state.stats.intelligence}</p>
      <p>Agilité : {state.stats.agility}</p>
      <strong>Total : {state.totalPoints}</strong>
    </div>
  );
}
export default CharacterPreview;