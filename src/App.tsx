import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
// import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import SearchBox from './Components/SearchBox'
import CustomButton from './Components/Button/index';
import Grid from '@mui/material/Grid'
import List from './Components/List';
import GridView from './Components/GridView';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{
        my: 4,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Typography style={{ fontSize: '2.5rem', fontWeight: '1000', lineHeight: '20px' }} gutterBottom>
          Franks Albums
        </Typography>
        {/* <ProTip /> */}
        {/* <Copyright /> */}

      </Box>
      <Grid
        container
        spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12}>
          <SearchBox />
        </Grid>
        <Grid item>
          <CustomButton buttonText="Filter" />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <GridView />
        </Grid>
        <Grid item>
          <List />
        </Grid>
      </Grid>

    </Container>
  );
}
