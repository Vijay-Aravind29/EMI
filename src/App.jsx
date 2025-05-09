import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { AppProvider } from './EMI/ContextAPI/AppContext';
import { ThemeProvider as CustomThemeProvider } from './EMI/ContextAPI/ThemeContext';
import Layout from './EMI/Components/Layout';
import Calculator from './EMI/Pages/Calculator';
import ExchangeRates from './EMI/Pages/ExchangeRate';
import About from './EMI/Pages/About';
import NotFoundPage from './EMI/Components/NotFoundPage';
import ErrorBoundary from './EMI/Components/ErrorBoundary';

function App() {
  return (
    <Router>
      <CustomThemeProvider>
        {({ theme }) => (
          <MuiThemeProvider theme={theme}>
            <AppProvider>
              <Layout>
                <ErrorBoundary>
                  <Routes>
                    <Route path="/" element={<Calculator />} />
                    <Route path="/rates" element={<ExchangeRates />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </ErrorBoundary>
              </Layout>
            </AppProvider>
          </MuiThemeProvider>
        )}
      </CustomThemeProvider>
    </Router>
  );
}

export default App;