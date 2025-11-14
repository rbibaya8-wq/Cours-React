function DashedList({ livres }) {
  return (
    <ul>
      {livres.map((livre, index) => (
        <li key={index}>
          - {livre.title} ({livre.author} – {livre.publicationYear})
        </li>
      ))}
    </ul>
  );
}

export default DashedList;
