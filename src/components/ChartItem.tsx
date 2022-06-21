import React, { Component } from 'react'
import "./ChartItem.scss"
import data from "../data";

interface ChartItemProps {
    dateItem: any[]
    id: number
    onMouseEnterHandler: (id: number) => void
    onMouseLeaveHandler: (id: number) => void
    itemHover: boolean
}



export default class ChartItem extends Component<ChartItemProps, {}> {

  render() {
    const {dateItem, id, onMouseEnterHandler, onMouseLeaveHandler, itemHover} = this.props;
    const itemColor = dateItem[1] === 0 ? 'zero-contributions' : dateItem[1] > 0 && dateItem[1] < 4 ? 'light-color' : dateItem[1] > 3 && dateItem[1] < 8 ? 'medium-color' : dateItem[1] > 7 && 'heavy-color';
    console.log((dateItem[0]))
    // console.log(data.indexOf)
    return (
      <>
      <li className={`chart-item-wrapper ${itemColor}`} onMouseEnter={() => onMouseEnterHandler(id)} onMouseLeave={() => onMouseLeaveHandler(id)}></li>
      {itemHover && <div>{id}</div>}
      
      </>
    )
  }
}
