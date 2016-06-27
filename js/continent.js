var fs = require("fs");

var data = fs.readFileSync('Table1.3_g20_2013_1.csv');
var stringData=data.toString();

//console.log(stringData);
var arrayOne= stringData.split('\r\n');  //\r\n is for windows format
//console.log(arrayOne[2]);
var header=arrayOne[0].split(',');
//console.log(header[2]);
var noOfRow=arrayOne.length;
var noOfCol=header.length;

var jsonArray=[];
var ContinentAsia=[];
var valueText;
 var Asia=["China","India", "Indonesia", "Japan", "Saudi_Arabia", "Republic_of_Korea"];


var val=0;
var val1=0;

var i=0,j=0;

//Asia

for (i = 1; i < noOfRow-3; i++) {
    //
    var obj = {};
    var myNewLine=arrayOne[i].split(',');
  console.log(myNewLine[0]);
//console.log(header[0].Country_Name);
if(myNewLine[0]=="China" || myNewLine[0]=="India" ||myNewLine[0]=="Indonesia" || myNewLine[0]=="Japan" || myNewLine[0]=="Saudi_Arabia" || myNewLine[0]=="Republic_of_Korea")
{
 for (j = 0; j< noOfCol; j++) {

//      console.log(myNewLine[0]);
      var headerText = header[j].substring(0,header[j].length);
      valueText = myNewLine[j].substring(0,myNewLine[j].length);
      //console.log(valueText);
         if(headerText=="Country_Name"){valueText="Asia";}

         if(headerText=="Population_Millions_2013"){
        //  console.log (val);
            val +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
          //  console.log(val);
            valueText=val.toString();
          }

          if(headerText=="GDP_Billions_US$_2013"){
          // console.log (val1);
             val1 +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
            // console.log(val1);
             valueText=val1.toString();
           }

      obj[headerText] = valueText;
  };
  ContinentAsia.push(obj);
}
};
//console.log( ContinentAsia);
//Asia done

//Europe
var ContinentEurope=[];
var Europe=["France","Germany", "Italy", "Russia", "Turkey", "United_Kingdom"];
var valEurope=0;
var GdpEurope=0;
for (i = 1; i < noOfRow-3; i++) {
    //
    var obj = {};
    var myNewLine=arrayOne[i].split(',');
  //console.log(myNewLine[0]);
//console.log(header[0].Country_Name);
if(myNewLine[0]=="France" || myNewLine[0]=="Germany" ||myNewLine[0]=="Italy" || myNewLine[0]=="Russia" || myNewLine[0]=="United_Kingdom")
{
 for (j = 0; j< noOfCol; j++) {

//      console.log(myNewLine[0]);
      var headerText = header[j].substring(0,header[j].length);
      valueText = myNewLine[j].substring(0,myNewLine[j].length);
      //console.log(valueText);
         if(headerText=="Country_Name"){valueText="Europe";}

         if(headerText=="Population_Millions_2013"){
         //console.log (valEurope);
            valEurope +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
            //console.log(valEurope);
           valueText=valEurope.toString();
          }

          if(headerText=="GDP_Billions_US$_2013"){
           //console.log (GdpEurope);
             GdpEurope +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
  //          console.log(GdpEurope);
             valueText=GdpEurope.toString();
           }

      obj[headerText] = valueText;
  };
  ContinentEurope.push(obj);
}
};
//console.log( ContinentEurope);

//Europe done
//

//S_America

var ContinentSAmerica=[];
var S_America=["Argentina","Brazil", "Mexico", "South_Africa"];
var valSAmerica=0;
var GdpSAmerica=0;
for (i = 1; i < noOfRow-3; i++) {
    //
    var obj = {};
    var myNewLine=arrayOne[i].split(',');
  //console.log(myNewLine[0]);
//console.log(header[0].Country_Name);
if(myNewLine[0]=="Argentina" || myNewLine[0]=="Brazil" ||myNewLine[0]=="Mexico" || myNewLine[0]=="South_Africa")
{
 for (j = 0; j< noOfCol; j++) {

//      console.log(myNewLine[0]);
      var headerText = header[j].substring(0,header[j].length);
      valueText = myNewLine[j].substring(0,myNewLine[j].length);
      //console.log(valueText);
         if(headerText=="Country_Name"){valueText="S_America";}

         if(headerText=="Population_Millions_2013"){
         //console.log (valSAmerica);
            valSAmerica +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
            //console.log(valSAmerica);
            valueText=valSAmerica.toString();
          }

          if(headerText=="GDP_Billions_US$_2013"){
           //console.log (GdpSAmerica);
             GdpSAmerica +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
             //console.log(GdpSAmerica);
             valueText=GdpSAmerica.toString();
           }

      obj[headerText] = valueText;
  };
  ContinentSAmerica.push(obj);
}
}
//console.log( ContinentSAmerica);


//samerica done

//N_America



var ContinentNAmerica=[];
var N_America=["Canada","USA"];
var valNAmerica=0;
var GdpNAmerica=0;
for (i = 1; i < noOfRow-3; i++) {
    //
    var obj = {};
    var myNewLine=arrayOne[i].split(',');
  //console.log(myNewLine[0]);
//console.log(header[0].Country_Name);
if(myNewLine[0]=="Canada" || myNewLine[0]=="USA")
{
 for (j = 0; j< noOfCol; j++) {

//      console.log(myNewLine[0]);
      var headerText = header[j].substring(0,header[j].length);
      valueText = myNewLine[j].substring(0,myNewLine[j].length);
      //console.log(valueText);
         if(headerText=="Country_Name"){valueText="N_America";}

         if(headerText=="Population_Millions_2013"){
         //console.log (valNAmerica);
            valNAmerica +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
            //console.log(valNAmerica);
            valueText=valNAmerica.toString();
          }

          if(headerText=="GDP_Billions_US$_2013"){
          // console.log (GdpNAmerica);
             GdpNAmerica +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
            // console.log(GdpNAmerica);
             valueText=GdpNAmerica.toString();
           }

      obj[headerText] = valueText;
  };
  ContinentNAmerica.push(obj);
}
}
//console.log( ContinentNAmerica);



//Austrelia

var ContinentAus=[];
var Australia=["Australia"];
var valAus=0;
var GdpAus=0;
for (i = 1; i < noOfRow-3; i++) {
    //
    var obj = {};
    var myNewLine=arrayOne[i].split(',');
  //console.log(myNewLine[0]);
//console.log(header[0].Country_Name);
if(myNewLine[0]=="Australia" )
{
 for (j = 0; j< noOfCol; j++) {

//      console.log(myNewLine[0]);
      var headerText = header[j].substring(0,header[j].length);
      valueText = myNewLine[j].substring(0,myNewLine[j].length);
      //console.log(valueText);
         if(headerText=="Country_Name"){valueText="Australia";}

         if(headerText=="Population_Millions_2013"){
//         console.log (valAus);
            valAus +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
  //          console.log(valAus);
            valueText=valAus.toString();
          }

          if(headerText=="GDP_Billions_US$_2013"){
    //       console.log (GdpAus);
             GdpAus +=  parseInt(myNewLine[j].substring(0,myNewLine[j].length));
      //       console.log(GdpAus);
             valueText=GdpAus.toString();
           }

      obj[headerText] = valueText;
  };
  ContinentAus.push(obj);
}
}
//console.log( ContinentAus);

//Aus  done

var continent=[ContinentAsia.pop(Object),ContinentEurope.pop(Object),ContinentNAmerica.pop(Object)
,ContinentSAmerica.pop(Object),ContinentAus.pop(Object)];

/*continent.push(ContinentAsia.pop(Object));
continent.push(ContinentEurope.pop(Object));
continent.push(ContinentNAmerica.pop(Object));
continent.push(ContinentSAmerica.pop(Object));
continent.push(ContinentAus.pop(Object));
*/

//console.log(ContinentNAmerica.pop(Object));
//console.log(ContinentSAmerica.pop(Object));
//console.log(ContinentEurope.pop(Object));
//console.log(ContinentAsia.pop(Object));
//console.log(ContinentAus.pop(Object));



fs.writeFile("DataContinent.json", JSON.stringify(continent, null, 0), function(err) {

                        if(err) {

                            console.log(err);

                        }}
                      );
