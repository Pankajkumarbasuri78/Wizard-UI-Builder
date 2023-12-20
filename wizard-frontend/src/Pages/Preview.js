import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';
import Button from '@mui/material/Button';
import { WizardContext } from '../Context/WizardContext';


const Preview = () => {

  const navigate = useNavigate();
  //global state
  const {completeFormDataContext} = useContext(WizardContext)


  // const renderComponentsBySeq = () => {
  //   const componentsBySeq = [
  //     ...completeFormDataContext.textBoxes,
  //     ...completeFormDataContext.radioButtons,
  //     ...completeFormDataContext.checkboxes,
  //     ...completeFormDataContext.multiSelectOptions,
  //     ...completeFormDataContext.textArea
      
  //   ];
  //   console.log(componentsBySeq)
  //   //sort by seq
  //   const sortedFormData = componentsBySeq.sort((a, b) => a.seq - b.seq);
  //   console.log(sortedFormData);
  //   //return "heelo";
  //   return sortedFormData.map((data,index)=>{
  //       switch (data.type) {
  //           case "textbox":
  //               return (
                    
  //                   <Card key={index} style={{ margin: '10px', borderRadius: '8px',width:'50%',backgroundColor:'#d6d4ce' }}>
  //                     <CardContent>
  //                       <Typography variant="h5">Text Box Question:</Typography>
  //                       <Typography variant="body1">{data.question}</Typography>
  //                       <Typography variant="subtitle1">Options:</Typography>
  //                       <List>
  //                         {data.options.map((option, optionIndex) => (
  //                           <ListItem key={optionIndex}>{option}</ListItem>
  //                         ))}
  //                       </List>
  //                     </CardContent>
  //                   </Card>
                   
  //                 );
                
  //           case "checkbox":
  //               return (
  //                   <Card key={index} style={{ margin: '10px', borderRadius: '8px',width:'50%',backgroundColor:'#d6d4ce' }}>
  //                     <CardContent>
  //                       <Typography variant="h5">Check Box Question:</Typography>
  //                       <Typography variant="body1">{data.question}</Typography>
  //                       <Typography variant="subtitle1">Options:</Typography>
  //                       <List>
  //                         {data.options.map((option, optionIndex) => (
  //                           <ListItem key={optionIndex}>{option}</ListItem>
  //                         ))}
  //                       </List>
  //                     </CardContent>
  //                   </Card>
  //               );

  //           case "mcq":
  //             return(
  //               <Card key={index} style={{ margin: '10px', borderRadius: '8px',width:'50%',backgroundColor:'#d6d4ce' }}>
  //                     <CardContent>
  //                       <Typography variant="h5">Check Box Question:</Typography>
  //                       <Typography variant="body1">{data.question}</Typography>
  //                       <Typography variant="subtitle1">Options:</Typography>
  //                       <List>
  //                         {data.options.map((option, optionIndex) => (
  //                           <ListItem key={optionIndex}>{option}</ListItem>
  //                         ))}
  //                       </List>
  //                     </CardContent>
  //                   </Card>
  //             )

  //           case "radio":
  //             return(
  //               <Card key={index} style={{ margin: '10px', borderRadius: '8px',width:'50%',backgroundColor:'#d6d4ce' }}>
  //                     <CardContent>
  //                       <Typography variant="h5">Check Box Question:</Typography>
  //                       <Typography variant="body1">{data.question}</Typography>
  //                       <Typography variant="subtitle1">Options:</Typography>
  //                       <List>
  //                         {data.options.map((option, optionIndex) => (
  //                           <ListItem key={optionIndex}>{option}</ListItem>
  //                         ))}
  //                       </List>
  //                     </CardContent>
  //                   </Card>
  //             )

  //           case "textarea":
  //             return(
  //               <Card key={index} style={{ margin: '10px', borderRadius: '8px',width:'50%',backgroundColor:'#d6d4ce' }}>
  //                     <CardContent>
  //                       <Typography variant="h5">Check Box Question:</Typography>
  //                       <Typography variant="body1">{data.question}</Typography>
  //                       <Typography variant="subtitle1">Description:</Typography>
  //                       <List>
  //                         {data.textDescription}
  //                       </List>
  //                     </CardContent>
  //                   </Card>
  //             )
        
  //           default:
  //               break;
  //       }

  //   })
  //   // return componentsBySeq
  //   //   .sort((a, b) => a.seq - b.seq) 
  //   //   .map((component) => renderComponent(component));

  // };

  const renderComponentsBySeq = ()=>{
    const componentsBySeq = [...completeFormDataContext];
  }

  const handleBack = () => {

    //navigate('/ui',{ state: { formDataFromLocation: formDataFromLocation } })
    navigate('/ui')
  }

  return (
    <div>
      <h1>Form Components Preview</h1>
      <Button variant="contained" color="success" onClick={handleBack}
                  >
            Back
          </Button>
      {renderComponentsBySeq()}
    </div>
  );
};

export default Preview;














