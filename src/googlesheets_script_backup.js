var secret = "hIWoO0eblTvhgViejkxFnHb5R8DYlBhVqr8JEVjA";

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var lastRangeLetter;

//create aggregated array of keys to share between addtitleRow and update rows to make sure data is always aligned

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const addTitleRow = data => {
  const dataKeys = Object.keys(data);

  let secondLevelKeys = dataKeys.map(key => Object.keys(data[key]));
  //   [["firstname", "lastname", "age", "dog"], ["firstname", "exercise"], ["firstname", "salsa"]]
  const flattenedSecondLevel = flatten(secondLevelKeys);
  //   ["firstname", "lastname", "age", "dog", "firstname", "exercise", "firstname", "salsa"]
  const uniqueArray = flattenedSecondLevel.filter(onlyUnique);
  //   ["firstname", "lastname", "age", "dog", "exercise", "salsa"]
  const sortedArray = uniqueArray.sort();
  const lastItem = sortedArray.pop();
  sortedArray.unshift(lastItem);

  lastRangeLetter = String.fromCharCode(sortedArray.length + 64);
  var values = [sortedArray];
  var totalRange = "A1:" + lastRangeLetter + "1";
  var range = sheet.getRange(totalRange);
  range.setValues(values);

  return sortedArray;

  Logger.log(sortedArray);
};

// how many people are going to be taking this survey?
// check and make sure key from global key exists - if it doesn't exist, create an empty string

function updateRows(userdata) {
  // make sure titleArr comes through as sortedArray and also has side effect of creating title bar
  var titleArr = addTitleRow(userdata);
  var valuesPrimary = [];
  var counter = 2;

  // run through each data entry in the main section
  Object.keys(userdata).forEach(function(key, index) {
    var value = userdata[key];
    // the first array that we will push all values to

    // now run through the values in the title array and make sure I can match them.
    var valuesPrimary = [];

    titleArr.forEach(function(key, index) {
      // if the key DOES exist in the selected data entry
      if (value[key]) {
        // further, manipulate data type if it is an array
        if (_typeof(value[key]) === "object") {
          // validate for arrays
          var toPush = value[key].toString();
          valuesPrimary.push(toPush);
        } else {
          valuesPrimary.push(value[key]);
        }
      } else {
        valuesPrimary.push(" ");
      }

      if (valuesPrimary.length === titleArr.length) {
        // multi dimensional array we will use to push data to sheet
        var valuesFinal = [valuesPrimary];
        Logger.log(lastRangeLetter);
        var totalRange = "A" + counter + ":" + lastRangeLetter + counter;
        Logger.log(totalRange);
        var range = sheet.getRange(totalRange);
        range.setValues(valuesFinal);
        counter++;
      }
    });
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
