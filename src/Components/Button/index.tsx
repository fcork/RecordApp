import * as React from 'react';
import TextField from '@mui/material/TextField'
// import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import InputAdornment from '@mui/material/InputAdornment';


const CustomButton = (props: any) => {
  const { buttonText } = props
  return (
    <Button
      style={{ padding: '16px', borderRadius: '8px' }}
      variant="contained"
      color="secondary"
      fullWidth
      startIcon={<FilterAltOutlinedIcon />}
    >
      {buttonText}
    </Button>

  )
}

export default CustomButton