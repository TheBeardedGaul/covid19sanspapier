import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={3} className="Paper">
          <h1>Attestation de déplacement dérogatoire</h1>
          <p>
            En application de l'article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
          </p>
        </Paper>
        <Paper elevation={3} className="Paper">
          <form >
            <p className="FormDetail">
              <ListItem>
                Je soussigné(e)
               </ListItem> 
              <ListItem>
                <TextField id="standard-basic" label="Mme / M." />
              </ListItem>
              <ListItem>
                <TextField id="standard-basic" label="Né(e) le" />
              </ListItem>
              <ListItem>
                <TextField id="standard-basic" label="Demeurant" />
              </ListItem>
            </p>
          </form>
        </Paper>
      </header>
    </div>
  );
}

export default App;
