import './App.css';
import Perfil from './components/Perfil';

function App() {
  const imagem = "https://tm.ibxk.com.br/2014/08/13/13153232058627.jpg?ims=1200x675";
  const nome = "Michelangelo";
  const idade = 15;
  const cor = "Laranja";
  return (
    <div className="App">
      <Perfil imagem={imagem} nome={nome} idade={idade} cor={cor}/>
    </div>
  );
}

export default App;
