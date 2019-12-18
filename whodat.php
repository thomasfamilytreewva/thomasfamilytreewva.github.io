<?php

//08 Jan 2019


?>

<!--02 Dec 2018-->
<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="myJsFunctions.js"></script>
<style>
</style>
<script>
var myGuessTextVar = "";
var myGuessAjaxVar = "";
var myGuessOri = "";
var exitYesNo = "";
var answerYesNo = "";


function answerYesNoFunction(){
	answerYesNo = "Yes";
	exitYesNo = "No"
		myGuessAjaxFunction();
	}

function myGuessAjax(){
			 console.log (idvar);
		 
	//if (exitYesNo == "exitYes"){
	//	return;
	//}		 
	 
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  } else { // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
 // document.getElementById("ajax").innerHTML=this.responseText;
 // alert (this.responseText);
 myGuessAjaxVar = (this.responseText);
 
 if (answerYesNo == "Yes"){
alert (myGuessAjaxVar);
answerYesNo = "No"
return;	 
 }
 
 myGuessCompare();
 
	      }
  }
  //xmlhttp.open("GET","ajaxowl.txt",true);
 xmlhttp.open("GET","myGuess.php?q="+idvar,true);
  xmlhttp.send();
 // idvar = "";
	

}	
 

function myGuessCompare(){
	//alert (myGuessTextVar);
	//alert (myGuessAjaxVar);
	
	myGuessTextVar = myGuessTextVar.trim();
	myGuessTextVar = myGuessTextVar.toLowerCase();
	
	myGuessAjaxVar = myGuessAjaxVar.trim();
	myGuessAjaxVar = myGuessAjaxVar.toLowerCase();
	
	
	 if (res = myGuessAjaxVar.match(myGuessTextVar)){
  alert (myGuessOri + " is correct. \n" + myGuessAjaxVar);
   }else{
	   
	//alert (document.getElementById("myGuessText").value);
		//document.getElementById("myGuessText").value = "";
		alert (myGuessOri + " is not correct. Try again.");
}
}
/*	

*/	
	


function myGuessMaster(){
	exitYesNo = "No";
	myGuessTextFunction();
	myGuessAjaxFunction();
	}

function myGuessTextFunction(){
	//alert("My Guess Text");
	myGuessOri = document.getElementById("myGuessText").value;
	myGuessTextVar = document.getElementById("myGuessText").value;
	//alert(myGuessTextVar);
		if (myGuessTextVar == ""){
		alert ("You must enter a First Name or a Nick Name.");
		//exitYesNo = "Yes";
		return;
	}
}


function myGuessAjaxFunction(){
	if (exitYesNo == "Yes") {
		return;
	}
	//This get idvar 
	myGuessExtractNumberHere();
	//This calls function myGuessAjax to get member info
	myGuessAjax();
	//alert(myGuessAjaxVar);
	
}



	
	function myGuessExtractNumberHere(){
	exitYesNo = "exitNo"	
		idvar = "";
$idvar = "";
	
	
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
  
	
}

	
	
	

 
</script>
    <link rel="stylesheet" href="main.css"/>
</head>
<body>
<a href="index.html">Main Menu</a><br>


<p>See if you can name your relatives.</p>
<p>1. Click on Random Photo Button to view family member.</p>
<p>2. Enter First Name or Nick Name of person in photo.</p>
<p>3. Click on My Guess button.</p>


<button onclick='showRandomPhotoMW()'>Random Photo</button>
<br><br>
<!--
<button onclick='functionJs1(); onCallPhp(); functionJs2()'>Random Photo</button>
-->



<!--<form name="myForm">-->  
  First Name or Nick Name:<br>
  <input id="myGuessText" type="text" name="myGuessTextName">
  <br><br>
  <button onclick="myGuessMaster()">My Guess</button>
  <br>
  <br>
  <p>Don't know who? Click on Who Dat? button for answer.</p>
   <button onclick="answerYesNoFunction()">Who Dat?</button>
 

<p id='imageholder'</p>
</body>
</html>