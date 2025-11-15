import ProfileHead from "./ProfilHead";
import Autre from "./Autre";
import Info from "./Info";
import Details from "./Details";
import Action from "./Action";


function Profil() {
  return (
    <div className="cards-container">
      <ProfileHead />
      <Autre />
      <Info />
      <Details />
      <Action/>
    </div>
  );
}

export default Profil;
