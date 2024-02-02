import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function App() {
  const [names, setNames] = useState('');
  const [selectedName, setSelectedName] = useState('');

  const handleNameChange = (event) => {
    setNames(event.target.value);
  };

  const handleChoose = () => {
    const nameList = names.split(',').map(name => name.trim()).filter(name => name !== '');
    if (nameList.length > 0) {
      const randomIndex = Math.floor(Math.random() * nameList.length);
      setSelectedName(nameList[randomIndex]);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Lunch Decider
      </Typography>
      <TextField
        label="Enter names separated by commas"
        fullWidth
        margin="normal"
        value={names}
        onChange={handleNameChange}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleChoose}
        style={{ margin: '20px 0' }}
      >
        Choose Random Person
      </Button>
      {selectedName && (
        <Typography variant="h5">
          {selectedName} gets to choose the restaurant!
        </Typography>
      )}
    </Container>
  );
}

export default App;
