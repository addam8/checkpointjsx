// import logo from './logo.svg';
import './App.css';
import Adresse from './Component/Profil/Adresse';
import FullName from "./Component/Profil/FullName";
import ProfilPhoto from './Component/Profil/ProfilPhoto';
function App() {
  return (
    <div className='t'>
      <ProfilPhoto/>
     <FullName/>
     <Adresse/>
    </div>
  );
}

export default App;
