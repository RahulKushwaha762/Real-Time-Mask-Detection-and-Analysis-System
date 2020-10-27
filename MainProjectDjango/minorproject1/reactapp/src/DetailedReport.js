import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Header from "./Header";
import Content from "./Content";

class Detail extends Component {
  state = {
    todos: [],
    lengths:0,
    withmaskvisits : 0,
    withoutmaskvisits:0,

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
    console.log(this.state.withmaskvisits)
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
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={12} sm={8}>
          <Content visits={visits} withMask={withMask} noMask = {noMask} maskdata = {maskData} />
        </Grid>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={0} sm={2}/>
        <Grid item xs={0} sm={2}/>
      </Grid>
    </Grid>
    
    );
  }
}

export default Detail;