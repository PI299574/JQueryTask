var fs = require("fs");

var data = fs.readFileSync('Table1.3_g20_2013_1.csv');
var stringData=data.toString();

//console.log(stringData);
var arrayOne= stringData.split('\r\n');  //\r\n is for windows format
//console.log(arrayOne[2]);
var header=arrayOne[0].split(',');

var noOfRow=arrayOne.length;
var noOfCol=header.length;

var jsonArray=[];

var i=0,j=0;
for (i = 1; i < noOfRow-3; i++) {

    var obj = {};
    var myNewLine=arrayOne[i].split(',');
  console.log(myNewLine[2]);

    for (j = 0; j< noOfCol; j++) {
        var headerText = header[j].substring(0,header[j].length);
        var valueText = myNewLine[j].substring(0,myNewLine[j].length);
        obj[headerText] = valueText;
    };
    jsonArray.push(obj);
};

//console.log( jsonArray);

fs.writeFile("data5.json", JSON.stringify(jsonArray, null, 0), function(err) {

                        if(err) {

                            console.log(err);

                        }}
                      );
