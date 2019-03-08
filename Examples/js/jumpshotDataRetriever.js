
(function () {

  var fileNames = ["exampleJanuary.tsv", "exampleFebruary.tsv"];

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

    var tableData = dataAsJson;
    // let tableData = getConversionData();
     table.appendRows(tableData);
     doneCallback();
  };

  myConnector.getFileNames = function() {
    return fileNames
  }
    tableau.registerConnector(myConnector);
})();


$(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "JS Data Feed";
        tableau.submit();
    });
});

$(document).ready(function() {
  // $("#fileNameRetriever").click(function() {
  //   var fileNames = fileNames();
  //
  // })
  var fileNames = ["exampleJanuary.tsv", "exampleFebruary.tsv"];
  $.each(fileNames, function(name) {
    $('#data-file-selector').append($("<option></option>")
                            .attr("value", name)
                            .text(name)
                          );
  });
});
