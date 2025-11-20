function MoodHistory({ history }) {
  return (
    <div className="history">
  <h3> Historique des humeurs</h3>

  {history.length === 0 ? (
    <p>Aucun historique pour le moment</p>
  ) : (
    <div className="history-list">
      {history.map((m, index) => (
        <span
          key={index}
          className="history-item"
          style={{ background: m.color }}
        >
          {m.value}
        </span>
      ))}
    </div>
  )}
</div>
  )
}
export default MoodHistory;