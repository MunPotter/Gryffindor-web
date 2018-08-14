<?php

if(isset($_POST["button"])) 
{
	$dob=$_POST["dateOfBirth"];
	$email=$_POST["email"];
	$gender=$_POST["gender"];
	$password=$_POST["password"];
	$type=$_POST["type"];
	$name=$_POST["username"];
}

echo $dob.$email.$gender.$password.$type.$name;

$data = array('dateOfBirth' => $dob,
    'email' => $email,
    'gender' => $gender,
    'password' => $password,
    'status'=> 'pending',
    'type' => $type,
    'username' => $name,);                                                                    
$data_string = json_encode($data);                                                                                   
                                                                                                                     
$ch = curl_init('http://159.65.77.215:8080/gryffindor/api/user/create');                                                                      
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