import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About_Us";
import Overview from "./pages/Overview";
import Workout from "./pages/Workout";
import Create from "./pages/Create";
import Register from "./pages/Register";
import "./App.scss";

function App() {
  const [Login, setLogin] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/workouts`
      );
      const data = await result.json();
      setData(data.workout);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navbar Login={Login} setLogin={setLogin} />}
          >
            <Route index element={<Overview data={Data} />} />
            <Route path="/login" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/:id" element={<Workout />} />
          </Route>
        </Routes>
        <About />
      </BrowserRouter>
    </div>
  );
}

export default App;
