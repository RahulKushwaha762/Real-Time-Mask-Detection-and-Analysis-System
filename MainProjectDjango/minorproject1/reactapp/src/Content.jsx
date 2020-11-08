import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BasicCard from "./BasicCard";
import ChartCard from "./ChartCard";
import { Grid } from '@material-ui/core';

var Chartist = require("chartist");

  

const weeklyVisitChart = {
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[122, 117, 67, 17, 243, 218, 538]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 600, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
 };

 const maskData = {
 	data: {
    labels: ["Masked","Unmasked"],
    series: [538,97]
  },
  options: {
  	donut:true,
  	donutWidth: 20,
  	startAngle:270,
  	labelDirection:'explode'
  }
 };

const Content = (props) => {
	return (
		<Grid container spacing={4}>
			<Grid item xs={12} sm={4}>
				<BasicCard 
				title={"Visits"} 
				subtitle={"Monday, 6th October"}
				number={props.visits}
				description="12% more visits than yesterday"/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<BasicCard 
				title={"People with Mask"} 
				subtitle={"23rd Sept - 3rd Oct"}
				number={props.withMask}
				description="47% increase than the previous week"/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<BasicCard 
				title={"People with No Mask"} 
				subtitle={"1st Sept - 30th Sept"}
				number={props.noMask}
				description="Moderately Crowded"/>
			</Grid>
			
			<Grid item xs={12} sm={4}>
				<ChartCard 
				title={"Day wise having no mask"} 
				subtitle={"Week Days"}
				number={props.visits}
				description="Moderately Crowded"
				data={props.weeklyVisitChart.data}
				options={props.weeklyVisitChart.options}
				type={"Line"}/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<ChartCard 
				title={"Ratio"} 
				subtitle={"Mask vs No Mask Overall"}
				number={props.visits}
				description="Moderately Crowded"
				data={props.maskdata.data}
				options={maskData.options}
				type={"Pie"}/>
			</Grid>
			<Grid item xs={12} sm={4}>
				<ChartCard 
				title={"Day wise having no mask"} 
				subtitle={"Week days"}
				number={props.visit}
				description="Moderately Crowded"
				data={props.weeklyVisitChart.data}
				options={props.weeklyVisitChart.options}
				type={"Bar"}/>
			</Grid>
		
		</Grid>
			
		);
};

export default Content;