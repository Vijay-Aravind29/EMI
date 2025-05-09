import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  useTheme
} from '@mui/material';

const AmortizationTable = ({ schedule, currency, convertCurrency }) => {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (!schedule || schedule.length === 0) {
    return <Typography variant="body1">No schedule data available</Typography>;
  }

  return (
    <Paper sx={{ mt: 3, p: 2, backgroundColor: theme.palette.background.paper }}>
      <Typography variant="h6" gutterBottom>
        Amortization Schedule
      </Typography>
      <TableContainer>
        <Table size="small" aria-label="amortization schedule">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Payment ({currency})</TableCell>
              <TableCell align="right">Principal ({currency})</TableCell>
              <TableCell align="right">Interest ({currency})</TableCell>
              <TableCell align="right">Remaining Balance ({currency})</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.month}>
                  <TableCell component="th" scope="row">
                    {row.month}
                  </TableCell>
                  <TableCell align="right">
                    {convertCurrency(row.payment, 'USD', currency).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {convertCurrency(row.principal, 'USD', currency).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {convertCurrency(row.interest, 'USD', currency).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {convertCurrency(row.balance, 'USD', currency).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={schedule.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AmortizationTable;
