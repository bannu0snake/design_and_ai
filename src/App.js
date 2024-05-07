import "./App.css";
import Landing from "./pages/Landing/Landing";
import Introduction from "./pages/Introduction/Introduction";
import Page1 from "./pages/Preparation/Page1";
import Page2 from "./pages/Preparation/Page2";
import MyRole from "./pages/MyRole/MyRole";
import UserPersona1 from "./pages/persona/UserPersona1";
import UserPersona2 from "./pages/persona/UserPersona2";
import EmpathyMap from "./pages/EmpathyMap/EmpathyMap";
import ThinkAndFeel from "./pages/ThinkAndFeel";

function App() {
  return (
    <div className="bg-neutral-800">
      <Landing />
      <Introduction />
      <div>
        <Page1 />
        <Page2 />
      </div>
      <MyRole />
      <UserPersona1 />
      <UserPersona2 />
      <EmpathyMap />
      <ThinkAndFeel />
    </div>
  );
}

export default App;
