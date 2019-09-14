import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

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
    item['key'] = "start_text_512359";
    item['en'] = "(ToDo item)";
    
    item = {};
    this.items.push(item);
    item['key'] = "listitem1_text_415132";
    item['en'] = "(ToDo item)";
    
    item = {};
    this.items.push(item);
    item['key'] = "filter_field_973646";
    item['en'] = "Filter";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text_511914";
    item['en'] = "Car Park";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_text2_567940";
    item['en'] = "New text. Double-click to edit";
    
    item = {};
    this.items.push(item);
    item['key'] = "todoitem_text_700045";
    item['en'] = "(ToDo item)";
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
