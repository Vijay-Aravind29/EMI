import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Paper,
  CircularProgress,
  Alert
} from '@mui/material';
import { AppContext } from '../ContextAPI/AppContext';

const CurrencyConverter = () => {
  const { currency, rates, loading, error, setCurrency } = useContext(AppContext);
  const [amount, setAmount] = useState(100);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [availableCurrencies, setAvailableCurrencies] = useState(['USD', 'EUR']); // Default fallback

  // Update available currencies when rates load
  useEffect(() => {
    if (rates) {
      const currencies = Object.keys(rates);
      setAvailableCurrencies(currencies);
      // Ensure current selections are valid
      if (!currencies.includes(currency)) {
        setCurrency('USD');
      }
      if (!currencies.includes(targetCurrency)) {
        setTargetCurrency('EUR');
      }
    }
  }, [rates, currency, targetCurrency, setCurrency]);

  // Calculate converted amount
  useEffect(() => {
    if (rates && currency && targetCurrency && 
        availableCurrencies.includes(currency) && 
        availableCurrencies.includes(targetCurrency)) {
      const usdAmount = currency === 'USD' ? amount : amount / rates[currency];
      const newAmount = targetCurrency === 'USD' ? usdAmount : usdAmount * rates[targetCurrency];
      setConvertedAmount(newAmount);
    }
  }, [amount, currency, targetCurrency, rates, availableCurrencies]);

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
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Currency Converter
      </Typography>
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
        <TextField
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          fullWidth
          inputProps={{ min: 0 }}
        />
        <TextField
          select
          label="From"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          fullWidth
          disabled={!rates}
        >
          {availableCurrencies.map((curr) => (
            <MenuItem key={curr} value={curr}>
              {curr}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="To"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          fullWidth
          disabled={!rates}
        >
          {availableCurrencies.map((curr) => (
            <MenuItem key={curr} value={curr}>
              {curr}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      {rates && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          {amount.toFixed(2)} {currency} = {convertedAmount.toFixed(2)} {targetCurrency}
        </Typography>
      )}
    </Paper>
  );
};

export default CurrencyConverter;