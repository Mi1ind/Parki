import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_sheet1 extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  //window.onload = function {


  
   const userAction = async () => {
    const response = await fetch('http://example."https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBYLKtlFWcErQTNylqGs4xrFYkW4ksn98Q"
   , {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
   }
  
      

      
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }






   
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
  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Google Sheets'.
    
    item = {};
    this.items.push(item);
    item['lat1'] = "45.268573";
    item['dist7'] = "1.57";
    item['id'] = "0";
    item['long1'] = "-75.743798";
    item['title'] = "Parking 1";
    item['description'] = "";
    item['url'] = "https://www.google.ca/maps/place/University+of+Waterloo/@43.4722854,-80.5470463";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = " ";
    item['dist7'] = "";
    item['id'] = "1";
    item['long1'] = "";
    item['title'] = "Parking 2";
    item['description'] = "";
    item['url'] = "https://www.google.ca/maps/place/University+of+Waterloo/@43.4722854,-80.5470463";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = " ";
    item['dist7'] = "";
    item['id'] = "2";
    item['long1'] = "";
    item['title'] = "Parking 3";
    item['description'] = "";
    item['url'] = "https://www.google.ca/maps/search/McMaster+University/@43.26298,-79.9229437,17z/data=!3m1!4b1";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = " ";
    item['dist7'] = "";
    item['id'] = "3";
    item['long1'] = "";
    item['title'] = "Parking 4";
    item['description'] = "";
    item['url'] = "https://www.google.ca/maps/place/University+of+Waterloo/@43.4722854,-80.5470463";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = " ";
    item['dist7'] = "";
    item['id'] = "4";
    item['long1'] = "";
    item['title'] = "Parking 5";
    item['description'] = "";
    item['url'] = "https://www.google.ca/maps/place/University+of+Waterloo/@43.4722854,-80.5470463";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = " ";
    item['dist7'] = "";
    item['id'] = "5";
    item['long1'] = "";
    item['title'] = "Parking 6";
    item['description'] = "";
    item['url'] = "https://www.google.ca/maps/place/University+of+Waterloo/@43.4722854,-80.5470463";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = " ";
    item['dist7'] = "";
    item['id'] = "6";
    item['long1'] = "";
    item['title'] = "Parking 7";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = "45.266985";
    item['dist7'] = "";
    item['id'] = "7";
    item['long1'] = "-75.728223";
    item['title'] = "My Location";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = "";
    item['dist7'] = "";
    item['id'] = "8";
    item['long1'] = "";
    item['title'] = "Parking 8";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = "";
    item['dist7'] = "";
    item['id'] = "9";
    item['long1'] = "";
    item['title'] = "Parking 9";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = "";
    item['dist7'] = "";
    item['id'] = "10";
    item['long1'] = "";
    item['title'] = "Parking 10";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = "";
    item['dist7'] = "";
    item['id'] = "11";
    item['long1'] = "";
    item['title'] = "Parking 11";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = "";
    item['dist7'] = "";
    item['id'] = "12";
    item['long1'] = "";
    item['title'] = "Parking 12";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['lat1'] = "";
    item['dist7'] = "";
    item['id'] = "13";
    item['long1'] = "";
    item['title'] = "Parking 13";
    item['description'] = "";
    item['url'] = "";
    item.key = key++;
  }

  
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  _makeUrl(options, subpath) {
    const baseUrl = "https://apibridge.neonto.com/api";
    let path = options.servicePath || '';
    if (path.length > 0 && path.substr(0, 1) !== '/' && baseUrl.substr(baseUrl.length - 1, 1) !== '/')
      path = '/'+path;
    
    return baseUrl + "/gsheet" + path + subpath;
  }
  
  addItem(item, options) {
    super.addItem(item, options);
    
    const url = this._makeUrl(options, "/rows");
    
    const fetchOpts = {
      method: 'POST',
    	body: JSON.stringify({row: item}),
    	headers: {
    	  'Content-Type': 'application/json',
    	}
    };
  
    fetch(url, fetchOpts)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server error: "+response.status);
        }
        return response.json();
      })
      .then((json) => {
    		console.log("gsheet data save complete");
        this._fetchComplete(null, options);
      })
      .catch((exc) => {
        this._fetchComplete(exc, options);
      });  
  }
  
  /*
  removeItem(item, options) {
    super.removeItem(item, options);
    
    this._fetchComplete(null, options);
  }
  
  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    this._fetchComplete(null, options);
  }
  */
}
