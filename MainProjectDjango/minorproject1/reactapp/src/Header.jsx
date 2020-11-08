import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
	const classes = useStyles();
	return (
			<AppBar position="static">
			  <Toolbar>
			    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
			      <MenuIcon />
			    </IconButton>
			    <Typography variant="h6" className={classes.title}>
			      COVID-19 Dashboard
			    </Typography>
			    <Button color="inherit" style={{textDecoration : "None"}} href="/">Home Page</Button>
			    <Button color="inherit" href="/detailedreport">Detailed Report</Button>
			    <Button color="inherit" href="/webcamlive" to="/webcamlive">Watch Live</Button>
				<Button color="inherit" href="/log" to="/log">Log</Button>
			    <Button color="inherit" href="/donate" to="/donate">Donate</Button>
			    <Button color="inherit" href="/help" to="/help">Help</Button>
			    <Button color="inherit">About</Button>
			    <Button color="inherit" href="/contact" to="/contact">Contact</Button>
			  </Toolbar>
			</AppBar>
		);
}

export default Header;