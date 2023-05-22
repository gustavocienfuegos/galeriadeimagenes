import './App.css';
import Header from "./components/Header";
import Card from  "./components/Card/Card";
import {gato1, gato2, gato3} from './asstes/img';
import Footer from './components/Footer/Footer';
function App () {
  return (
    <div className ="App">
    
<Header title="Galería de Imágenes con
React" />
<Card url={gato1} title="gato1" description="foto gato1"/>
<Card url={gato2} title="gato2" description="foto gato2"/>
<Card url={gato3} title="gato3" description="foto gato3"/>
<Footer text="Compilado de fotos gatitos del hogar"/>
</div>
  );
}

export default App;

 
