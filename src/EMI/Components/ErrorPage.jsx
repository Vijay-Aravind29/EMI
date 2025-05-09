import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ error }) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      textAlign="center"
      p={3}
    >
      <Typography variant="h3" color="error" gutterBottom>
        Oops!
      </Typography>
      <Typography variant="h5" gutterBottom>
        {error || 'Something went wrong'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        We're sorry for the inconvenience. Please try again later.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate('/')}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default ErrorPage;