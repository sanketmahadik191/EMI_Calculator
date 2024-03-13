import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const [tenure, setTenure] = React.useState('');

  const handleChange = (event) => {
    setTenure(event.target.value);
    props.setTenurePrent(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tenure}
          label="Select Tenure"
          onChange={handleChange}
        >
          <MenuItem value={2}>Two Year</MenuItem>
          <MenuItem value={5}>Five Year</MenuItem>
          <MenuItem value={10}>Ten year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}