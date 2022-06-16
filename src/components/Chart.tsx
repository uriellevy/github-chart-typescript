import React, { Component } from 'react'
import dates from '../data';

export default class Chart extends Component {
  render() {
    const startDate = new Date("2019-01-07T00:32:00.649Z");
    const endDate = new Date("2020-01-06T03:52:39.016Z");
    let dt = new Date("2019-01-07T00:32:00.649Z");
    const datesOfFuLLYear = [];
    while(dt <= endDate) {
      datesOfFuLLYear.push(new Date(dt).toISOString());
      dt.setDate(dt.getDate() + 1)
    }
    console.log(datesOfFuLLYear)
    return (
      <div>Chart</div>
    )
  }
}
