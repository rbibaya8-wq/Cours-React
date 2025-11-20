function MoodSelector({ moods, onSelectMood }) {
  return (
    <div className="mood-selector">
      {moods.map((m) => (
        <button className="mood-btn"
          key={m.value}
          style={{ background: m.color, padding: "10px 20px", borderRadius: "20px" }}
          onClick={() => onSelectMood(m)}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}   

export default MoodSelector;