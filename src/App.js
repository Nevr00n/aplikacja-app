import "./App.css";
// import Welcome from "./WelcomeClass";
import Welcome from "./WelcomeFunction";

function App() {
  return (
    <div>
      <Welcome name="Sara" surName ="Kowalik" />
      <Welcome name="Cahal" surName ="Nowak" />
      <Welcome name="Edite" surName ="Dimitri" />
    </div>
  );
}

export default App;
