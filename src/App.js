
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese el texto:
          <input type="text" name="texto" />
        </p>
        <p>
          <input type="submit" value="Mostrar" />
        </p>
      </form>
    </div>
    
  );
}

function presion(e) {
  e.preventDefault();
  const texto=(e.target.texto.value);
  alert('El texto escrito es: '+ texto);
}

export default App;