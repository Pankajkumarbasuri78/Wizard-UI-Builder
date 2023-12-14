import React, { useState } from 'react';
import { Typography, TextField, Button, FormControl, FormGroup, FormControlLabel, Checkbox, Box } from '@mui/material';

const CheckBox = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const handleAnswerChange = (e, index) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[index] = e.target.checked;
    setSelectedAnswers(updatedSelectedAnswers);
  };

  const addOption = () => {
    if (options.length < 4) {
      setOptions([...options, '']);
      setSelectedAnswers([...selectedAnswers, false]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform actions with the submitted data (question, options, selectedAnswers)
    console.log('Submitted:', { question, options, selectedAnswers });
    // Clear the form after submission
    setQuestion('');
    setOptions([]);
    setSelectedAnswers([]);
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>
        Create Google Checkbox Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Question"
          fullWidth
          value={question}
          onChange={handleQuestionChange}
          margin="normal"
          variant="outlined"
        />
        <FormControl component="fieldset" sx={{ mb: 2 }}>
          <Typography variant="subtitle1" gutterBottom>
            Add Options
          </Typography>
          <FormGroup>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedAnswers[index] || false}
                    onChange={(e) => handleAnswerChange(e, index)}
                  />
                }
                label={
                  <TextField
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                  />
                }
              />
            ))}
          </FormGroup>
          <Button
            variant="contained"
            onClick={addOption}
            disabled={options.length === 4}
            sx={{ mt: 2 }}
          >
            Add Option
          </Button>
        </FormControl>
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default CheckBox;
