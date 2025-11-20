function MoodDisplay({ mood }) {
  const defaultMood = {
    value: "Aucune humeur ",
    color: "#e0e0e0"
  };

  const current = mood || defaultMood;
  return (
    <div className="mood-display"
      style={{   
        background: current.color,
      }}
    >
      <h2>Aujourd'hui, je me sens {current.value} !</h2>
    </div>
  );
}
export default MoodDisplay;