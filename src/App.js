import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import Nav from "./Components/NavBar/Nav";
import Sidebar from "./Components/SideBar/Sidebar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <AllRoutes />
    </div>
  );
}

export default App;
