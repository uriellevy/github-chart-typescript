import React, { Component } from 'react'
import dates from '../data';
import ChartItem from './ChartItem';
import "./Chart.scss";


export default class Chart extends Component {
    state = {
        hover: false,
    }
  render() {
    const startDate = new Date("2019-01-07T00:32:00.649Z");
    const endDate = new Date("2020-01-06T03:52:39.016Z");
    const datesOfFuLLYear = [];
    while(startDate <= endDate) {
      datesOfFuLLYear.push(new Date(startDate).toISOString());
      startDate.setDate(startDate.getDate() + 1)
    }
    const d = new Date("2019-01-07T00:32:00.649Z").toLocaleDateString();
    console.log(d);
    
    return (
      <ul className='chart-container'>
          {datesOfFuLLYear.map((date, idx) => (
            <ChartItem date={date} key={idx}/>
          ))}
      </ul>
    )
  }
}
