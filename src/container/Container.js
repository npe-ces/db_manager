import React, { Component } from 'react'

import Header from '../component/dbContainer/Header';
import View from '../component/dbContainer/View';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class Container extends Component {

    

  render() {
    return (
    <div className="container">
        <Header/>
        <View/>
    </div>
    )
  }
}
export default Container;