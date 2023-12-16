import React, { useContext, useState } from 'react';
import { Typography, TextField, Button, FormControl, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../CSS/textboxes.css';
import { WizardContext } from '../../Context/WizardContext';

const TextBoxes = ({onRemove}) => {

  //global state
  const {completeFormDataContext,setCompleteFormDataContext,globalSeq,setGlobalSeq} = useContext(WizardContext)


  //local state
  const [formData, setFormData] = useState({
    type:'textbox',
    question: '',
    options: [],
    seq: globalSeq
  });

  const handleQuestionChange = (e) => {
    setFormData({ ...formData, question: e.target.value });
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index] = value;
    setFormData({ ...formData, options: updatedOptions });
  };

  const addOption = () => {
    if (formData.options.length < 4) {
      setFormData({ ...formData, options: [...formData.options, ''] });
    }
  };

  const removeOption = (index) => {
    const updatedOptions = [...formData.options];
    updatedOptions.splice(index, 1);
    setFormData({ ...formData, options: updatedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setGlobalSeq(globalSeq+1);

    console.log('From TextBox comp. :', formData);

    //structured clone

    const textBoxUpdate = structuredClone(completeFormDataContext)
    textBoxUpdate.textBoxes.push(formData)
    console.log("texboxcontext");
    console.log(textBoxUpdate);

    setCompleteFormDataContext(textBoxUpdate);
    
    // const textBoxUpdate = structuredClone(completeFormData);

    // textBoxUpdate.textBoxes.push(formData);

    // setCompleteFormState(textBoxUpdate);
    onRemove();

    

    setFormData({
      question: '',
      options: [],
    });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: '20px', backgroundColor: '#F3F5F0', borderRadius: '8px', boxShadow: '0px 3px 6px #00000029' }}>
      <Typography variant="h5" gutterBottom>
        Create Your Textbox Wizard
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'column'}}>
          <TextField
            label="Question"
            fullWidth
            value={formData.question}
            onChange={handleQuestionChange}
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          
          {formData.options.map((option, index) => (
            <div key={index} className='optionStyle'>
              <TextField
                label={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                fullWidth
                variant="outlined"
                sx={{ flex: 1, mr: 1 }}
              />
              <IconButton onClick={() => removeOption(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
          <Button
            variant="contained"
            onClick={addOption}
            disabled={formData.options.length === 4}
            sx={{ mt: 2 }}
          >
            Add Option
          </Button>
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
          </div>
      </form>
    </Box>
  );
};

export default TextBoxes;
