import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, FormControl} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckBox from '@material-ui/core/Checkbox'
import { useState } from 'react';
import { FormControlLabel } from '@material-ui/core';
import {TextField} from '@material-ui/core'

import {makeStyles, ThemeProvider, createTheme} from '@material-ui/core/styles'
import { orange,green } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';


const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg,#333, #155)',
    border:0,
    marginBottom:15,
    borderRadius:15,
    color:'white',
    padding:'5px 30px'
  }
})

const theme = createTheme({
  typography:{
    h3:{
      fontSize:32,
      marginBottom:5,
    }
  },
  palette: {
    primary:{
      main: green[500]
    },
    secondary:{
      main:orange[500]
    },
  }
})

function ButtonStyled() {
  const classes = useStyles()
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckBoxExample(){
  const[defaultChecked,setDefaultChecked] = useState(true)
  return(
    <FormControlLabel
      control={<CheckBox
       defaultChecked
       icon={<DeleteIcon />}
       checkedIcon={<SaveIcon/>}
       onChange={(e)=>setDefaultChecked(!e.target.value)}
       inputProps={{
         'aria-label': 'secondary checkbox'
       }}
      />}
      label='Testing Checkbox'
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
    <div className="App">
      <header className="App-header">
        <AppBar>
          <Toolbar>
            <IconButton>
              <Menu />
            </IconButton>
            <Typography variant='h6'>
              MUI Theming
            </Typography>
            <Button>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Typography variant='h3' component='div'>
          Welcome to MUI
        </Typography>
        <Typography variant='subtitle1'>
          Learn how to use Material UI
        </Typography>
        <ButtonStyled/>
       
       <Grid container spacing={3} justify='center'>
       <Grid item xs={3} sm={6} md={9}>
         <Paper style={{ height:75, width:'100%', }}/>
       </Grid>
       <Grid item xs={3} sm={6} md={9}>
         <Paper style={{ height:75, width:'100%', }}/>
       </Grid>
       <Grid item xs={3} sm={6} md={9}>
         <Paper style={{ height:75, width:'100%', }}/>
       </Grid>
       </Grid>

        <CheckBoxExample/>
        <ButtonGroup variant='contained' size='medium'>
        <Button
         startIcon={<SaveIcon/>} 
         color='primary'
         >
          save
        </Button>
        <Button
         startIcon={<DeleteIcon/>} 
         color='secondary'
         >
          discard
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
