import React from 'react';
import { useLocation } from 'react-router-dom';

const Preview = () => {
  const location = useLocation();
  const formDataFromLocation = location.state.completeFormData;

  
console.log(formDataFromLocation.textBoxes);

  const renderResponses = () => {
    return (
      <div>
      {formDataFromLocation.textBoxes && formDataFromLocation.textBoxes.map((textBox, index) => (
        <div key={index}>
          <h3>Text Box Response {index + 1}</h3>
          <p>Question: {textBox.question}</p>
          <p>Options:</p>
          <ul>
            {textBox.options.map((option, optionIndex) => (
              <li key={optionIndex}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    );
  };

  return (
    <div>
      <h1>Form Responses Preview</h1>
      {renderResponses()}
    </div>
  );
};

export default Preview;










