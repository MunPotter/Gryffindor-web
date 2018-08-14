<?php

function getServerResponse($data=NULL,$url) {

	if($data!=NULL){
	$data_string = json_encode($data);                                                                                   
			
			
	$ch = curl_init($url);                                                                      
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
	curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
    'Content-Type: application/json', 
	'Accept: */*',
   )                                                                       
);                                                                                                                         
																														 
	$result = curl_exec($ch);

	//curl_close($ch);
	}

	else {
		$result=NULL;
	}

return $result;

}

?>