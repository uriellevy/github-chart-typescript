import React, { Component } from 'react';
import './Header.scss';
import consts from '../consts';
export default class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        <h1>{consts.HEADER}</h1>
      </div>
    )
  }
}
