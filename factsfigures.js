//07 Jan 2020

var myTable = document.getElementById("myTable");
var myObj = JSON.parse(localStorage["myObj"]);
var rowIndex;
var stateName;
var distinctCityDataState;
var countOfLiving=0;
	  var countOfDead=0;
	  var countOfLivingPlusDead=0;
	  var ci;
	

function allInfoDataTable(){
	//Delete all existing tables 
	var tables= document.getElementsByTagName('table');
while (tables.length>0)
    tables[0].parentNode.removeChild(tables[0]);
	
	//Create a HTML Table element.
        var table = document.createElement("TABLE");
		var x = table.setAttribute("id", "allInfoDataTable");
		table.className="fixed_header";
         table.border = "1";
		 
		 		document.body.appendChild(table);
 document.getElementById("allInfoDataTable").style.position = "static";

 		 
        //Add the header row.
     //ori   var row = table.insertRow(-1);
      //ori    var headerCell = document.createElement("TH");
	//ori	  var x = table.setAttribute("id", "allInfoDataTable");
            
			//Create a <thead> element (and insert a <tr> and <td> element to it):

// Find a <table> element with id="allInfoMyTable":
var table = document.getElementById("allInfoDataTable");
// Create an empty <thead> element and add it to the table:
var header = table.createTHead();
// Create an empty <tr> element and add it to the first position of <thead>:
var row = header.insertRow(0);  
var headerCell = document.createElement("TH");  

//ori continues here
			headerCell.innerHTML = "First Name";
            row.appendChild(headerCell);
			
			 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Middle Name";
            row.appendChild(headerCell)
        
		 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Maiden Name";
            row.appendChild(headerCell)
        
		 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Last Name";
            row.appendChild(headerCell)
        
		 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Nick Name";
            row.appendChild(headerCell)
        
		 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Date Of Birth";
            row.appendChild(headerCell)
			
			 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Place Of Birth City";
            row.appendChild(headerCell)
        
		 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Place Of Birth State";
            row.appendChild(headerCell)
			
			 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Date Of Death";
            row.appendChild(headerCell)
			
			 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Place Of Death City";
            row.appendChild(headerCell)
        
		 var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Place Of Death State";
            row.appendChild(headerCell)
			
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Tel";
            row.appendChild(headerCell)
			
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Email";
            row.appendChild(headerCell)
        
		var headerCell = document.createElement("TH");
			headerCell.innerHTML = "City";
            row.appendChild(headerCell)
			
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = "State";
            row.appendChild(headerCell)
			
			var headerCell = document.createElement("TH");
			headerCell.innerHTML = "Comments";
            row.appendChild(headerCell)
			
			
		var tb = document.createElement("TBODY");
		table.appendChild(tb);
     
//add td table data
			for (i in myObj) {
nuid=myObj[i].NodeUID;
  fn = myObj[i].FirstName  ;
   fn = fn.toUpperCase();
    mn=myObj[i].MiddleName;
 mn = mn.toUpperCase();
  man=myObj[i].MaidenName;
 man = man.toUpperCase();
 ln=myObj[i].LastName;
 ln = ln.toUpperCase();
   nn=myObj[i].NickName;
 nn = nn.toUpperCase();
  fnn=myObj[i].FirstNickName;
 fnn = fnn.toUpperCase();
 dob=myObj[i].DateOfBirth;
 //dob = dob.toUpperCase();
  pobc=myObj[i].PlaceOfBirthCity;
 //pobc = pobc.toUpperCase();
 pobs=myObj[i].PlaceOfBirthState;
 //pobs = pobs.toUpperCase();
 dod=myObj[i].DateOfDeath;
 podc=myObj[i].PlaceOfDeathCity;
 //podc = podc.toUpperCase();
 pods=myObj[i].PlaceOfDeathState;
 //pods = pods.toUpperCase();
  tel1 = myObj[i].Tel1
   email = myObj[i].Email
  city=myObj[i].City;
 city = city.toUpperCase();
  state=myObj[i].State;
 state = state.toUpperCase();
    comments=myObj[i].Comments;
 
                   row = table.insertRow(-1);
               var cell = row.insertCell(-1);
                cell.innerHTML = fn;
				
				  var cell = row.insertCell(-1);
                cell.innerHTML = mn;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = man;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = ln;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = nn;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = dob;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = pobc;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = pobs;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = dod;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = podc;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = pods;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = tel1;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = email;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = city;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = state;
				
				var cell = row.insertCell(-1);
                cell.innerHTML = comments;
				
				tb.appendChild(row);
            }
			
 //add on click with the below function
 //allInfoDataTableAddClick()
 
 //add on click with the below code
 var th = document.getElementById("allInfoDataTable").getElementsByTagName("th");
 for (var i=0; i<th.length; i++) {
   th[i].onclick = function () {
  //alert("click");
 ci=this.cellIndex;
 //alert ("cellIndex is " + ci);
 n=ci;
//allInfoDataTableSort(); //sorts table in ascending order only
 allInfoDataTableSortAD(n)
  }
 }


        }
			
	//sorts table in ascending and descending order
	function allInfoDataTableSortAD(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("allInfoDataTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

	
  //sorts table in ascending order only
  function allInfoDataTableSort() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("allInfoDataTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[ci];
      y = rows[i + 1].getElementsByTagName("TD")[ci];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function allInfoDataTableAddClick(){
   var table = document.getElementById('allInfoDataTable');
   //var rows = table.getElementsByTagName('tr');
   //for (var i = 0; i < rows.length; i++) {
        // Take each cell
     var row = table.rows[0];
    
         // do something on onclick event for cell
     row.onclick = function () {
		 alert(this.cells[0].innerHTML);
		  

		 var thead = document.getElementById("allInfoDataTable").getElementsByTagName("thead");
		 var th = document.getElementById("allInfoDataTable").getElementsByTagName("th");
		 var td = document.getElementById("allInfoDataTable").getElementsByTagName("td");

		 alert ("thead " + thead.length + "   th " + th.length + "   td " + td.length);
		 alert(td.cellIndex);
		 		 alert("Cell index is: " + td.cellIndex);
				alert(table.cellIndex);
		 }
		//}
}
	
    

  function wholiveswhere(){
	  //Delete all existing tables 
	var tables= document.getElementsByTagName('table');
while (tables.length>0)
    tables[0].parentNode.removeChild(tables[0]);
		  
	//  alert ("This is function whoLivesWhere");
	distinctStates(); //gets array of distinct states 
	                            //then creates a table for each state
	distinctCities(); //gets array of distinct states
	                           //then adds city data to its parent state
  }
  
  

   
  function distinctCities(){
	//gets array of distinct cities 
	//then calls distinctTableCreate() which creates table for each state
var array = myObj;
	var unique = {};
var distinct = [];
    for( var i in array ){
		if(array[i].City == ""){
			//alert ("Blank City");
		}else{
		
     if( typeof(unique[array[i].City]) == "undefined"){
		 //alert(array[i].State);
      distinct.push(array[i].City);
	       }
		}
     unique[array[i].City] = 0;
    }
	distinct.sort(); 
//var dC = document.getElementById("distinctCities");
//dC.innerHTML = "" + distinct;

for (var i in distinct) {
	cityName= (distinct[i]);
	distinctCityData();
	
}

}

function distinctCityData(){
	cityName = (cityName.trim());
	cityName = cityName.toUpperCase();
			//console.log (cityName);
		 for (i in myObj) {
	nuid=myObj[i].NodeUID;
  fn = myObj[i].FirstName  ;
   fn = fn.toUpperCase();
    mn=myObj[i].MiddleName;
 mn = mn.toUpperCase();
  man=myObj[i].MaidenName;
 man = man.toUpperCase();
 ln=myObj[i].LastName;
 ln = ln.toUpperCase();
   nn=myObj[i].NickName;
 nn = nn.toUpperCase();
  fnn=myObj[i].FirstNickName;
 fnn = fnn.toUpperCase();
  city=myObj[i].City;
 city = city.toUpperCase();
  state=myObj[i].State;
 state = state.toUpperCase()
 podc=myObj[i].PlaceOfDeathCity;
 

 if (cityName == city){
	  if (podc==""){
	 distinctCityDataState=state;
	 console.log (city+distinctCityDataState+fn+nn+ln);
	 //alert (stateName);
	var x=document.getElementById("table"+distinctCityDataState);
	//console.log(cityName +distinctCityDataState+fn+nn+ln);
	
	 row = x.insertRow(-1);
                var cell = row.insertCell(-1);
                cell.innerHTML = city;
				var cell = row.insertCell(1);
                cell.innerHTML = fn;
				var cell = row.insertCell(2);
                cell.innerHTML = nn;
				var cell = row.insertCell(3);
                cell.innerHTML = ln;
 }
 }		
}
}
  
  
  function distinctStates(){
	//gets array of distinct states 
	//then calls distinctTableCreate() which creates table for each state
var array = myObj;
	var unique = {};
var distinct = [];
    for( var i in array ){
		if(array[i].State == ""){
			//alert ("Blank State");
		}else{
		
     if( typeof(unique[array[i].State]) == "undefined"){
		 //alert(array[i].State);
      distinct.push(array[i].State);
	       }
		}
     unique[array[i].State] = 0;
    }
	distinct.sort(); 
//var dS = document.getElementById("distinctStates");
//dS.innerHTML = "" + distinct;

for (var i in distinct) {
	stateName= (distinct[i]);
	//alert (stateName);
	distinctStateTableCreate();
}

}

  
  
  function distinctStateTableCreate() {
	     //alert(stateName);
  var x = document.createElement("TABLE");
 x.setAttribute("id", "table" + stateName);
  var tableId = ("table" + stateName);
  document.body.appendChild(x);
    //Get the count of columns.
        var columnCount = 1;
 
        //Add the header row.
        var row = x.insertRow(-1);
                    var headerCell = document.createElement("TH");
            headerCell.innerHTML = stateName;
            row.appendChild(headerCell);
        
  
    //Add the data rows.
       // for (var i = 1; i < customers.length; i++) {
       //     row = table.insertRow(-1);
        //    for (var j = 0; j < columnCount; j++) {
         //       var cell = row.insertCell(-1);
       //         cell.innerHTML = customers[i][j];
      //      }
      //  }
		
		    row = x.insertRow(-1);
                var cell = row.insertCell(-1);
                cell.innerHTML = "CITY";
				var cell = row.insertCell(1);
                cell.innerHTML = "First Name";
				var cell = row.insertCell(2);
                cell.innerHTML = "Nick Name";
				var cell = row.insertCell(3);
                cell.innerHTML = "Last Name";
            
       document.body.appendChild(x);
   document.getElementById(tableId).style.position = "static";
   }

  


function mySearch() {

document.getElementById("imageholder").innerHTML= "";
	

  try{
 var myDiv = document.getElementById("myDIV");
myDiv.remove();
 }catch{
 // do nothing
 }

var x = document.getElementById("myTable").rows.length;
var i=x
while (i > 1) {
 document.getElementById("myTable").deleteRow(1);
  i=i-1;
}

searchName = document.getElementById("searchName").value
searchName = searchName.toUpperCase();
  
for (i in myObj) {
nuid=myObj[i].NodeUID;
  fn = myObj[i].FirstName  ;
   fn = fn.toUpperCase();
    mn=myObj[i].MiddleName;
 mn = mn.toUpperCase();
  man=myObj[i].MaidenName;
 man = man.toUpperCase();
 ln=myObj[i].LastName;
 ln = ln.toUpperCase();
   nn=myObj[i].NickName;
 nn = nn.toUpperCase();
  fnn=myObj[i].FirstNickName;
 fnn = fnn.toUpperCase();
  city=myObj[i].City;
 city = city.toUpperCase();
  state=myObj[i].State;
 state = state.toUpperCase();
 
 

 if (fnn.includes(searchName)==true){
 
  createTable();
  document.getElementById("myTable").style.visibility = "visible";
  document.getElementById("clickForDetails").style.visibility = "visible";
   addClickTable();

 }
 
  }

// var x = document.getElementById("myTable").rows.length;
}
 
 function createTable(){
  var x = document.createElement("TBODY");
  var y = document.createElement("TR");
   var z1 = document.createElement("TD");
 var z2 = document.createElement("TD");
  var z3 = document.createElement("TD");
   var z4 = document.createElement("TD");
    var z5 = document.createElement("TD");
	 var z6 = document.createElement("TD");
  z1.innerHTML = (nuid);
 z2.innerHTML = (fn);
 z3.innerHTML = (mn);
 z4.innerHTML = (man);
 z5.innerHTML = (ln);
 z6.innerHTML = (nn);
  y.appendChild(z1);
    y.appendChild(z2);
	y.appendChild(z3);
	y.appendChild(z4);
	y.appendChild(z5);
	y.appendChild(z6);
  x.appendChild(y);
  document.getElementById("myTable").appendChild(x);
  
   var para = document.createElement("p");
var node = document.createTextNode("Click on family member's name for details.");
para.appendChild(node);

}
 
 
 
  
function addClick() {
    var table = document.getElementById('myTable');
    var cells = table.getElementsByTagName('td');

    for (var i = 0; i < cells.length; i++) {
        // Take each cell
     var cell = cells[i];
        // do something on onclick event for cell
     cell.onclick = function () {
            // Get the row id where the cell exists
            var rowId = this.parentNode.rowIndex;
alert(rowId);
alert(document.getElementById("myTable").rows[1].cells[0].innerHTML);
alert(document.getElementById("myTable").rows[rowId].cells[0].innerHTML);
idvar=(document.getElementById("myTable").rows[rowId].cells[0].innerHTML);
alert(idvar);
}
   }

}



 
  
 
  function addClickTable(){
   var table = document.getElementById('myTable');
    var rows = table.getElementsByTagName('tr');

    for (var i = 0; i < rows.length; i++) {
        // Take each cell
     var row = rows[i];
        // do something on onclick event for cell
     row.onclick = function () {
	 // alert(idvar);
 // alert(this);
  
   var myDiv = document.createElement("div");
//myDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
document.body.appendChild(myDiv);
myDiv.id=("myDIV");

            // Get the row id where the cell exists
			rowIndex=(this.rowIndex);
			if (rowIndex==0){
			return;
			}
			//alert(rowIndex);
			idvar = (this.cells[0].innerHTML);
			showPhoto();
			showFamilyMemberInfo();
			 deleteRows();
			document.getElementById("myTable").style.visibility = "hidden";
			document.getElementById("clickForDetails").style.visibility = "hidden";
   
           				       }
							   }
							   }
	



function rowIndex(){
 var table = document.getElementById("myTable");
                for(var i = 0; i < table.rows.length; i++)   {
                                 table.rows[i].onclick = function()
                    {
						
						idvar = (this.cells[0].innerHTML);
						       }
							   
                }
}





function showPhoto(){
	var urlvar = "";
	urlvar = ("images/" + idvar + ".png");
	 var repImage = "<img src=' " + urlvar + " '>";
	document.getElementById("imageholder").innerHTML= repImage;
		}
		
		function deleteRows(){
			var x = document.getElementById("myTable").rows.length;
var i=x
while (i > 1) {
 document.getElementById("myTable").deleteRow(1);
  i=i-1;
}				 
idvar = "";
	 }

  
  
  
  function showFamilyMemberInfo(){
  
    for (i in myObj) {
	nuid=(myObj[i].NodeUID);
	if (myObj[i].NodeUID == idvar){
		 nuid=myObj[i].NodeUID;
  fn = myObj[i].FirstName  ;
   //fn = fn.toUpperCase();
    mn=myObj[i].MiddleName;
 //mn = mn.toUpperCase();
  man=myObj[i].MaidenName;
 //man = man.toUpperCase();
 ln=myObj[i].LastName;
 //ln = ln.toUpperCase();
   nn=myObj[i].NickName;
 //nn = nn.toUpperCase();
  fnn=myObj[i].FirstNickName;
 //fnn = fnn.toUpperCase();
 pobc=myObj[i].PlaceOfBirthCity;
 //pobc = pobc.toUpperCase();
 pobs=myObj[i].PlaceOfBirthState;
 //pobs = pobs.toUpperCase();
 
 dob=myObj[i].DateOfBirth;
 //dob = dob.toUpperCase();
 podc=myObj[i].PlaceOfDeathCity;
 //podc = podc.toUpperCase();
 pods=myObj[i].PlaceOfDeathState;
 //pods = pods.toUpperCase();
 
 dod=myObj[i].DateOfDeath;
 //dod = dod.toUpperCase(); 
 tel1=myObj[i].Tel1;
 //tel1=tel1.toUpperCase();
 email=myObj[i].Email;
 //email=email.toUpperCase();
 city=myObj[i].City;
 //city=city.toUpperCase();
 state=myObj[i].State;
 //state=state.toUpperCase();
 }
	}
	
	var pfn = document.createElement("P");                 // Create a <p> element
pfn.innerHTML = "First Name: " + fn;                // Insert text
document.getElementById("myDIV").appendChild(pfn);     // Append <p> to <div> with id="myDIV"
	
		var pln = document.createElement("P");                 // Create a <p> element
pln.innerHTML = "Last Name: " + ln;                // Insert text
document.getElementById("myDIV").appendChild(pln);     // Append <p> to <div> with id="myDIV"
	
			var pnn = document.createElement("P");                 // Create a <p> element
pnn.innerHTML = "Nick Name: " + nn;                // Insert text
document.getElementById("myDIV").appendChild(pnn);     // Append <p> to <div> with id="myDIV"
	
			var ppobc = document.createElement("P");                 // Create a <p> element
ppobc.innerHTML = "Place Of Birth City: " + pobc;                // Insert text
document.getElementById("myDIV").appendChild(ppobc);     // Append <p> to <div> with id="myDIV"
	
	var ppobs = document.createElement("P");                 // Create a <p> element
ppobs.innerHTML = "Place Of Birth State: " + pobs;                // Insert text
document.getElementById("myDIV").appendChild(ppobs);     // Append <p> to <div> with id="myDIV"
		
			var pdob = document.createElement("P");                 // Create a <p> element
pdob.innerHTML = "Date Of Birth: " + dob;                // Insert text
document.getElementById("myDIV").appendChild(pdob);     // Append <p> to <div> with id="myDIV"
	
			var ppodc = document.createElement("P");                 // Create a <p> element
ppodc.innerHTML = "Place Of Death City: " + podc;                // Insert text
document.getElementById("myDIV").appendChild(ppodc);     // Append <p> to <div> with id="myDIV"
	
			var ppods = document.createElement("P");                 // Create a <p> element
ppods.innerHTML = "Place Of Death State: " + pods;                // Insert text
document.getElementById("myDIV").appendChild(ppods);     // Append <p> to <div> with id="myDIV"

	var pdod = document.createElement("P");                 // Create a <p> element
pdod.innerHTML = "Date Of Death: " + dod;                // Insert text
document.getElementById("myDIV").appendChild(pdod);     // Append <p> to <div> with id="myDIV"

			var ptel1 = document.createElement("P");                 // Create a <p> element
ptel1.innerHTML = "Tel: " + tel1;                // Insert text
document.getElementById("myDIV").appendChild(ptel1);     // Append <p> to <div> with id="myDIV"
	
				var pemail = document.createElement("P");                 // Create a <p> element
pemail.innerHTML = "Email: " + email;                // Insert text
document.getElementById("myDIV").appendChild(pemail);     // Append <p> to <div> with id="myDIV"
  }
  


function youngestLivingFamilyMember(){
	var dobYoungest=("1600-01-01");
	var given="";
	var current="";
	var fnYoungest="";
for (i in myObj) {
nuid=myObj[i].NodeUID;
  fn = myObj[i].FirstName  ;
   fn = fn.toUpperCase();
    mn=myObj[i].MiddleName;
 mn = mn.toUpperCase();
  man=myObj[i].MaidenName;
 man = man.toUpperCase();
 ln=myObj[i].LastName;
 ln = ln.toUpperCase();
   nn=myObj[i].NickName;
 nn = nn.toUpperCase();
  fnn=myObj[i].FirstNickName;
 fnn = fnn.toUpperCase();
 dob =myObj[i].DateOfBirth;
 dod =myObj[i].DateOfDeath;
 
   if (nuid<1000){
  
 if(dod=="0000-00-00"){
 if(dob=="0000-00-00"){
 }else{
//console.log(fn + " " + ln +  " was born " + dob);
given = moment(dob);
current = moment().startOf('day');
//Difference in number of days
//console.log(moment.duration(given.diff(current)).asDays());
dobDays=(moment.duration(current.diff(given)).asDays());
//dobDays= parseFloat(dobDays);

given = moment(dobYoungest);
current = moment().startOf('day');
dobYoungestDays=(moment.duration(current.diff(given)).asDays());
//dobYoungestDays= parseFloat(dobYoungestDays);



if(dobDays<dobYoungestDays){
	console.log("dobDays " + dobDays + " dobYoungestDays " + dobYoungestDays);
	dobYoungestDays=dobDays;
	dobYoungest = dob;
	fnYoungest=fn;
	lnYoungest =ln;
	console.log("The Youngest living family member is " + fnYoungest+  " " + lnYoungest + ". Born " + dobYoungest);
	
}

 } 
 } 
}
}

alert("The youngest living family member is " + fnYoungest + " " + lnYoungest + ". Born " + dobYoungest);

}


function oldestLivingFamilyMember(){
	var dobOldest=moment().startOf('day');
	var given="";
	var current="";
	var fnOldest="";
for (i in myObj) {
nuid=myObj[i].NodeUID;
  fn = myObj[i].FirstName  ;
   fn = fn.toUpperCase();
    mn=myObj[i].MiddleName;
 mn = mn.toUpperCase();
  man=myObj[i].MaidenName;
 man = man.toUpperCase();
 ln=myObj[i].LastName;
 ln = ln.toUpperCase();
   nn=myObj[i].NickName;
 nn = nn.toUpperCase();
  fnn=myObj[i].FirstNickName;
 fnn = fnn.toUpperCase();
 dob =myObj[i].DateOfBirth;
 dod =myObj[i].DateOfDeath;
 
  if (nuid<1000){
  

 if(dod=="0000-00-00"){
 if(dob=="0000-00-00"){
 }else{
//console.log(fn + " " + ln +  " was born " + dob);

//var DateOfBirth = ("2019-01-07");

	//var given = moment(DateOfBirth);
//var current = moment().startOf('day');
given = moment(dob);
current = moment().startOf('day');
//Difference in number of days
//console.log(moment.duration(given.diff(current)).asDays());
dobDays=(moment.duration(current.diff(given)).asDays());

given = moment(dobOldest);
current = moment().startOf('day');
dobOldestDays=(moment.duration(current.diff(given)).asDays());



if(dobDays>dobOldestDays){
	console.log("dobDays " + dobDays + " dobOldestDays " + dobOldestDays);
	dobOldestDays=dobDays;
	dobOldest = dob;
	fnOldest=fn;
	lnOldest =ln;
	console.log("The oldest living family member is " + fnOldest+  " " + lnOldest + ". Born " + dobOldest);
	
}

 
 } 
}
}
}
alert("The oldest living family member is " + fnOldest + " " + lnOldest + ". Born " + dobOldest);

}
  

function moments() {
var starts = moment('1830-02-15 12:53:12');
var ends   = moment();

var duration = moment.duration(ends.diff(starts));

// with ###moment precise date range plugin###
// it will tell you the difference in human terms

var diff = moment.preciseDiff(starts, ends, true); 
// example: { "years": 2, "months": 7, "days": 0, "hours": 6, "minutes": 29, "seconds": 17, "firstDateWasLater":  false }


// or as string:
var diffHuman = moment.preciseDiff(starts, ends);
// example: 2 years 7 months 6 hours 29 minutes 17 seconds

console.log(JSON.stringify(diff));
console.log(diffHuman);
}

function dateDiffDays(){
	//var given = moment("2021-01-07");
	var DateOfBirth = ("2019-01-07");
	var given = moment(DateOfBirth);
var current = moment().startOf('day');

//Difference in number of days
//console.log(moment.duration(given.diff(current)).asDays());
dDD=(moment.duration(given.diff(current)).asDays());
//gives difference in negative number
//alert(given + " " + current + " " + dDD);


	//var given = moment("2021-01-07");
	var DateOfBirth1 = ("2017-01-07");
	//var DateOfBirth2 = ("2018-01-07");
	//var DateOfBirth3 = ("2019-01-07");
	var given = moment(DateOfBirth1);
var current = moment().startOf('day');
//Difference in number of days
//console.log(moment.duration(given.diff(current)).asDays());
dDD1=(moment.duration(current.diff(given)).asDays());
alert(dDD1);

var DateOfBirth2 = ("2018-01-07");
	var given = moment(DateOfBirth2);
var current = moment().startOf('day');
//Difference in number of days
//console.log(moment.duration(given.diff(current)).asDays());
dDD2=(moment.duration(current.diff(given)).asDays());
alert(dDD2);

var DateOfBirth3 = ("2019-01-07");
	var given = moment(DateOfBirth3);
var current = moment().startOf('day');
//Difference in number of days
//console.log(moment.duration(given.diff(current)).asDays());
dDD3=(moment.duration(current.diff(given)).asDays());
alert(dDD3);


}

function GenerateTable() {
	
	//Delete all existing tables 
	var tables= document.getElementsByTagName('table');
while (tables.length>0)
    tables[0].parentNode.removeChild(tables[0]);
	
	
	var i=4
while (i > 1) {
GenerateTable1();
  i=i-1;
}

}

 function GenerateTable1() {
        //Build an array containing Customer records.
        var customers = new Array();
        customers.push(["Customer Id", "Name", "Country"]);
        customers.push([1, "John Hammond", "United States"]);
        customers.push([2, "Mudassar Khan", "India"]);
        customers.push([3, "Suzanne Mathews", "France"]);
        customers.push([4, "Robert Schidner", "Russia"]);
 
        //Create a HTML Table element.
        var table = document.createElement("TABLE");
		var x = table.setAttribute("id", "tableGT");
  var tableId = ("tableGT");
        table.border = "1";
 
         //Get the count of columns.
        var columnCount = customers[0].length;
 
        //Add the header row.
        var row = table.insertRow(-1);
        for (var i = 0; i < columnCount; i++) {
            var headerCell = document.createElement("TH");
            headerCell.innerHTML = customers[0][i];
            row.appendChild(headerCell);
        }
 
        //Add the data rows.
        for (var i = 1; i < customers.length; i++) {
            row = table.insertRow(-1);
            for (var j = 0; j < columnCount; j++) {
                var cell = row.insertCell(-1);
                cell.innerHTML = customers[i][j];
            }
        }
		
document.body.appendChild(table);
 document.getElementById("tableGT").style.position = "static";
      //  var dvTable = document.getElementById("dvTable");
       // dvTable.innerHTML = "";
      //  dvTable.appendChild(table);
    }
	
	
	   
function population(){
	
	  //Delete all existing tables 
	var tables= document.getElementsByTagName('table');
while (tables.length>0)
    tables[0].parentNode.removeChild(tables[0]);

//Create Population Table Headers
 var x = document.createElement("TABLE");
 x.setAttribute("id", "population");
  var tableIdpop = ("population");
  document.body.appendChild(x);
    //Get the count of columns.
     //   var columnCount = 4;
 
        //Add the header row.
        var row = x.insertRow(-1);
            			var headerCell = document.createElement("TH");
            headerCell.innerHTML = "POPULATION OF THOMAS PEOPLE";
            row.appendChild(headerCell);
			headerCell.colSpan = 4;
     	    //position table here
         document.getElementById(tableIdpop).style.position = "static";
 

		  
	//  alert ("This is function whoLivesWhere");
	populationStates(); //gets array of distinct states 
	                            //then creates a table for each state
	populationCities(); //gets array of distinct states
	                           //then adds city data to its parent state
  }
  
  function populationStates(){
	//gets array of distinct states 
	//then calls distinctTableCreate() which creates table for each state
var array = myObj;
	var unique = {};
var distinct = [];
    for( var i in array ){
		if(array[i].State == ""){
			//alert ("Blank State");
		}else{
		
     if( typeof(unique[array[i].State]) == "undefined"){
		 //alert(array[i].State);
      distinct.push(array[i].State);
	       }
		}
     unique[array[i].State] = 0;
    }
	distinct.sort(); 
//var dS = document.getElementById("distinctStates");
//dS.innerHTML = "" + distinct;

for (var i in distinct) {
	stateName= (distinct[i]);
	//alert (stateName);
	populationStateTableCreate();
}

}

  
  
  function populationStateTableCreate() {
	  
	     //alert(stateName);
  var x = document.createElement("TABLE");
 x.setAttribute("id", "table" + stateName);
  var tableStateName = ("table" + stateName);
  document.body.appendChild(x);
    //Get the count of columns.
        var columnCount = 1;
 
        //Add the header row.
        var row = x.insertRow(-1);
                    var headerCell = document.createElement("TH");
            headerCell.innerHTML = stateName;
            row.appendChild(headerCell);
			
			var cell = row.insertCell(1);
                cell.innerHTML = "LIVING";
				var cell = row.insertCell(2);
                cell.innerHTML = "DEAD";
				var cell = row.insertCell(3);
                cell.innerHTML = "TOTAL";
            
            
       document.body.appendChild(x);
   document.getElementById(tableStateName).style.position = "static";
   }

  
 function populationCities(){
	//gets array of distinct cities 
	//then calls distinctTableCreate() which creates table for each state
var array = myObj;
	var unique = {};
var distinct = [];
    for( var i in array ){
		if(array[i].City == ""){
			//alert ("Blank City");
		}else{
		
     if( typeof(unique[array[i].City]) == "undefined"){
		 //alert(array[i].State);
      distinct.push(array[i].City);
	       }
		}
     unique[array[i].City] = 0;
    }
	distinct.sort(); 
//var dC = document.getElementById("distinctCities");
//dC.innerHTML = "" + distinct;

for (var i in distinct) {
	cityName= (distinct[i]);
	populationCityData();
		var x=document.getElementById("table"+distinctCityDataState);
 row = x.insertRow(-1);
               var cell = row.insertCell(-1);
               cell.innerHTML = cityName;
			   var cell = row.insertCell(1);
             cell.innerHTML = countOfLiving;
				var cell = row.insertCell(2);
               cell.innerHTML = countOfDead;
			var cell = row.insertCell(3);
              cell.innerHTML = countOfLivingPlusDead;
}
}

function populationCityData(){
	  countOfLiving=0;
	  countOfDead=0;
	  countOfLivingPlusDead=0;

	cityName = (cityName.trim());
	cityName = cityName.toUpperCase();
			//console.log (cityName);
		 for (i in myObj) {
	nuid=myObj[i].NodeUID;
  fn = myObj[i].FirstName  ;
   fn = fn.toUpperCase();
    mn=myObj[i].MiddleName;
 mn = mn.toUpperCase();
  man=myObj[i].MaidenName;
 man = man.toUpperCase();
 ln=myObj[i].LastName;
 ln = ln.toUpperCase();
   nn=myObj[i].NickName;
 nn = nn.toUpperCase();
  fnn=myObj[i].FirstNickName;
 fnn = fnn.toUpperCase();
  city=myObj[i].City;
 city = city.toUpperCase();
  state=myObj[i].State;
 state = state.toUpperCase()
 podc=myObj[i].PlaceOfDeathCity;
 

 if (cityName == city){
	  if (podc==""){
		  countOfLiving = countOfLiving + 1
	 distinctCityDataState=state;
	 console.log (city+distinctCityDataState+fn+nn+ln);
	
	
//	var x=document.getElementById("table"+distinctCityDataState);
 //row = x.insertRow(-1);
  //              var cell = row.insertCell(-1);
 //               cell.innerHTML = city;
//				var cell = row.insertCell(1);
   //             cell.innerHTML = "Total Living";
//				var cell = row.insertCell(2);
 //               cell.innerHTML = "Total Dead";
//				var cell = row.insertCell(3);
  //              cell.innerHTML = "Total L+D";

	
 }	else{
	 countOfDead = countOfDead + 1;
 }	
}

countOfLivingPlusDead = countOfLiving+ countOfDead;

 }

}
 
