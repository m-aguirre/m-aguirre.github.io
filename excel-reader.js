//convertExcel = require('excel-as-json').processFile;
//node_xj = require("xls-to-json");

//let file = convertExcel('js-insights.xlsx');

//console.log(file);

const excelToJson = require('convert-excel-to-json');
const getConversionData = () => {
  const result = excelToJson({
    sourceFile: 'js-insights.xlsx'
  });

  let comp = result['Competitive Landscape - Domain'];

  console.log(comp)
  let dates = [];
  let id = 0;
  for (let i = 0; i < comp.length; i++) {
    let entry = {};

    let date = new Date(comp[i]['B'])
    if (isNaN(date.getTime())) { //skips invalid date formats
      continue;
    } else {
      //console.log(date);
      entry.id = id++;
      entry.start = comp[i]['B'];
      entry.conversions = comp[i]['C'];
      entry.end = comp[i]['E'];
      entry.percent = comp[i]['F'];
      dates.push(entry);
    }
  }
  return dates;
}

let dates = getConversionData();
console.log(dates);



// myConnector.getSchema = function(schemaCallback) {
//
//   let cols = [{
//     id: 'id',
//     dataType: tableau.dataTypeEnum.string
//   }, {
//     id: 'start',
//     alias: 'start-date',
//     dataType: tableau.dataTypeEnum.string
//   }, {
//     id: 'conversions',
//     alias: 'conversions',
//     dataType: tableau.dataTypeEnum.string
//   }, {
//     id: 'end',
//     alias: 'end-date',
//     dataType: tableau.dataTypeEnum.string
//   } , {
//     id: 'percent',
//     alias: 'percentage',
//     dataType: tableau.dataTypeEnum.string
//   }];
//
//   let tableSchema = {
//     id: 'conversionFeed',
//     alias: 'Feed of Nike conversions in one week',
//     columns: cols
//   }
//
//   schemaCallback([tableSchema]);
// }


// let tableData = getConversionData();
// table.appendRows(tableData);
// console.log(tableData);
// doneCallback();



// jumpshot url: 
//https://insights.jumpshot.com/api/export/online?from=2019-02-25&to=2019-03-03&domains=nike.com&country=US&competitiveKind=domain&cohort=productviewer
