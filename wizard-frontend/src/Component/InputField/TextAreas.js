import React, { useState, useContext } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { WizardContext } from '../../Context/WizardContext';

const TextArea = ({ onRemove }) => {
  // Global state
  const { completeFormDataContext, setCompleteFormDataContext, globalSeq, setGlobalSeq } = useContext(WizardContext);

  // Local state
  const [formData, setFormData] = useState({
    type: 'textarea',
    question: '',
    textDescription: '',
    seq: globalSeq,
  });

  const handleQuestionChange = (e) => {
    setFormData({ ...formData, question: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, textDescription: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGlobalSeq(globalSeq + 1);

    console.log('From TextArea comp. :', formData);

    // Clone and update context data
    const textAreaUpdate = { ...completeFormDataContext };
    textAreaUpdate.textArea.push(formData);

    setCompleteFormDataContext(textAreaUpdate);
    onRemove();

    setFormData({
      question: '',
      textDescription: '',
    });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: '20px', backgroundColor: '#F3F5F0', borderRadius: '8px', boxShadow: '0px 3px 6px #00000029' }}>
      <Typography variant="h5" gutterBottom>
        Create Your TextArea Wizard
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
          <TextField
            label="Text Description"
            fullWidth
            value={formData.textDescription}
            onChange={handleDescriptionChange}
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default TextArea;
