var secret = "hIWoO0eblTvhgViejkxFnHb5R8DYlBhVqr8JEVjA";

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];

function updateRows(userdata) {
  Logger.log("inside of updateRow");
  var counter = 2;
  Object.keys(userdata).forEach(function(key, index) {
    var value = userdata[key];
    Logger.log(value.firstname);
    Logger.log(index);

    // The size of the two-dimensional array must match the size of the range.
    var values = [
      [
        value.email,
        value.firstname,
        value.lastname,
        value.languages,
        value.rent_own
      ]
    ];

    var startRange = "A" + counter;
    var endRange = "E" + counter;
    var totalRange = "A" + counter + ":" + "E" + counter;

    var range = sheet.getRange(totalRange);
    range.setValues(values);

    counter++;
  });
}

function getAllData() {
  var firebaseUrl = "https://climate-resolve.firebaseio.com/";
  var base = FirebaseApp.getDatabaseByUrl(firebaseUrl);
  var data = base.getData();
  Logger.log(data);
  Logger.log(data.userdata);

  updateRows(data.userdata);

  for (var i in data) {
    Logger.log(data[i].firstName + " " + data[i].lastName);
  }
}
