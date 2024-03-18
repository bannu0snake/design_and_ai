import logo from "./logo.svg";
import "./App.css";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="bg-[#393939] relative">
      <div className="absolute right-[-2rem] top-0 rounded-full bg-amber-400 opacity-20 w-[25.375rem] h-[25.375rem] blur-2xl"></div>
      <Landing />
    </div>
  );
}

export default App;
