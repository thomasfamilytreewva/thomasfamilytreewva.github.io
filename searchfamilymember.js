//comment
var photoname = "";

var strglobal = "";
  var str = "";
  var idvar = "";
  var $idvar = "";
  var idJs = "";
var $idJs = "";
var idPhp = "";
var $idPhp = "";
  var photoid = "";
  var response = ""
  var correctIncorrect = "";
  var photoname = "";

  


  
  
  
/*This will randomly display a family member photo
   each time this page is called*/
  function randomly(){ 
   
var myPhotos=["24.png","25.png","26.png","27.png","29.png", "30.png", "32.png"];
var photo = myPhotos[Math.floor(Math.random() * myPhotos.length)];
console.log (photo);
var urlVarR = ("images/" + photo);
var innerVarR = "<img src=' " + urlVarR + " '>";
//document.getElementById("imgRandom").innerHTML = innerVar1;

//document.getElementById("imgRandom").innerHTML = "<img src='images/30.png'>";
//document.getElementById("imgRandom").src = "images/24.png";
document.getElementById("imgRandom").src = urlVarR;
}
  
  
function showPhotoHere(){
//alert ("function showPhotoHere");
var idvar = 25
	//var urlvar = "";
		var urlvar = ("images/" + idvar + ".png");
		// var repImage = "<img src=' " + urlvar + " '>"
	 var repImage = "<img src=' " + urlvar + " '>";
		var repImage = "<img src=' " + urlvar + " '>";
		document.getElementById("imgShowPhoto").src = urlvar;
	document.getElementById("imgShowPhoto1").src = "images/24.png";
}
  
function myGuessExtractNumber(){
	
	var myguessOri = document.forms["myForm"]["fname"].value; 
	if (myguessOri == ""){
		alert ("You must enter a First Name or a Nick Name.");
		return;
	}
	
	
	var photoname = document.getElementById("imageholder").innerHTML;
		//var str = "44.png" 
	var str = photoname;
	var n = str.length;
var i = 0;

for (i = 0; i < n; i++) {
   // text += "The number is " + i + "<br>";
	    ch = str.charAt(i);
		
		// check if ch is a letter
//if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
 	//str = idvar;
//	return;

// check if ch is a digit
if (ch >= '0' && ch <= '9')
	//document.getElementById("demois").innerHTML = ch + " is a digit";	 
		idvar = (idvar + ch);
		$idvar = idvar;
		
	
}
 console.log (idvar);
    
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
  document.getElementById("ajax").innerHTML=this.responseText;
	      }
  }
  //xmlhttp.open("GET","ajaxowl.txt",true);
 xmlhttp.open("GET","getuserowl.php?q="+idvar,true);
  xmlhttp.send();
 // idvar = "";
}



    function showUser() {
		idvar = "25"
		 console.log (idvar);
 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
    document.getElementById("ajax1").innerHTML=this.responseText; 
	ajaxResponse = this.responseText;
	return;
	 }
  }//disappears here
  //xmlhttp.open("GET","ajaxowl.txt",true);
 xmlhttp.open("GET","getuserowl.php?q="+idvar,true);
  xmlhttp.send();
 // idvar = "";
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
  fn = myObj[i].FirstName;
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
	 var z7 = document.createElement("TD");
	 var z8 = document.createElement("TD");
  z1.innerHTML = (nuid);
 z2.innerHTML = (fn);
 z3.innerHTML = (mn);
 z4.innerHTML = (man);
 z5.innerHTML = (ln);
 z6.innerHTML = (nn);
 z7.innerHTML = (city);
 z8.innerHTML = (state);
 
  y.appendChild(z1);
    y.appendChild(z2);
	y.appendChild(z3);
	y.appendChild(z4);
	y.appendChild(z5);
	y.appendChild(z6);
	y.appendChild(z7);
	y.appendChild(z8);
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
 //state=state.toUpperCase
  comments=myObj[i].Comments;
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
  
  var pcomments = document.createElement("P");                 // Create a <p> element
pcomments.innerHTML = "Comments: " + comments;                // Insert text
document.getElementById("myDIV").appendChild(pcomments);     // Append <p> to <div> with id="myDIV"

  
  }
  

