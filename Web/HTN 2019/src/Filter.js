import React, { Component } from 'react';
import './App.css';


export default class Filter extends Component {

  // This component doesn't use any properties

  constructor(props) {
    super(props);
    
    this.state = {
      field: '',
    };
  }

  textInputChanged_field = (event) => {
    this.setState({field: event.target.value});
    this.props.appActions.updateDataSlot("ds_filter", event.target.value);
  }
  
  render() {
    const style_elField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      pointerEvents: 'auto',
     };
    
    
    return (
      <div className="Filter appBg">
        <div className="layoutFlow">
          <div className='elField'>
            <input className="baseFont" style={style_elField} type="text" placeholder={this.props.locStrings.filter_field_973646} onChange={this.textInputChanged_field} value={this.state.field}  />
          </div>
        </div>
        
      </div>
    )
  }
  

}
