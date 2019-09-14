import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_toDoItems extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['todo'] = "Buy a new house";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['todo'] = "Buy food";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['todo'] = "Change sheets";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['todo'] = "Argue on the Internet";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['todo'] = "Eat - Sleep - Repeat";
    item.key = key++;
  }

}
