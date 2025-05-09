import React from 'react';
import { Box, Typography, Link, Paper } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          About EMI Calculator
        </Typography>
        <Typography variant="body1" paragraph>
          This EMI Calculator application helps you calculate your Equated Monthly Installments for loans 
          with various interest rates and tenures. It also provides real-time currency conversion using 
          live exchange rates.
        </Typography>
        <Typography variant="body1" paragraph>
          The application is built with React, Material UI, and Context API for state management. 
          It uses the ExchangeRate-API for fetching live currency exchange rates.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Features:
        </Typography>
        <ul>
          <li>EMI calculation using standard financial formulas</li>
          <li>Detailed amortization schedule</li>
          <li>Real-time currency conversion</li>
          <li>Dark/Light mode toggle</li>
          <li>Responsive design for all screen sizes</li>
        </ul>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          Live Demo:
        </Typography>
        <Link 
          href="https://emi-calculator-demo.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          https://emi-calculator-demo.vercel.app
        </Link>
      </Paper>
    </Box>
  );
};

export default About;