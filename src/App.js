import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Hello from "./Hello"
import Err from "./Err"

function App(){
    return(
        <Router>
          <div className="App">
            <Routes>
            <Route path="/hello" element={<Hello />} />
            <Route path="/*" element={<Err />} />
            </Routes>
          </div>
        </Router>
    );
}
export default App;