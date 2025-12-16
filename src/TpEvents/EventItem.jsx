export default function EventItem({event,Onfavoris,OnDelete,OnEdit}){
        const isDate=new Date(event.date)<new Date();

    return(
        <div style={
            { backgroundColor:isDate ? "#f8d7da": "#fff"}
        }>
        <div className="infosCard">
            <h1>{event.title}</h1>
            <p>{event.date} . {event.location}</p>
            <p>{event.description}</p>
        </div>
    <div className="buttons">
            <button type="button" onClick={Onfavoris}>Favoris</button>
            <button type="button" onClick={OnDelete}>Delete</button>
            <button type="button" onClick={OnEdit}>Edit</button>
    </div>

    </div>
     )
}