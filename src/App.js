import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "./Sides/ErrorPage";
import RecipeInfo from "./Sides/RecipeInfo";
import RecipeList from "./Sides/RecipeList";
import Main from "./Sides/Main";

function App() {

return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/RecipeInfo/:id" element={<RecipeInfo />}/>
        <Route path="/RecipeList" element={<RecipeList />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

