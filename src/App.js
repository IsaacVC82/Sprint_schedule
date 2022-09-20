import Tasks from "./componentes/cards.js"
import "./App.css"

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">

        
          <Tasks/>
      </header>
    </div>
  );
}
export default App;