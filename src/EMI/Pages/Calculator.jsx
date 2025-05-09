import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  TextField,
  Slider,
  Paper,
  CircularProgress,
  Alert
} from '@mui/material';
import useEMICalculation from '../CustomHook/useEMICalculation';
import AmortizationTable from '../Components/AmortizationTable';
import CurrencyConverter from '../Components/CurrencyConverter';
import { AppContext } from '../ContextAPI/AppContext';

const Calculator = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(15);
  const { currency, convertCurrency, loading, error } = useContext(AppContext);
  
  const { emi, schedule } = useEMICalculation(principal, rate, tenure);
  
  const handlePrincipalChange = (e) => {
    const value = Math.max(0, parseFloat(e.target.value) || 0);
    setPrincipal(value);
  };
  
  const handleRateChange = (e, newValue) => {
    setRate(newValue);
  };
  
  const handleTenureChange = (e, newValue) => {
    setTenure(newValue);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={3}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={3}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        EMI Calculator
      </Typography>
      
      <CurrencyConverter />
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          label="Loan Amount (USD)"
          type="number"
          value={principal}
          onChange={handlePrincipalChange}
          fullWidth
          margin="normal"
          inputProps={{ min: 0 }}
        />
        
        <Typography gutterBottom sx={{ mt: 2 }}>
          Interest Rate: {rate}%
        </Typography>
        <Slider
          value={rate}
          onChange={handleRateChange}
          min={0}
          max={20}
          step={0.1}
          valueLabelDisplay="auto"
          aria-labelledby="interest-rate-slider"
        />
        
        <Typography gutterBottom sx={{ mt: 2 }}>
          Loan Tenure: {tenure} years
        </Typography>
        <Slider
          value={tenure}
          onChange={handleTenureChange}
          min={1}
          max={30}
          valueLabelDisplay="auto"
          aria-labelledby="tenure-slider"
        />
        
        <Typography variant="h6" sx={{ mt: 2 }}>
          Monthly EMI: {convertCurrency(emi, 'USD', currency).toFixed(2)} {currency}
        </Typography>
        <Typography variant="subtitle1">
          Total Payment: {convertCurrency(emi * tenure * 12, 'USD', currency).toFixed(2)} {currency}
        </Typography>
        <Typography variant="subtitle1">
          Total Interest: {convertCurrency(emi * tenure * 12 - principal, 'USD', currency).toFixed(2)} {currency}
        </Typography>
      </Paper>
      
      {emi > 0 && schedule.length > 0 && (
        <AmortizationTable 
          schedule={schedule} 
          currency={currency} 
          convertCurrency={convertCurrency} 
        />
      )}
    </Box>
  );
};

export default Calculator;