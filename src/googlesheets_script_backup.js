var secret = "hIWoO0eblTvhgViejkxFnHb5R8DYlBhVqr8JEVjA";

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getSheets()[0];
var lastRangeLetter;

//create aggregated array of keys to share between addtitleRow and update rows to make sure data is always aligned

function addTitleRow(userdata) {
  var firstKey = Object.keys(userdata)[0];
  var value = userdata[firstKey];
  var titleArr = [];

  var count = 0;

  Object.keys(userdata).forEach(function(key, index) {
    var dataitem = userdata[key];

    Logger.log(Object.keys(dataitem).length);
    Logger.log(count);

    count++;
    // Logger.log(dataitem);

    //MAP OUT KEYS AND ADD TO FIRST ROW
    Object.keys(dataitem).forEach(function(key, index) {
      if (titleArr.indexOf(key) < 0) {
        // Logger.log("this key is new to the array, adding it now", key);
        titleArr.push(key);
      }

      // Logger.log(titleArr);
      // Logger.log(Object.keys(dataitem).length);
      // Logger.log(index);

      // HOW WILL I KNOW WHEN LOOP HAS FINISHED?
      //MAKE SURE THE INDEX IS THE SAME AS THE LENGTH OF dataitem

      if (Object.keys(dataitem).length === index + 1) {
        // Logger.log('HARK! WE HAVE REACHED THE LAST ITEM!')
        // calculate range
        // Logger.log(titleArr);
        // Logger.log(titleArr.length);
        // lastRangeLetter = String.fromCharCode(titleArr.length + 64);
        // var values = [titleArr];
        // var totalRange = "A1:" + lastRangeLetter + "1";
        // var range = sheet.getRange(totalRange);
        // range.setValues(values);
      }
    });
  });
}

// how many people are going to be taking this survey?
// check and make sure key from global key exists - if it doesn't exist, create an empty string

function updateRows(userdata) {
  addTitleRow(userdata);
  //   var counter = 2;
  //   Object.keys(userdata).forEach(function(key, index) {
  //     var value = userdata[key];
  //     // the first array that we will push all values to
  //     var valuesPrimary = [];
  //     // multi dimensional array we will use to push data to sheet
  //     var valuesFinal;
  //     Object.keys(value).forEach(function(key, index) {
  //       if (typeof value[key] === "object") {
  //         // validate for arrays
  //         var toPush = value[key].join(", ");
  //         valuesPrimary.push(toPush);
  //       } else {
  //         valuesPrimary.push(value[key]);
  //       }
  //       if (valuesPrimary.length === Object.keys(value).length) {
  //         valuesFinal = [valuesPrimary];
  //         if (valuesPrimary.length > 0) {
  //           Logger.log(valuesPrimary.length);
  //           var totalRange = "A" + counter + ":" + lastRangeLetter + counter;
  //           Logger.log(totalRange);
  //           var range = sheet.getRange(totalRange);
  //           range.setValues(valuesFinal);
  //         }
  //       }
  //     });
  //     counter++;
  //   });
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
