import React, { useContext, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  CircularProgress,
  Alert
} from '@mui/material';
import { AppContext } from '../ContextAPI/AppContext';

const ExchangeRates = () => {
  const { currency, rates, loading, error } = useContext(AppContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRates = rates
    ? Object.entries(rates).filter(([curr]) =>
        curr.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

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
        Exchange Rates
      </Typography>
      <Typography variant="body1" paragraph>
        Current base currency: USD
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <TextField
          label="Search Currency"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="right">Exchange Rate (1 USD)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRates
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(([curr, rate]) => (
                  <TableRow key={curr}>
                    <TableCell>{curr}</TableCell>
                    <TableCell align="right">{rate.toFixed(6)}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRates.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default ExchangeRates;