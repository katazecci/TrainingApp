import './App.css'
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CustomerList from './components/customers';
import TrainingList from './components/trainings';
import Button from '@mui/material/Button';

function App() {
  const [page, setPage] = useState('trainings');

  useEffect(() => {
    if (page === 'trainings') {
      document.title = 'Training List';
    } else if (page === 'customers') {
      document.title = 'Customer List';
    }
  }, [page]);

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              TrainingApp
            </Typography>
            <Button sx={{color: 'white'}} onClick={() => setPage('trainings')}>
              Trainings
            </Button>
            <Button sx={{color: 'white'}} onClick={() => setPage('customers')}>
              Customers
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {page === 'trainings' ? <TrainingList /> : <CustomerList />}
    </div>
  );  
}

export default App;
