import Json from "./json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Json />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
