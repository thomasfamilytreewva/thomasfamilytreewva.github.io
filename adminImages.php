
<?php
$dir = "images/";
$arrayPngFiles = array();
$arrlength = count($arrayPngFiles);

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
	  $i=0;
    while (($file = readdir($dh)) !== false){
     // echo "filename:" . $file . "<br>";
	 
	 $str = $file;
	 if (strpos($str, '.png') !== false) {
	 // $arrayPngFiles[$i] = $file;
	//  $i=$i++;
	  array_push($arrayPngFiles,$file);
	 // echo ($arrayPngFiles[$i]);
	 }
    }
	
   closedir($dh);
  }
}

 $arrayPngFiles = json_encode($arrayPngFiles);
echo $arrayPngFiles;  


?>
