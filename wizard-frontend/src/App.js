import React from "react";
import {Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage";
import WizardCreation from "./Component/WizardCreation";
import RadioButton from "./Component/InputField/RadioButton";

import UIPlanning from "./Common/UIPlanning";
import TextBoxes from "./Component/InputField/TextBoxes";
import CheckBox from "./Component/InputField/Checkbox";
import MultiSelectOption from "./Component/InputField/MultiSelectOption";
const App = () => {
  return (
    <>
      <Routes>

        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/wizard-creation" element={<WizardCreation/>}/>
        <Route path="/ui" element={<UIPlanning/>}/>


        
        <Route path="/radio" element={<RadioButton/>}/>
        <Route path="/checkbox" element={<CheckBox/>}/>
        <Route path="/textbox" element={<TextBoxes/>}/>
        <Route path="/MultiSelect" element={<MultiSelectOption/>}/>
      </Routes>
    </>
  );
};

export default App;
