import React, { Component } from 'react';
import './App.css';


export default class Component1 extends Component {

  // Properties used by this component:
  // title, dist7, url

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  onClick_elHotspot = (ev) => {
    window.open(this.props.url, '_blank');
  
  }
  
  
  render() {
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: 'rgba(0, 175, 0, 0.6500)',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    
    const value_text = this.props.title;
    
    const style_elTextCopy = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'right',
     };
    
    const value_textCopy = this.props.dist7;
    
    const style_elHotspot = {
      display: 'block',
      textTransform: 'uppercase',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="Component1">
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className="" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow">
          <div className='elText'>
            <div className="baseFont" style={style_elText}>
              <div>{value_text !== undefined ? value_text : (<span className="propValueMissing">{this.props.locStrings.component1_text_775500}</span>)}</div>
            </div>
          </div>
          
          <div className='elTextCopy'>
            <div className="baseFont" style={style_elTextCopy}>
              <div>{value_textCopy !== undefined ? value_textCopy : (<span className="propValueMissing">{this.props.locStrings.component1_text_70700}</span>)}</div>
            </div>
          </div>
          
          <div className='elHotspot'>
            <div className="actionFont" style={style_elHotspot} onClick={this.onClick_elHotspot}  />
          </div>
        </div>
        
      </div>
    )
  }
  

}
