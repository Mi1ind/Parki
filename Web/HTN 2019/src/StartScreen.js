import React, { Component } from 'react';
import './App.css';
import ToDoItem from './ToDoItem';


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
    
    const dataSheet_sheet2 = this.props.dataSheets['sheet2'];
    const style_elBackground = {
      width: '100%',
      height: '100%',
     };
    const style_elBackground_outer = {
      backgroundColor: '#f6f6f6',
     };
    const style_elText = {
      color: 'rgba(0, 0, 0, 0.8500)',
      textAlign: 'left',
     };
    const style_elList = {
      height: 'auto',  // This element is in scroll flow
     };
    
    // Source items and any special components used for list/grid element 'list'.
    let items_list = [];
    let listComps_list = {};
    let filterItems_list = items => {
      // This function filters items for the List / Grid element.
      // There is a variable named 'items' that provides item values.
      
      let filteredItems = [];
      let filterStr=this.props.appActions.dataSlots['ds_filter']; // Data slot value
      filterStr=filterStr.toLowerCase(); // Lowercase the filter string
      
      // Loop through all items and add item to new array if item includes filter string
      items.forEach(item => {;
      if (item['todo'].toLowerCase().includes(filterStr)) {
      filteredItems.push(item);
      }
      });
      items=filteredItems; 
      return items;
    }
    items_list = items_list.concat(filterItems_list(this.props.appActions.getDataSheet('sheet2').items));
    
    
    return (
      <div className="AppScreen StartScreen" style={baseStyle}>
        <div className="background">
          <div className='containerMinHeight elBackground' style={style_elBackground_outer}>
            <div className="appBg" style={style_elBackground} />
          </div>
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className='elText'>
            <div className="headlineFont" style={style_elText}>
              <div>{this.props.locStrings.start_text_511914}</div>
            </div>
          </div>
          
          <div className='hasNestedComps elList'>
            <ul className="" style={style_elList}>
              {items_list.map((row, index) => {
                let itemComp = (row._componentId) ? listComps_list[row._componentId] : <ToDoItem dataSheetId={'sheet2'} dataSheetRow={row} {...{ 'title': row['title'], 'dist7': row['dist7'], }} appActions={this.props.appActions} deviceInfo={this.props.deviceInfo} locStrings={this.props.locStrings} />;
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
