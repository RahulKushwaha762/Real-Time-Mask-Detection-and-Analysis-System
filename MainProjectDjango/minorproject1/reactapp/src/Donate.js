import React from 'react'
import Header from "./Header";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import BasicCard from "./BasicCard";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CheckList from "./assets/images/checklistBoard.png"
import health from './assets/images/goodHealth.png';
import corona from './assets/images/coronaVirus.png';

const TextTypography = withStyles({
    root: {
      backgroundColor: "#DAE0E2"
    }
  })(Typography);

  const RedTypography = withStyles({
    root: {
      color: "#FF362E"
    }
  })(Typography);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop:'100%'
    },
  });

export default function Donate() {
    const classes = useStyles();
    return (
        <>
         <Header />   
            <Typography style={{paddingTop:"10px"}} align='center' variant = 'h4'> DONATE BLOOD </Typography>
            <Typography style={{paddingTop:"10px"}} align='center' variant = 'h5'> Fully Recovered From COVID-19? </Typography> 
            <RedTypography style={{paddingTop:"10px"}} align='center' variant = 'h5'> Help Covid-19 Patients </RedTypography>
            <br style={{color:"pink"}} /> 
            <TextTypography style={{paddingLeft:"30px"}} align='left' variant='body1'><b> Are you fully recovered from a verified COVID-19 diagnosis? </b> </TextTypography>
            <TextTypography style={{paddingLeft:"30px", paddingRight:"20px"}} align='left' variant='body1'> If so, the plasma in your blood may contain COVID-19 antibodies that can attack the virus. This convalescent plasma is being evaluated as a possible treatment for currently ill COVID-19 patients, so your donation could help save the lives of patients battling this disease! It’s a special gift only those who have recovered from the virus can give, so sign up to help today.  </TextTypography>
            <Typography style={{paddingTop:"30px", padding:"30px"}} align='center' variant='h6'> You may qualify to donate plasma for coronavirus patients if you meet specific convalescent plasma and regular blood donation eligibility requirements:</Typography>
            <Grid container
  alignItems="center"
  justify="center" spacing={3}>
			    <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={`${CheckList}`}
                        title="Check First "
                        />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        You are at least 17 years old and weigh 110 lbs. Additional weight requirements apply for donors age 18 or younger.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={`${health}`}
                        title="Check Second "
                        />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        In good health. You generally feel well, even if you're being treated for a chronic condition.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={`${corona}`}
                        title="Check Third "
                        />
                        <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Have a prior, verified diagnosis of COVID-19, but are now symptom free.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}
