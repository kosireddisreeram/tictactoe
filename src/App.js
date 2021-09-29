import React from "react"; 
import Board from "./components/Board";
import  "./styles/root.scss";


function App() {
  return (
    <div className="app">
        <span  style={{ marginBottom :'40px',marginTop:'10px'}}>TIC TAC TOE</span> 
         <Board/>
    </div>
  );
}

export default App;
