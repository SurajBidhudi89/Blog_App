import TopBar from "./components/topBar/TopBar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Setttings from "./pages/settings/Setttings";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const user=true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/register" element={user ? <Home/> :<Register />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={user ? <Home/> : <Login />}></Route>
      </Routes>
      <Routes>
        <Route path="/write" element={user ? <Write />:<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/settings" element={user ? <Setttings/> : <Register/>}></Route>
      </Routes>
      <Routes>
        <Route path="/post" element={<Sidebar/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
