//<script>
//array = JSON.parse(localStorage.getItem("array"));
//alert(array[1]);

var pngFiles = JSON.parse(localStorage.getItem("pngFiles"));
//alert(pngFiles[1]);

var myObj = JSON.parse(localStorage["myObj"]);
var myArrayLength;
		var randomNumber;
		var fnrn;
//</script>

//<script>
function randomPhoto(){
//alert("This is function RandomPhoto");
var ai=0;
var myArrayRandom = [];
myArrayRandom = pngFiles;

     //document.getElementById("arrayContents").innerHTML = myArray;
//These lines gets var randomNumber based on length of myArray
//Then it get fnrn which is the filename based on the randomNumber
		myArrayLength=(myArrayRandom.length);
		randomNumber=(Math.floor(Math.random() * myArrayLength));
		var photoname=(myArrayRandom[randomNumber]);
		var str = photoname;
	var n = str.length;
var i = 0;
var di = "";
var fnrn = "";

for (i = 0; i < n; i++) {
   // text += "The number is " + i + "<br>";
	    ch = str.charAt(i);
	
// check if ch is a digit
if (ch >= '0' && ch <= '9')
		fnrn = fnrn + ch;
		}
				var repImage = "images/" + fnrn + ".png";
//Make sure to use a <img> element with the below code
	//document.getElementById("myImg").src = "images/15.png";
	document.getElementById("myImg").src = repImage;
      
  
}
//</script>


//<script>
var mgpExitYesNo;
var mgtExitYesNo;
var mgp = "";
var mgt = "";
function myGuess(){
//This calls myGuessSetup which checks to make sure
//a Random Photo is selected and a First Name or Nick Name
//has been entered.
myGuessSetup();

if (mgpExitYesNo=="Yes"){
alert("You must select a Random Photo");
return;}
if (mgtExitYesNo=="Yes"){
alert("You must enter First Name or Nick Name");
return;}

//This calls function myGuessPhoto which gets the NUID from the photo string
//Then pulls the FirstNameNickName string from myArray
myGuessPhoto();

//This calls function myGuessText which gets the user input of FirstName or
//NickName
myGuessText();

myGuessCompare();
}
//</script>

//<script>
function myGuessSetup(){
//These lines checks to make sure a Random Photo is selected
mgp=(document.getElementById("myImg").src);
if (mgp==""){
mgpExitYesNo ="Yes"
}else{
mgpExitYesNo ="No"}

mgt=(document.getElementById("myGuessText").value);
if (mgt==""){
mgtExitYesNo ="Yes"
}else{
mgtExitYesNo ="No"}

}
//</script>


//<script>
function myGuessPhoto(){
		var str = mgp;
	var n = str.length;
var i = 0;
var di = "";
var fnrn = "";

for (i = 0; i < n; i++) {
      ch = str.charAt(i);
		
		// check if ch is a letter
//if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z'))
 	//str = idvar;
//	return;

// check if ch is a digit
if (ch >= '0' && ch <= '9')
		fnrn = fnrn + ch;
		mgp=fnrn
		}
		myGuessArray();
}
//</script>

//<script>
function myGuessArray(){
//alert (mgp + " This is function myGuessArray");

for (i in myObj) {
nuid=myObj[i].NodeUID;
if (nuid==mgp){
fnn=myObj[i].FirstNickName;
fn=myObj[i].FirstName;
nn=myObj[i].NickName
ln=myObj[i].LastName;



//fnn = fnn.toUpperCase();
 // alert(fnn);
  mgp = fnn
}else{
//do nothing
}
}
}
//</script>

//<script>
function myGuessText(){
//mgt is found at myGuessSetup
//alert(mgt);
}
//</script>

//<script>
function myGuessCompare(){
//alert("My Guess Photo = " + mgp + "   My Guess Text = " + mgt);
mgpUC = mgp.toUpperCase();
mgtUC = mgt.toUpperCase();
if (mgpUC.includes(mgtUC)==true){
//if (mgpUC==mgtUC){
alert("You're right. That is " + mgt + " \(" + fn + " " + ln + " " + nn + "\)");
}else{
alert(mgt + " is not correct. Try again or click the WhoDat? button for answer.")
}

}
//</script>



//<script>
function whoDat(){
//These lines checks to make sure a Random Photo is selected
mgp=(document.getElementById("myImg").src);
if (mgp==""){
alert("You must select Random Photo.");
return;
}else{
myGuessPhoto();}
//alert(fn + " " + nn + " " + ln)
alert("That is " + fn + " " + ln + " \(" + nn + "\)");
}
//</script>



