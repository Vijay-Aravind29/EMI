import React, { useState, useContext } from 'react';
import { Box, Typography, TextField, Slider, Paper, Switch, FormControlLabel } from '@mui/material';
import useEMICalculation from '../CustomHook/useEMICalculation';
import AmortizationTable from '../Components/AmortizationTable';
import { AppContext } from '../ContextAPI/AppContext';

const Calculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);
  const { currency, rates } = useContext(AppContext);
  
  const { emi, schedule } = useEMICalculation(principal, rate, tenure);
  
  const convertedEMI = rates ? emi * rates[currency] : emi;
  
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        EMI Calculator
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          label="Loan Amount"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          fullWidth
          margin="normal"
        />
        
        <Typography gutterBottom>Interest Rate: {rate}%</Typography>
        <Slider
          value={rate}
          onChange={(e, newValue) => setRate(newValue)}
          min={1}
          max={20}
          step={0.1}
          valueLabelDisplay="auto"
        />
        
        <Typography gutterBottom>Loan Tenure: {tenure} years</Typography>
        <Slider
          value={tenure}
          onChange={(e, newValue) => setTenure(newValue)}
          min={1}
          max={30}
          valueLabelDisplay="auto"
        />
        
        <Typography variant="h6" sx={{ mt: 2 }}>
          Monthly EMI: {convertedEMI.toFixed(2)} {currency}
        </Typography>
      </Paper>
      
      <AmortizationTable schedule={schedule} currency={currency} rates={rates} />
    </Box>
  );
};

export default Calculator;