import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablePage from "./views/TablePage";
import DetailsPage from "./views/DetailsPage";
import NewRecordPage from "./views/NewRecordPage";

const App = () => {
  return (
    <BrowserRouter  basename="/">
      <div className="App">
        <div className="App-body">
          <Routes>
            <Route path="/" element={<TablePage />} />
            <Route path="/details" element={<DetailsPage />}/>
            <Route path="/add" element={<NewRecordPage />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
};

export default App;
