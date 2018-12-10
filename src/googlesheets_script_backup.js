var secret = "hIWoO0eblTvhgViejkxFnHb5R8DYlBhVqr8JEVjA";

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var lastRangeLetter;

function addTitleRow(userdata) {
  var firstKey = Object.keys(userdata)[0];
  var value = userdata[firstKey];
  var titleArr = [];

  //MAP OUT KEYS AND ADD TO FIRST ROW
  Object.keys(value).forEach(function(key, index) {
    titleArr.push(key);

    if (titleArr.length === Object.keys(value).length) {
      // calculate range
      Logger.log(titleArr);
      Logger.log(titleArr.length);

      lastRangeLetter = String.fromCharCode(titleArr.length + 64);
      var values = [titleArr];
      var totalRange = "A1:" + lastRangeLetter + "1";
      var range = sheet.getRange(totalRange);
      range.setValues(values);
    }
  });
}

function updateRows(userdata) {
  addTitleRow(userdata);
  var counter = 2;

  Object.keys(userdata).forEach(function(key, index) {
    var value = userdata[key];
    // the first array that we will push all values to
    var valuesPrimary = [];
    // multi dimensional array we will use to push data to sheet
    var valuesFinal;

    Object.keys(value).forEach(function(key, index) {
      if (typeof value[key] === "object") {
        // validate for arrays
        var toPush = value[key].join(", ");
        valuesPrimary.push(toPush);
      } else {
        valuesPrimary.push(value[key]);
      }

      if (valuesPrimary.length === Object.keys(value).length) {
        valuesFinal = [valuesPrimary];

        if (valuesPrimary.length > 0) {
          Logger.log(valuesPrimary.length);

          var totalRange = "A" + counter + ":" + lastRangeLetter + counter;
          Logger.log(totalRange);
          var range = sheet.getRange(totalRange);
          range.setValues(valuesFinal);
        }
      }
    });

    counter++;
  });
}

function getAllData() {
  var firebaseUrl = "https://climate-resolve.firebaseio.com/";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
  var data = base.getData();

  updateRows(data.userdata);

  for (var i in data) {
    Logger.log(data[i].firstName + " " + data[i].lastName);
  }
}
