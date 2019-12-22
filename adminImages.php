<?php 

 ?>
<html>
<body>
<a href="index.html">Main Menu</a><br>
<a href="adminMenu.php"> Admin Menu</a><br>
<h1>Administrator Images</h1><br>


<?php
$dir = "/images/";

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
      echo "filename:" . $file . "<br>";
    }
    closedir($dh);
  }
}
?>


</body>
</html>
