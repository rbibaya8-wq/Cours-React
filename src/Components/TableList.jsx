function TableList({Livres}){
    return(

        <table border="1" style={{ width: "100%", marginTop: "20px" }}>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Auteur</th>
                    <th>Annee</th>
                </tr>
            </thead>
            <tbody>
                {Livres.map((Livre,index)=>(
                    <tr key={index}>
                        <td>{Livre.title}</td>
                        <td>{Livre.author}</td>
                        <td>{Livre.publicationYear}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    );

}
export default TableList;