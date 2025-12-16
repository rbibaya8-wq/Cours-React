export default function Header({events,Favoris}){
   return(
     <div>
        <h1>Event Planner</h1>
        <p>{events.length} Evenments.{Favoris.length} favoris</p>
    </div>
   )
}