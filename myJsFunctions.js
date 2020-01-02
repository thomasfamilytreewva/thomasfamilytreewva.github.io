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

  
function testJs(){
	idJs = "IDJS";
	}


  
function testJs1(){
	idJs = "IDJS";
	alert ($idPhp);
	}


function arrayAddElement(){
    fruits[fruits.length] = "Lemon";
    document.getElementById("demoArrayAddElement").innerHTML = fruits;
}
  
  
  
  
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
  
  function showPhotoZZZ(){
	var urlvar = "";
	//alert (idvar);
	//var repImage = '<img src="images/30.png" alt="Image alt">'; 
	//var repImage = '<img src="images/" + 29 + "tom.png" alt="Image alt">'; 
	// urlvar = "images/29.png";
	idvar = "29";
	urlvar = ("images/" + idvar + ".png");
	  
	// var repImage = "<img src=' " + urlvar + " '>"
	 var repImage = "<img src=' " + urlvar + " '>";
	
	document.getElementById("imageholder").innerHTML= repImage;
	
	
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

function loopThruArray(){
	var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("demoloopThruArray").innerHTML = text;

}
