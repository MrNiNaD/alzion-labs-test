import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import { MyContext } from "./mycontext";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState<any>({});

  return (
    <MyContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
