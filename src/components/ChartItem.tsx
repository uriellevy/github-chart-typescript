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

  handleHover = (id: number) => {
    this.props.onMouseEnterHandler(id);
  }

  render() {
    const {dateItem, id, onMouseEnterHandler, onMouseLeaveHandler, itemHover} = this.props;
    const itemColor = dateItem[1] === 0 ? 'zero-contributions' : dateItem[1] > 0 && dateItem[1] < 4 ? 'light-color' : dateItem[1] > 3 && dateItem[1] < 8 ? 'medium-color' : dateItem[1] > 7 && 'heavy-color';
    // console.log(data.findIndex(arr => arr.indexOf("2019-01-11T06:59:52.386Z")))
    console.log(dateItem)
    return (
      <>
      <li className={`chart-item-wrapper ${itemColor}`} onMouseEnter={() => onMouseEnterHandler(id)} onMouseLeave={() => this.handleHover(id)}></li>
      {itemHover && <div>
        </div>}
      
      </>
    )
  }
}
