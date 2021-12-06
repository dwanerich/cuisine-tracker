import { Cuisines } from "./components/Cuisines";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="container">
    <Header title='Cuisine Tracker'/>
    <Cuisines />
    </div>
  );
}

export default App;
