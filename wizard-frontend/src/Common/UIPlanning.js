import React, { useState,useContext } from 'react';
import TextBoxes from '../Component/InputField/TextBoxes';
import CheckboxComponent from '../Component/InputField/Checkbox';
import Dropdown from '../Component/InputField/Dropdown';
import MultiSelectOption from '../Component/InputField/MultiSelectOption';
import RadioButton from '../Component/InputField/RadioButton';
import Button from '@mui/material/Button';
import '../CSS/UIPlanning.css';
import {  useNavigate } from 'react-router-dom';

import {WizardContext} from "../Context/WizardContext"
import TextArea from '../Component/InputField/TextAreas';

const UIPlanning = () => {

  const navigate = useNavigate();

  const {wizardData} = useContext(WizardContext)
  const [currentCount,setCurrentCount] = useState(1);


  console.log("context se hai");
  console.log(wizardData);

  const {completeFormDataContext} = useContext(WizardContext);

  console.log("from context");
  console.log(completeFormDataContext);

  
  const [completeFormData, setCompleteFormState] = useState({
    textBoxes: [],
    checkboxes: [],
    dropdowns: [],
    multiSelectOptions: [],
    radioButtons: []
  });
  
  const [selectedComponents, setSelectedComponents] = useState([]);

  const handleOptionClick = (option) => {
    switch (option) {

      case 'TextBoxes':
        setSelectedComponents([...selectedComponents, 
        <TextBoxes 
          key={selectedComponents.length} 
          onRemove = {()=>handleRemoveComponent(selectedComponents.length)}
          />]);
        break;

      case 'CheckboxComponent':
        setSelectedComponents([...selectedComponents, 
        <CheckboxComponent 
           key={selectedComponents.length} 
           onRemove = {()=>handleRemoveComponent(selectedComponents.length)}
           />]);
        break;

      case 'DropdownComponent':
        setSelectedComponents([...selectedComponents, 
        <Dropdown 
          setCompleteFormState = {setCompleteFormState} 
          completeFormData={completeFormData}
          key={selectedComponents.length} 
          onRemove = {()=>handleRemoveComponent(selectedComponents.length)}
        />]);
        break;

      case 'MultiSelectOptionComponent':
        setSelectedComponents([...selectedComponents, 
        <MultiSelectOption 
           key={selectedComponents.length} 
           onRemove = {()=>handleRemoveComponent(selectedComponents.length)}
          />]);
        break;

      case 'RadioButtonComponent':
        setSelectedComponents([...selectedComponents, 
        <RadioButton 
          key={selectedComponents.length} 
          onRemove = {()=>handleRemoveComponent(selectedComponents.length)}
          
        />]);
        
        break;
      case 'TextAreaButtonComponent':
        setSelectedComponents([...selectedComponents, 
        <TextArea 
          key={selectedComponents.length} 
          onRemove = {()=>handleRemoveComponent(selectedComponents.length)}
          
        />]);
        
      break;


      default:
        break;
    }
  };

  const handleRemoveComponent = (index) => {
    const updatedComponents = [...selectedComponents];
    updatedComponents.splice(index, 1);
    setSelectedComponents(updatedComponents); 
  };

//passing data by navigate and location
  const handlePreview = ()=>{

    //navigate('/preview',{ state: { completeFormData: completeFormData } })
    navigate('/preview');
  }
  
  console.log('Form State:', completeFormDataContext);

  const handleNextPage = () =>{

    if(currentCount == wizardData.totalSteps){
      alert("over")
    }else{
      setCurrentCount(currentCount+1)
    }
    
  }


  return (
    <>
      <div style={{ display: 'flex' }}>
        
      <div className='uiContainer' style={{ position: 'sticky', top: 0 }}>
        <h4>Step {currentCount}</h4>
        <h2>Select a Form Element</h2>
        <div className='UiWrapper'>
          <Button variant="contained" color="success" 
                  onClick={() => handleOptionClick('TextBoxes')}
                  >
            Textbox
          </Button>
          <Button variant="contained" color="success" 
                  onClick={() => handleOptionClick('CheckboxComponent')}
                  >
            Checkbox
          </Button>
          <Button variant="contained" color="success" 
                  onClick={() => handleOptionClick('DropdownComponent')}
                  >
            Dropdown
          </Button>
          <Button variant="contained" color="success" 
                  onClick={() => handleOptionClick('MultiSelectOptionComponent')}
                  >
            MultiSelect Option
          </Button>
          <Button variant="contained" color="success" 
                  onClick={() => handleOptionClick('RadioButtonComponent')}
                  >
            Radio Button
          </Button>

          <Button variant="contained" color="success" 
                  onClick={() => handleOptionClick('TextAreaButtonComponent')}
                  >
            Text Area
          </Button>
        </div>
        <Button variant="contained" color="success" 
                  onClick={handlePreview}
                  >
            Preview
          </Button>
          <button onClick={handleNextPage}>Next</button>
        
      </div>

      <div className='renderedContainer'>
         <h1 style={{display:'flex',justifyContent:'center',marginBottom:'30px'}}>{wizardData.title}</h1>
        {selectedComponents.map((Component, index) => (
          <div key={index} style={{ marginBottom: '20px', position: 'relative' }}>
            {Component}
            <Button
              variant="contained"
              color="error"
              onClick={() => handleRemoveComponent(index)}
              style={{ position: 'absolute', top: 100, right: 0 }}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
      
    </>
  );
};

export default UIPlanning;

