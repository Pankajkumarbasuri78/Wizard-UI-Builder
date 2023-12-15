// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Preview = () => {
//   const location = useLocation();
//   const formDataFromLocation = location.state.completeFormData;

  
// console.log(formDataFromLocation.textBoxes);

//   const renderResponses = () => {
//     return (
//       <div>
//       {formDataFromLocation.textBoxes && formDataFromLocation.textBoxes.map((textBox, index) => (
//         <div key={index}>
//           <h3>Text Box Response {index + 1}</h3>
//           <p>Question: {textBox.question}</p>
//           <p>Options:</p>
//           <ul>
//             {textBox.options.map((option, optionIndex) => (
//               <li key={optionIndex}>{option}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       {formDataFromLocation.checkboxes && formDataFromLocation.checkboxes.map((checkbox, index) => (
//         <div key={index}>
//           <h3>Text Box Response {index + 1}</h3>
//           <p>Question: {checkbox.question}</p>
//           <p>Options:</p>
//           <ul>
//             {checkbox.options.map((option, optionIndex) => (
//               <li key={optionIndex}>{option}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       </div>
//     );
//   };

//   return (
//     <div>
//       <h1>Form Responses Preview</h1>
//       {renderResponses()}
//     </div>
//   );
// };

// export default Preview;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';


// import CheckboxComponent from '../Component/InputField/Checkbox';
// import RadioButton from '../Component/InputField/RadioButton';
// import TextBoxes from '../Component/InputField/TextBoxes';

const Preview = () => {
  const location = useLocation();
  const formDataFromLocation = location.state.completeFormData;

//   const renderComponent = (component) => {
//     switch (component.type) {
//       case 'TextBoxes':
//         return (
//           <TextBoxes
//             key={component.seq}
//             formData={component}
//           />
//         );
//       case 'RadioButtons':
//         return (
//           <RadioButton
//             key={component.seq}
//             formData={component}
//           />
//         );
//       case 'TextArea':
//         return (
//           <CheckboxComponent
//             key={component.seq}
//             formData={component}
//           />
//         );
//       // Add more cases for other components as needed

//       default:
//         return null;
//     }
//   };

  const renderComponentsBySeq = () => {
    const componentsBySeq = [
      ...formDataFromLocation.textBoxes,
      ...formDataFromLocation.radioButtons,
      ...formDataFromLocation.checkboxes,
      
    ];
    console.log(componentsBySeq)
    //sort by seq
    const sortedFormData = componentsBySeq.sort((a, b) => a.seq - b.seq);
    console.log(sortedFormData);
    //return "heelo";
    return sortedFormData.map((data,index)=>{
        switch (data.type) {
            case "textbox":
                return (
                    
                    <Card key={index} style={{ margin: '10px', borderRadius: '8px',width:'50%',backgroundColor:'#d6d4ce' }}>
                      <CardContent>
                        <Typography variant="h5">Text Box Question:</Typography>
                        <Typography variant="body1">{data.question}</Typography>
                        <Typography variant="subtitle1">Options:</Typography>
                        <List>
                          {data.options.map((option, optionIndex) => (
                            <ListItem key={optionIndex}>{option}</ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                   
                  );
                
            case "checkbox":
                return (
                    <Card key={index} style={{ margin: '10px', borderRadius: '8px',width:'50%',backgroundColor:'#d6d4ce' }}>
                      <CardContent>
                        <Typography variant="h5">Check Box Question:</Typography>
                        <Typography variant="body1">{data.question}</Typography>
                        <Typography variant="subtitle1">Options:</Typography>
                        <List>
                          {data.options.map((option, optionIndex) => (
                            <ListItem key={optionIndex}>{option}</ListItem>
                          ))}
                        </List>
                      </CardContent>
                    </Card>
                );
        
            default:
                break;
        }

    })
    // return componentsBySeq
    //   .sort((a, b) => a.seq - b.seq) 
    //   .map((component) => renderComponent(component));
  };

  return (
    <div>
      <h1>Form Components Preview</h1>
      {renderComponentsBySeq()}
    </div>
  );
};

export default Preview;









