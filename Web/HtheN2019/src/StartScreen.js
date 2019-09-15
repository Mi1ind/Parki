import React, { Component } from 'react';
import './App.css';
import Component1 from './Component1';


export default class StartScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
    };
  }

  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const dataSheet_sheet1 = this.props.dataSheets['sheet1'];
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      fontSize: 15.2,
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    items_list = items_list.concat(this.props.appActions.getDataSheet('sheet1').items);
    
    
    const userAction = async () => {
      const response = await fetch('http://example."https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBYLKtlFWcErQTNylqGs4xrFYkW4ksn98Q"
     , {
        method: 'POST',
        body: myBody, // string or object
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      // do something with myJson
    }





   /*   
   if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
    else
    console.log("geolocation is not supported");
}

function showposition(position) 
{
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
}
*/
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className="systemFontBold" style={style_elText}>
              <div>{this.props.locStrings.start_text_634204}</div>
            </div>
          </div>
          
          <div className='hasNestedComps elList'>
            <ul className="" style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <Component1 dataSheetId={'sheet1'} dataSheetRow={row} {...{ 'title': row['title'], 'dist7': row['dist7'], 'url': row['url'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
                return (<li key={row.key}>{itemComp}</li>)
              })}
              <div ref={(el)=> this._elList_endMarker = el} />
            </ul>
          </div>
        </div>
        
      </div>
    )
  }
  

}
