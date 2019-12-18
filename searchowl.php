<?php
/* 08 Jan 2019

000WebHost Settings*/
$servername = "localhost";
$username = "id4184148_localhost";
$password = "We135711!";
$dbname = "id4184148_testdatabase";



/*
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testdatabase";
*/
$lastnamevar = 'Thomas';
$idvar = 1;
$query = "Angela";





// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection



?>
 
<html>
<head>
    <title>Search results</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <!--<link rel="stylesheet" type="text/css" href="style.css"/>-->
	
	
	
</head>


<body>
<a href="index.html">Main Menu</a><br>	
<a href="familymemberinfo.php">Search For Another Family Member</a><br>	


<br>
<div id='imageholder'>
<p></p>
</div>


<br>
<div id='ajax'>
<p></p>
</div>

<?php


    $query = $_GET['query']; 
    // gets value sent over search form
	
	//echo $query . "<br>";
    $query = trim($query);
	
	  $query = htmlspecialchars($query); 
        // changes characters used in html to their equivalents, for example: < to &gt;
         
    //   $query = mysqli_real_escape_string($query);
        // makes sure nobody uses SQL injection


//This sql searches all name fields (First, Middle, Maiden, Last, Nick)
//but it displays too many rows when search criteria is "Thomas"
//because most family members have the last name of "Thomas"
//$sql = "SELECT * FROM testtable WHERE Firstname LIKE '%".$query."%' 
//or MiddleName LIKE '%".$query."%' or MaidenName LIKE '%".$query."%'
//or NickName LIKE '%".$query."%' or LastName LIKE '%".$query."%' Order by FirstName";

$sql = "SELECT * FROM testtable WHERE Firstname LIKE '%".$query."%' 
or NickName LIKE '%".$query."%'";


$raw_results = mysqli_query($conn, $sql) or die ("failed MW");
//mysqli_close($conn);

//echo "<table border = '1'>";
echo "<table id='mytable' border='1'>";
echo "<tr><td>ID</td><td>First Name</td><td>Middle Name</td><td>Maiden Name</td>
<td>Last Name</td><td>Nick Name</td></tr>";
while ($row = mysqli_fetch_assoc($raw_results)){
	echo "<tr><td>{$row['NodeUID']}</td><td>{$row['FirstName']}</td><td>{$row['MiddleName']}</td>
	<td>{$row['MaidenName']}</td><td>{$row['LastName']}</td><td>{$row['NickName']}</td></tr>";
}



$rowcount=mysqli_num_rows($raw_results);
//echo ($rowcount);

if ($rowcount == 0) {
	echo ("No family member has First Name or Nick Name " . $query);
	echo ("");
}else{
echo ("Click on member's name below for info");
echo  nl2br("\n-----------------------------------------------------");
}

echo "</Table>";


        
?>


<script>

idvar = "";




function showPhoto(){
	var urlvar = "";
	//alert (idvar);
	//var repImage = '<img src="images/30.png" alt="Image alt">'; 
	//var repImage = '<img src="images/" + 29 + "tom.png" alt="Image alt">'; 
	// urlvar = "images/29.png";
	urlvar = ("images/" + idvar + ".png");
	  
	// var repImage = "<img src=' " + urlvar + " '>"
	 var repImage = "<img src=' " + urlvar + " '>";
	
	document.getElementById("imageholder").innerHTML= repImage;
	
	
	}








     function showUser() {
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



            var table = document.getElementById('mytable');
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
						
						idvar = (this.cells[0].innerHTML);
						showUser();
						showPhoto();
						 idvar = "";
						       };
							   
                }
				
 
         </script>






</body>

</html>