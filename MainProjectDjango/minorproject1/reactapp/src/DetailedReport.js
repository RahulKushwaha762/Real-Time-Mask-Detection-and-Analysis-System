import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from "./Header";
import Content from "./Content";
import {useState} from "react";

var Chartist = require("chartist");



const loadingMessage = () => {
  return (
    1 && (
        <div className="alert alert-info">
            <h2>Calculating... Have Patience !</h2>
        </div>
    )
  );
};
class Detail extends Component {
  state = {
    todos: [],
    lengths:0,
    withmaskvisits : 0,
    withoutmaskvisits:0,
    monday:0,
    t:0,
    w:0,
    th:0,
    f:0,
    s:0,
    su:0,
    loading:0,
    low:0,
    medium:0,
    high:0,

  };/*    This is where the magic happens*/
    async componentDidMount() {
     
    try {
     
      const v = 0;
      const res = await fetch('http://127.0.0.1:8000/api'); // fetching the data from api, before the page loaded
      const todos = await res.json();
      
      this.setState({
        todos
      });
      this.state.todos.map((item) => {
        if(item.with_mask==1)
      {
          console.log(item.with_mask);
          this.setState({
            withmaskvisits :this.state.withmaskvisits + 1
          });
      }
      else{
        this.setState({
          withoutmaskvisits :this.state.withoutmaskvisits + 1
        });
      }
      console.log(item.age);
      if(item.age=='Medium')
      {
        this.setState({
          medium :this.state.medium + 1
        });
      }
      else if(item.age=='Low')
      {
        this.setState({
          low :this.state.low + 1
        });
      }
      else if(item.age=='High')
      {
        this.setState({
          high :this.state.high + 1
        });
      }
      if(item.day_week=='Monday' )
      {
        if(item.with_mask==0)
        {
          this.setState({
            monday: this.state.monday + 1
          });
        }
       
      }
      else if(item.day_week=='Tuesday')
      {
        if(item.with_mask==0)
        {
          this.setState({
            t: this.state.t + 1
          });
        }
      }
      else if(item.day_week=='Wednesday')
      {
        if(item.with_mask==0)
        {
          this.setState({
            w: this.state.w + 1
          });
        }
      }
      else if(item.day_week=='Thursday')
      {
        if(item.with_mask==0)
        {
          this.setState({
            th: this.state.th + 1
          });
        }
      }
      else if(item.day_week=='Friday')
      {
        if(item.with_mask==0)
        {
          this.setState({
            f: this.state.f + 1
          });
        }
      }
      else if(item.day_week=='Saturday')
      {
        if(item.with_mask==0)
        {
          this.setState({
            s: this.state.s + 1
          });
        }
      }
      else if(item.day_week=='Sunday')
      {
        if(item.with_mask==0)
        {
          this.setState({
            su: this.state.su + 1
          });
        }
      }
      this.state.loading = 1;
    
    }
      );

      
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    
    const visits = this.state.todos.length;
    const withMask = this.state.withmaskvisits;
    const noMask = this.state.withoutmaskvisits;
    const mon = this.state.monday;
    const loading = this.state.loading;
    console.log(this.state.withmaskvisits)
    const weeklyVisitChart = {
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        series: [[mon, this.state.t, this.state.w, this.state.th, this.state.f, this.state.s, this.state.su]]
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
       series: [withMask,noMask]
     },
     options: {
       donut:true,
       donutWidth: 20,
       startAngle:270,
       labelDirection:'explode'
     }
    };
    const ageGroup = {
      data: {
       labels: ["Low","Medium","High"],
       series: [this.state.low,this.state.medium,this.state.high]
     },
     options: {
       donut:true,
       donutWidth: 20,
       startAngle:270,
       labelDirection:'explode'
     }
    };
    
    return (
      /*
      <div>
        hello
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.day_week}</h1>
          </div>
        ))}
      </div>
     */
     
      <Grid container direction="column">    
      <Grid item>
        <Header/>
        {(this.state.loading) ?  null: loadingMessage() }
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content visits={visits} withMask={withMask} noMask = {noMask} maskdata = {maskData} ageGroup = {ageGroup} weeklyVisitChart = {weeklyVisitChart} />
        </Grid>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={0} sm={2}/>
        
      </Grid>
    </Grid>
    
    );
  }
}

export default Detail;