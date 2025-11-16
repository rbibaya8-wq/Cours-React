function DashedList({Livres}){
    return(
        <div>
     {Livres.map((Livre,index)=>(
   <p key={index}> - {Livre.title} ({Livre.author} - {Livre.publicationYear})</p>
))}

        </div>

    );

}
export default DashedList;