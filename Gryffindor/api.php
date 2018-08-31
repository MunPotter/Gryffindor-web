<?php

if(isset($_POST["button"])) 
{
	$classUsername=$_POST["classUsername"];
	$creatorName=$_POST["creatorName"];
	$details=$_POST["details"];
	$invitation_code=$_POST["invitation_code"];
	$name=$_POST["name"];
	
}

echo $dob.$email.$gender.$password.$type.$name;

$data = array('classUsername' => $classUsername,
    'creatorName' => $creatorName,
    'details' => $details,
    'invitation_code' =>$invitation_code,
   
    'name' => $name,);                                                                    
$data_string = json_encode($data);                                                                                   
                                                                                                                     
$ch = curl_init('http://159.65.77.215:8080/gryffindor/api/classroom/create');                                                                      
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json', 
	'Accept: */*',
    'Content-Length: ' . strlen($data_string))                                                                       
);                                                                                                                   
                                                                                                                     
$result = curl_exec($ch);

echo $result;

?>