import { useState, useEffect } from 'react';
import axios from 'axios';

const useExchangeRates = (apiKey) => {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const url = `https://v6.exchangerate-api.com/v6/7bfe61006a74cddb7f342812/latest/USD
`;
        const response = await axios.get(url);
        setRates(response.data.conversion_rates);
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rates');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
    const interval = setInterval(fetchRates, 3600000); // Refresh hourly
    return () => clearInterval(interval);
  }, [apiKey]);

  return { rates, loading, error };
};

export default useExchangeRates;
