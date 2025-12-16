import { useState } from "react";
import Header from "./Header";
import EventItem from "./EventItem";
import AddEvent from "./AddEvent";

export default function EventList(){
    const [events,setEvents]=useState([
        {
            id:1,
            title:"Photographie",
            description:"",
            date:"2025-12-19",
            location:"Tanger",
            type:"Atelier",
        },
          {
            id:2,
            title:"Machine Learning",
            description:"Learning machine",
            date:"2025-12-25",
            location:"a Distance",
            type:"Conference",
        }
    ]);
    const [Filtrertype,SetFiltrerType]=useState("Tous");
    const [showAdd, setShowAdd] = useState(false);
    const [sortDate,setSortDate]=useState(false)
    const [Favoris,SetFavoris]=useState([])
    const [isEditinigEvent,setEditingEvents]=useState(null)

    
   

    const OnEdit=(events)=>{
        setEditingEvents(events);
        setShowAdd(true)
    } 

    const OnDelete=(id)=>{
        setEvents(events.filter((e)=>e.id !== id ))
    }

    const Onfavoris = (event) => {
    if (Favoris.some((f) => f.id === event.id)) {
        SetFavoris(Favoris.filter((f) => f.id !== event.id));
    } else {
        SetFavoris([...Favoris, event]);
    }
    };

    let processEvents=[...events];
    if (Filtrertype !== "Tous") {
    processEvents = processEvents.filter(
        (e) => e.type === Filtrertype
    );
    }

    if (sortDate) {
    processEvents.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
    );
    }

    const onSave = (event) => {
    if (event.id) {
        setEvents(events.map((e) => (e.id === event.id ? event : e)));
    } else {
        setEvents([...events, { ...event, id: Date.now() }]);
    }
    setShowAdd(false);
    setEditingEvents(null);
    };

    return(
        <div>
            <Header Favoris= {Favoris} events={events} />

            <select onChange={(e) => SetFiltrerType(e.target.value)}>
                <option value="Tous">Tous</option>
                <option value="Atelier">Atelier</option>
                <option value="Conference">Conference</option>
                <option value="Personnel">Personnel</option>
            </select>

            <button onClick={() => setSortDate(!sortDate)}>Trier par date</button>

            <button onClick={()=>setShowAdd(!showAdd)}>Ajouter Un Habitude</button>

            {processEvents.map((E)=>(
                <EventItem
                key={E.id}
                event={E}
                OnEdit={()=>OnEdit(E)}
                OnDelete={()=>OnDelete(E.id)}
                Onfavoris={()=>Onfavoris(E)}       
                />
            ))}
            {showAdd && (
                <AddEvent
                    onSave={onSave}
                    isEditinigEvent={isEditinigEvent}
                />
    )}
        </div>
    )
}