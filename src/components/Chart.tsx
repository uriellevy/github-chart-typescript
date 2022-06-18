import React, { Component } from 'react'
import dates from '../data';
import ChartItem from './ChartItem';
import "./Chart.scss";


export default class Chart extends Component {
  
  render() {
    const datesObject:{ [key: string]: number } = {};
    const dateHandler = () => {
      const startDate = new Date("2019-01-07T00:32:00.649Z");
      const endDate = new Date("2020-01-06T03:52:39.016Z");
      while(startDate <= endDate) {
        datesObject[startDate.toLocaleDateString()] = 0;
        startDate.setDate(startDate.getDate() + 1)
       }
     console.log(typeof new Date(dates[0]).toLocaleDateString())
     for (let date of dates) {
       if (datesObject[new Date(date).toLocaleDateString()] === 0) {
        datesObject[new Date(date).toLocaleDateString()] = 1
       } else datesObject[new Date(date).toLocaleDateString()] += 1;
     }
  }
  dateHandler();
  console.log(datesObject)
    return (
      <ul className='chart-container'>
          {/* {datesOfFuLLYear.map((date, idx) => (
            <ChartItem date={date} key={idx}/>
          ))} */}
      </ul>
    )
  }
}
