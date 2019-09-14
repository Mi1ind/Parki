import React, { Component } from 'react';
import './App.css';


export default class ToDoItem extends Component {

  // Properties used by this component:
  // title, dist7, visualStateIndex

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  // --- Functions for component state index 0 (1 of 2) --- 
  
  renderState0() {
    const style_state0_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_state0_elBackground_outer = {
      backgroundColor: 'rgba(0, 179, 0, 0.6539)',
     };
    const style_state0_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_text = this.props.title;
    
    const style_state0_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'right',
     };
    
    const value_textCopy = this.props.dist7;
    
    
    return (
      <div className="ToDoItem">
        <div className="background">
          <div className='containerMinHeight state0_elBackground' style={style_state0_elBackground_outer}>
            <div className="" style={style_state0_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow">
          <div className='state0_elText'>
            <div className="baseFont" style={style_state0_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.listitem1_text_415132}</span>)}</div>
            </div>
          </div>
          
          <div className='state0_elTextCopy'>
            <div className="baseFont" style={style_state0_elTextCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.todoitem_text_700045}</span>)}</div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
  // --- Functions for component state index 1 (2 of 2) --- 
  
  renderState1() {
    
    return (
      <div className="ToDoItem">
      </div>
    )
  }
  
  
  render() {
    switch (parseInt((this.state && this.state.visualStateIndexOverride !== undefined) ? this.state.visualStateIndexOverride : this.props.visualStateIndex, 10)) {
      default:
      case 0:
        return this.renderState0();
      case 1:
        return this.renderState1();
    }
  }
  

}
