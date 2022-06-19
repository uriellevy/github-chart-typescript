import React, { Component } from 'react'
import "./ChartItem.scss"
import data from "../data";

interface ChartItemProps {
    dateItem: any[]
}



export default class ChartItem extends Component<ChartItemProps, {}> {

  render() {
    const {dateItem} = this.props;
    const itemColor = dateItem[1] === 0 ? 'zero-contributions' : dateItem[1] > 0 && dateItem[1] < 4 ? 'light-color' : dateItem[1] > 3 && dateItem[1] < 8 ? 'medium-color' : dateItem[1] > 7 && 'heavy-color';
    console.log(dateItem[1])
    return (
      <li className={`chart-item-wrapper ${itemColor}`}></li>
    )
  }
}
