import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const RadioButton = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleQuestionChange = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const handleOptionChange = (e) => {
    setCurrentOption(e.target.value);
  };

  const addQuestion = () => {
    if (currentQuestion.trim() !== '' && options.length >= 2 && options.length <= 4) {
      console.log('Added Question:', { question: currentQuestion, options, answer: selectedAnswer });
      setQuestions([...questions, { question: currentQuestion, options, answer: selectedAnswer }]);
      setCurrentQuestion('');
      setOptions([]);
      setSelectedAnswer('');
    }
  };

  const addOption = () => {
    if (currentOption.trim() !== '' && options.length < 4) {
      setOptions([...options, currentOption]);
      setCurrentOption('');
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h5" gutterBottom>
        Provide Field Heading
      </Typography>
      <TextField
        label="Question"
        fullWidth
        value={currentQuestion}
        onChange={handleQuestionChange}
        margin="normal"
        variant="outlined"
      />
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Add Options
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TextField
            label="Option"
            fullWidth
            value={currentOption}
            onChange={handleOptionChange}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            onClick={addOption}
            disabled={options.length === 4 || currentOption.trim() === ''}
            sx={{ ml: 2 }}
          >
            <AddIcon />
          </Button>
        </Box>
        <RadioGroup
          aria-label="radios"
          name="radios"
          value={selectedAnswer}
          onChange={(e) => setSelectedAnswer(e.target.value)}
        >
          {options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <Button variant="contained" color="primary" onClick={addQuestion} disabled={currentQuestion.trim() === '' || options.length < 2}>
        Add Question
      </Button>
    </Box>
  );
};

export default RadioButton;
