// (function() {
//     // Create the connector object
//     var myConnector = tableau.makeConnector();
//
//     // Define the schema
//     myConnector.getSchema = function(schemaCallback) {
//         var cols = [{
//             id: "id",
//             dataType: tableau.dataTypeEnum.string
//         }, {
//             id: "mag",
//             alias: "magnitude",
//             dataType: tableau.dataTypeEnum.float
//         }, {
//             id: "title",
//             alias: "title",
//             dataType: tableau.dataTypeEnum.string
//         }, {
//             id: "location",
//             dataType: tableau.dataTypeEnum.geometry
//         }];
//
//         var tableSchema = {
//             id: "earthquakeFeed",
//             alias: "Earthquakes with magnitude greater than 4.5 in the last seven days",
//             columns: cols
//         };
//
//         schemaCallback([tableSchema]);
//     };
//
//     // Download the data
//     myConnector.getData = function(table, doneCallback) {
//         $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function(resp) {
//             var feat = resp.features,
//                 tableData = [];
//
//             // Iterate over the JSON object
//             for (var i = 0, len = feat.length; i < len; i++) {
//                 tableData.push({
//                     "id": feat[i].id,
//                     "mag": feat[i].properties.mag,
//                     "title": feat[i].properties.title,
//                     "location": feat[i].geometry
//                 });
//             }
//
//             table.appendRows(tableData);
//             doneCallback();
//         });
//     };
//
//     tableau.registerConnector(myConnector);
//
//     // Create event listeners for when the user submits the form
//     $(document).ready(function() {
//         $("#submitButton").click(function() {
//             tableau.connectionName = "USGS Earthquake Feed"; // This will be the data source name in Tableau
//             setTimeout(function(){tableau.submit()},3000); // This sends the connector object to Tableau
//         });
//     });
// })();


(function () {
  //var excelToJson = require('convert-excel-to-json');

  var dataAsJson = [ { id: 0,
  start: 'Feb 25, 2019',
  conversions: 15172,
  end: 'Feb 25, 2019',
  percent: 1 },
{ id: 1,
  start: 'Feb 26, 2019',
  conversions: 10990,
  end: 'Feb 26, 2019',
  percent: 1 },
{ id: 2,
  start: 'Feb 27, 2019',
  conversions: 9824,
  end: 'Feb 27, 2019',
  percent: 1 },
{ id: 3,
  start: 'Feb 28, 2019',
  conversions: 10454,
  end: 'Feb 28, 2019',
  percent: 1 },
{ id: 4,
  start: 'Mar 1, 2019',
  conversions: 12698,
  end: 'Mar 1, 2019',
  percent: 1 },
{ id: 5,
  start: 'Mar 2, 2019',
  conversions: 12191,
  end: 'Mar 2, 2019',
  percent: 1 },
{ id: 6,
  start: 'Mar 3, 2019',
  conversions: 13483,
  end: 'Mar 3, 2019',
  percent: 1 } ];


    var myConnector = tableau.makeConnector();

  //   myConnector.getSchema = function (schemaCallback) {
  //     console.log('getSchema Called')
  //   var cols = [{
  //       id: "id",
  //       dataType: tableau.dataTypeEnum.string
  //   }, {
  //       id: "mag",
  //       alias: "magnitude",
  //       dataType: tableau.dataTypeEnum.float
  //   }, {
  //       id: "title",
  //       alias: "title",
  //       dataType: tableau.dataTypeEnum.string
  //   }, {
  //       id: "location",
  //       dataType: tableau.dataTypeEnum.geometry
  //   }];
  //
  //   var tableSchema = {
  //       id: "earthquakeFeed",
  //       alias: "Earthquakes with magnitude greater than 4.5 in the last seven days",
  //       columns: cols
  //   };
  //
  //   schemaCallback([tableSchema]);
  // };


  myConnector.getSchema = function(schemaCallback) {

    var cols = [{
      id: 'id',
      dataType: tableau.dataTypeEnum.string
    }, {
      id: 'start',
      alias: 'start-date',
      dataType: tableau.dataTypeEnum.string
    }, {
      id: 'conversions',
      alias: 'conversions',
      dataType: tableau.dataTypeEnum.string
    }, {
      id: 'end',
      alias: 'end-date',
      dataType: tableau.dataTypeEnum.string
    } , {
      id: 'percent',
      alias: 'percentage',
      dataType: tableau.dataTypeEnum.string
    }];

    var tableSchema = {
      id: 'conversionFeed',
      alias: 'Feed of Nike conversions in one week',
      columns: cols
    }

    schemaCallback([tableSchema]);
  }

myConnector.getData = function(table, doneCallback) {
  // $.getScript('excel-reader.js').done(function(script, textStatus) {
  //   console.log('getting script')
  //   let dat = getConversionData();
  //   console.log(dat);
  //
  // }).fail(function(jqxhr, settings, exception) {
  //   console.log('failure ', exception)
  //   $( "div.log" ).text( "Triggered ajaxError handler." );
  // })

// $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function(resp) {
//     console.log('getting json')
//     var feat = resp.features,
//         tableData = [];
//
//     // Iterate over the JSON object
//     for (var i = 0, len = feat.length; i < len; i++) {
//         tableData.push({
//             "id": feat[i].id,
//             "mag": feat[i].properties.mag,
//             "title": feat[i].properties.title,
//             "location": feat[i].geometry
//         });
//     }
//
//     table.appendRows(tableData);
//     doneCallback();
//     });
    var tableData = myConnector.getNikeData();
    // let tableData = getConversionData();
     table.appendRows(tableData);
     console.log(tableData);
     doneCallback();
  };

    tableau.registerConnector(myConnector);
})();


$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "USGS Earthquake Feed";
        tableau.submit();
    });
});
