import React, { Component } from 'react'

import Demoo from './Demoo'
import List from './List'
import Modalcard from './Modalcard'

export default class BaiTap extends Component {
  render() {
    return (
      <div>
        <button data-toggle="modal" data-target="#modelId" className='btn btn-danger'>Card</button>
        <List/>
        <Modalcard/>
        <Demoo/>
     
      </div>
    )
  }
}
