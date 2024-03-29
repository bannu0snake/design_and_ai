import "./App.css";
import Landing from "./pages/Landing/Landing";
import Introduction from "./pages/Introduction/Introduction";
import Page1 from "./pages/Preparation/Page1";
import Page2 from "./pages/Preparation/Page2";

function App() {
  return (
    <div className="bg-neutral-800">
      <Landing />
      <Introduction />
      <div>
        <Page1 />
        <Page2 />
      </div>
    </div>
  );
}

export default App;
