import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Todolist from "./Page/Home/Todolist";
import Fromm from "./Page/From/Fromm";



function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Todolist/>} />
  <Route path="/From" element={<Fromm/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
