import React, { useContext, useState } from 'react';
import { Typography, TextField, Button, FormControl, Box, IconButton, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../CSS/textboxes.css';
import { WizardContext } from '../../Context/WizardContext';

const RadioButton = ({onRemove}) => {

  //global state
  const {completeFormDataContext,setCompleteFormDataContext,globalSeq,setGlobalSeq} = useContext(WizardContext)


  const [formData, setFormData] = useState({
    type:'radio',
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

    onRemove();

    console.log('Submitted:', formData);

    const textBoxUpdate = structuredClone(completeFormDataContext)
    textBoxUpdate.radioButtons.push(formData)
    console.log("radiocontext");
    console.log(textBoxUpdate);

    setCompleteFormDataContext(textBoxUpdate);
   

    
    setFormData({
      question: '',
      options: [],

    });

  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: '20px', backgroundColor: '#F3F5F0', borderRadius: '8px', boxShadow: '0px 3px 6px #00000029' }}>
      <Typography variant="h5" gutterBottom>
        Create Your RadioButton Component
      </Typography>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '70px', gap: '10px' }}>
          <TextField
            label="Question"
            fullWidth
            value={formData.question}
            onChange={handleQuestionChange}
            margin="normal"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ display: 'flex', height: '53px' }}>
            Submit
          </Button>
        </div>

        <FormControl component="fieldset" sx={{ mb: 4, mt: 2 }}>
          <RadioGroup value={formData.selectedOption} onChange={(e) => setFormData({ ...formData, selectedOption: e.target.value })}>
            {formData.options.map((option, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '8px', backgroundColor: '#ffffff', boxShadow: '0px 3px 6px #00000029', borderRadius: '8px', padding: '8px' }}>
                <FormControlLabel
                  value={option}
                  control={<Radio />}
                  label={
                    <TextField
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      fullWidth
                      variant="outlined"
                    />
                  }
                />
                <IconButton onClick={() => removeOption(index)}>
                  <DeleteIcon />
                </IconButton>
              </div>
            ))}
          </RadioGroup>
          <Button
            variant="contained"
            onClick={addOption}
            disabled={formData.options.length === 4}
            sx={{ mt: 2 }}
          >
            Add Option
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RadioButton;


