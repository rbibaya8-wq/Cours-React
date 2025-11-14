function TableList({ livres }) {
  return (
    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Année</th>
          <th>Genre</th>
          <th>Note</th>
        </tr>
      </thead>

      <tbody>
        {livres.map((livre, index) => (
          <tr key={index}>
            <td>{livre.title}</td>
            <td>{livre.author}</td>
            <td>{livre.publicationYear}</td>
            <td>{livre.genre}</td>
            <td>{livre.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableList;
