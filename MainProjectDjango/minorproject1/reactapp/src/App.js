import React from 'react';
import Navbar from './Navbar';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@material-ui/core';
import Header from "./Header";
import Content from "./Content";

export default function App() {
  return (
    /*<Grid container direction="column">    
    	<Grid item>
    		<Header/>
    	</Grid>
    	<Grid item container>
    		<Grid item xs={0} sm={2}/>
    		<Grid item xs={12} sm={8}>
    			<Content/>
    		</Grid>
    		<Grid item xs={0} sm={2}/>
    	</Grid>
    </Grid>*/
    
    <Navbar />
  );
}