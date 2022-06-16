import React, { Component } from 'react'
import "./ChartItem.scss"
import data from "../data";

interface ChartItemProps {
    date: string
}

export default class ChartItem extends Component<ChartItemProps, {}> {

  render() {
    //   console.log(data)
      const {date} = this.props;
    return (
      <li className='chart-item-wrapper'></li>
    )
  }
}
