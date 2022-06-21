import React, { Component } from 'react'
import dates from '../data';
import ChartItem from './ChartItem';
import "./Chart.scss";

const datesObject:{ [key: string]: number } = {};

interface ChartState {
  hover: boolean
}

export default class Chart extends React.Component<{}, ChartState> {
  state = {
    hover: false,
  }
  dateHandler = () => {
   const startDate = new Date("2019-01-07T00:32:00.649Z");
   const endDate = new Date("2020-01-06T03:52:39.016Z");
   while(startDate <= endDate) {
     datesObject[startDate.toLocaleDateString()] = 0;
     startDate.setDate(startDate.getDate() + 1)
    }
   for (let date of dates) {
     if (datesObject[new Date(date).toLocaleDateString()] === 0) {
       datesObject[new Date(date).toLocaleDateString()] = 1
     } else datesObject[new Date(date).toLocaleDateString()] += 1;
   }
}
// componentDidMount() {
  //   this.dateHandler();
  // }
  onMouseEnterHandler = (id: number) => {
    this.setState({hover: true})
    // console.log(dates.findIndex((arr, idx) => idx === id)) 
    const hoverItem = new Date(dates[dates.findIndex((arr, idx) => idx === id)]).toLocaleDateString()
    // console.log(new Date(dates[dates.findIndex((arr, idx) => idx === id)]).toLocaleDateString() )
    return hoverItem

  }
  onMouseLeaveHandler = (id: number) => {
    this.setState({hover: false})
  }
  
  render() {
    this.dateHandler();
    const {hover} = this.state;
  // console.log(Object.entries(datesObject))
    return (
      <ul className='chart-container'>
          {Object.entries(datesObject).map((dateItem, idx) => (
            <ChartItem 
            key={idx} 
            dateItem={dateItem} 
            id={idx} 
            onMouseEnterHandler={this.onMouseEnterHandler}
            onMouseLeaveHandler={this.onMouseLeaveHandler}
            itemHover={hover}
            
            />
          ))}
      </ul>
    )
  }
}
