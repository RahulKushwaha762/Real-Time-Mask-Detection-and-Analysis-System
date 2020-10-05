import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import ChartistGraph from "react-chartist";


const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ChartCard = (props) => {
	const classes = useStyles();
  	const bull = <span className={classes.bullet}>•</span>;
  	const {avatarSrc, title, subtitle, number, description, data, options, type} = props;
	return (
			<Card chart variant="outlined">
				<CardHeader color="success"
		        action={
		          <IconButton aria-label="settings">
		            <HelpIcon />
		          </IconButton>
		        }
		        title={title}
		        subheader={subtitle}
		      />
		      <ChartistGraph
                className="ct-chart"
                data={data}
                type={type}
                options={options}
              />
		      <CardContent>
		        <Typography variant="h5" component="h2">
		          {number}
		        </Typography>
		        <Typography className={classes.pos} variant="caption" color="textSecondary">
		          {description}
		        </Typography>
		      </CardContent>
		    </Card>
		);
};

export default ChartCard;