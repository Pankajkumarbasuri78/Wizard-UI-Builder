import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Navbar from "../Common/Navbar";
import Typography from '@mui/material/Typography';

const WizardCreation = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    totalSteps: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //const { name, value } = e.target;
    // Update the form data with the new value for the specific field ('name' corresponds to the field name)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);

    setFormData({
        title: "",
        description: "",
        totalSteps: "",
      });
  };

  const handleNextClick = () => {
    // Perform actions when the "Next" button is clicked
    console.log('Next button clicked');
    // You can add additional logic here for navigating to the next step, etc.
  };

  

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
        <Typography variant="h4" gutterBottom>
           Initiate Your New Wizard
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Give Title of WizardForm"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Give Description of WizardForm"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            fullWidth
            label="Total Steps"
            name="totalSteps"
            value={formData.totalSteps}
            onChange={handleInputChange}
            margin="normal"
            type="number"
            required
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2, mr: 30 }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextClick}
            sx={{ mt: 2 }}
          >
            Next
          </Button>
          
        </form>
      </Box>
    </>
  );
};

export default WizardCreation;
