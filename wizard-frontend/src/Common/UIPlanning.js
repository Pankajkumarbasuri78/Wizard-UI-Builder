import React, { useState } from 'react';
import TextBoxes from '../Component/InputField/TextBoxes';
import CheckboxComponent from '../Component/InputField/Checkbox';
import Dropdown from '../Component/InputField/Dropdown';
import MultiSelectOption from '../Component/InputField/MultiSelectOption';
import RadioButton from '../Component/InputField/RadioButton';
import Button from '@mui/material/Button';
import '../CSS/UIPlanning.css';
import { useLocation } from 'react-router-dom';

const UIPlanning = () => {
  const location = useLocation();
  const formDataFromLocation = location.state.formData;

  //const totalStep = formData.totalSteps;
  
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
        <TextBoxes setCompleteFormState = {setCompleteFormState} completeFormData={completeFormData} 
        key={selectedComponents.length} />]);
        break;

      case 'CheckboxComponent':
        setSelectedComponents([...selectedComponents, 
        <CheckboxComponent setCompleteFormState = {setCompleteFormState} completeFormData={completeFormData}
        key={selectedComponents.length} />]);
        break;

      case 'DropdownComponent':
        setSelectedComponents([...selectedComponents, 
        <Dropdown setCompleteFormState = {setCompleteFormState} completeFormData={completeFormData}
        key={selectedComponents.length} />]);
        break;

      case 'MultiSelectOptionComponent':
        setSelectedComponents([...selectedComponents, 
        <MultiSelectOption setCompleteFormState = {setCompleteFormState} completeFormData={completeFormData}
        key={selectedComponents.length} />]);
        break;

      case 'RadioButtonComponent':
        setSelectedComponents([...selectedComponents, 
        <RadioButton setCompleteFormState = {setCompleteFormState} completeFormData={completeFormData}
        key={selectedComponents.length} />]);
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
  
 

  console.log('Form State:', completeFormData);

  return (
    <>
      <div style={{ display: 'flex' }}>
        
      <div className='uiContainer' style={{ position: 'sticky', top: 0 }}>
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
        </div>
      </div>

      <div style={{ width: '80%', padding: '20px' }}>
         <h1>{formDataFromLocation.title}</h1>
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
