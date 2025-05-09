import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [rates, setRates] = useState({
    USD: 1,
    EUR: 0.85,  // Default fallback rates
    GBP: 0.73,
    INR: 82.88
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRates = async () => {
    setLoading(true);
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      if (!API_KEY) {
        throw new Error('API key not configured. Please set VITE_API_KEY in your .env file');
      }

      // ✅ ✅ ✅ HERE IS THE FIXED LINK
      const response = await axios.get(
        `https://v6.exchangerate-api.com/v6/7bfe61006a74cddb7f342812/latest/USD`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 5000 // 5 second timeout
        }
      );

      if (response.data.result === 'success') {
        setRates(response.data.conversion_rates);
        setError(null);
      } else {
        throw new Error(response.data['error-type'] || 'API returned error');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.['error-type'] || 
                         err.message || 
                         'Failed to fetch exchange rates. Using fallback rates.';
      setError(errorMessage);
      
      // Maintain existing rates as fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let interval;
    let isMounted = true;
    
    const fetchWithRetry = async () => {
      try {
        await fetchRates();
        // Only set interval after successful first fetch if component is still mounted
        if (isMounted) {
          interval = setInterval(fetchRates, 3600000); // Refresh hourly
        }
      } catch (err) {
        console.error('Initial fetch failed, retrying in 30s...');
        if (isMounted) {
          setTimeout(fetchWithRetry, 30000);
        }
      }
    };

    fetchWithRetry();
    
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    if (isNaN(amount)) {
      console.error('Invalid amount provided for conversion');
      return 0;
    }
    
    if (!rates || fromCurrency === toCurrency) return amount;
    
    // Validate currencies exist in rates
    if (!rates[fromCurrency] || !rates[toCurrency]) {
      console.error(`Missing rates for ${fromCurrency} or ${toCurrency}`);
      return amount;
    }

    try {
      const usdAmount = fromCurrency === 'USD' ? amount : amount / rates[fromCurrency];
      const result = toCurrency === 'USD' ? usdAmount : usdAmount * rates[toCurrency];
      return parseFloat(result.toFixed(4)); // Return result with 4 decimal places
    } catch (err) {
      console.error('Conversion error:', err);
      return amount;
    }
  };

  return (
    <AppContext.Provider value={{ 
      currency, 
      rates, 
      error, 
      loading,
      setCurrency,
      convertCurrency
    }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};
