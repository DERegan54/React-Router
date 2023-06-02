import React, {useState} from 'react';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
import ColorList from './ColorList';
import NewColorForm from './NewColorForm';
import DisplayColor from './DisplayColor';
import './App.css';


function App() {
  const initialColors = {
    white: "#FFFFFF", 
    red: "#FF0000", 
    yellow: "#FFFF00", 
    blue: "#0000FF", 
    black: "#000000",
  };

  const [colors, updateColors] = useState(initialColors);

  const handleAddColor= (newColorObj) => {
    updateColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/colors"><ColorList colors={colors} /></Route>
        <Route exact path="/colors/:color"><DisplayColor colors={colors} /></Route>
        <Route exact path="/colors/new"><NewColorForm addColor={handleAddColor} /></Route>
        <Redirect to='/colors'></Redirect>
      </BrowserRouter>
    </div>
  );
}

export default App;
