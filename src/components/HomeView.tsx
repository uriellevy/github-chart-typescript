import React, { Component } from 'react'
import Chart from './Chart'
import Header from './Header'
import './HomeView.scss'

export default class HomeView extends Component {
  render() {
   
    return (
      
      <div className='homeview-wrapper'>
        <Header/>
        <Chart/>
      </div>
    )
  }
}
