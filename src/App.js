import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./component/Home";
import Covid from "./component/covid";
import State from "./component/state";

const App = () => {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Covid />} />
          <Route path="/state" element={<State />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
