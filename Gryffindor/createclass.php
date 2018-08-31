<?php

require('verify.php');
//$data=NULL;
$output;
if(isset($_POST["button"])) {
	$data = array(
	//'dateOfBirth' => $_POST["dateOfBirth"],
    //'email' => $_POST["email"],
    //'gender' => $_POST["gender"],
    //'password' => $_POST["password"],
    //'status'=> 'pending',
    //'type' => $_POST["type"],
    'classUsername' => $_POST["classUsername"],
    'creatorName' => $_POST["creatorName"],
    'details' => $_POST["details"],
    'invitation_code' => $_POST["invitation_code"],
    'name' => $_POST["name"],);

  $output = json_decode(getServerResponse($data,'http://159.65.77.215:8080/gryffindor/api/classroom/create'));
 
  if($output->{'success'}=='true'){
    
    
    echo '<script>';
        echo 'var timer = setTimeout(function() {';
        echo ' window.location="teacherhome.php"';
        echo '}, 1)';
    echo '</script>';  
  //}
  }
  else {
    echo 'login failed. You will be redirected to reg page'; 
    echo '<script>';
        echo 'var timer = setTimeout(function() {';
        echo ' window.location="createclass.php"';
        echo '}, 1)';
    echo '</script>';  
  }
}

	
	/*echo (getServerResponse($data,'http://159.65.77.215:8080/gryffindor/api/user/create'));
  echo $output;
	if($output['success']=='true'){
		
		echo 'reg successful';
    echo '<script>';
        echo 'var timer = setTimeout(function() {';
        echo ' window.location="login.php"';
        echo '}, 1)';
    echo '</script>'; 
	}
	else {
		echo 'reg failed. You will be redirected to reg page'; 
		 echo '<script>';
        echo 'var timer = setTimeout(function() {';
        echo ' window.location="registration.php"';
        echo '}, 1)';
		echo '</script>';  
	}
}*/

else {

?>

<!DOCTYPE html>
<html>
<head>
	 <title>GRYFFINDOR E learning registration</title>
   <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
<!--===============================================================================================-->  
  <link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="fonts/Linearicons-Free-v1.0.0/icon-font.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/animate/animate.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css">
<!--===============================================================================================-->  
  <link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css">
<!--===============================================================================================-->
  <link rel="stylesheet" type="text/css" href="css/util.css">
  <link rel="stylesheet" type="text/css" href="css/main.css">
<!--===============================================================================================-->

  <link rel="stylesheet" type="text/css" href="{{url('css/bootstrap.css')}}">
  <link rel="stylesheet" type="text/css" href="{{url('css/jquery-ui.css')}}">
  <link rel="stylesheet" type="text/css" href="{{url('css/style.css')}}">
   <link rel="stylesheet" type="text/css" href="reg.css">
 

  
</head>
<body>
    <div class="container-login100">



<div class="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
        
          
            
            
<div class="container">

  <form class="form-horizontal" method="POST" action="">
  <fieldset>
    <span class="login100-form-title p-b-32">
            Create Class
          </span>

    <div class="form-group">
      <label for="inputUserName" class="col-lg-2 control-label">User Name</label>

      <div class="col-lg-6">
        <input type="text" name="classUsername" class="form-control" id="inputUserName" placeholder="Enter Class User Name">
      
       </div>
    </div>

      

    <div class="form-group">
      <label for="inputPassword" class="col-lg-2 control-label">Creator Name</label>
      <div class="col-lg-6">
        <input type="text" name="creatorName" class="form-control" id="inputPassword" placeholder="Enter creator Name">
       
      </div>
    </div>


     <div class="form-group">
      <label for="inputPassword" class="col-lg-2 control-label">details</label>
      <div class="col-lg-6">
        <input type="text" name="details" class="form-control" id="inputPassword" placeholder="Enter creator Name">
       
      </div>
    </div>

<div class="form-group">
      <label for="inputUserName" class="col-lg-2 control-label">code</label>

      <div class="col-lg-6">
        <input type="text" name="invitation_code" class="form-control" id="inputUserName" placeholder="Enter code">
      
       </div>
    </div>

    <div class="form-group">
      <label for="inputUserName" class="col-lg-2 control-label">Class Name</label>

      <div class="col-lg-6">
        <input type="text" name="name" class="form-control" id="inputUserName" placeholder="Enter Class User Name">
      
       </div>
    </div>








    

    <div class="form-group">
      <div class="col-lg-6 col-lg-offset-2">
        <button type="reset" class="btn btn-default">Cancel</button>
        <button type="submit" name ="button" class="btn btn-primary">Submit</button>
      </div>
      
      
    </div>
  </fieldset>
</form>
</div>
</div>


         

          

        
      </div>





<!--===============================================================================================-->
  <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/animsition/js/animsition.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/bootstrap/js/popper.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/select2/select2.min.js"></script>
<!--===============================================================================================-->
  <script src="vendor/daterangepicker/moment.min.js"></script>
  <script src="vendor/daterangepicker/daterangepicker.js"></script>
<!--===============================================================================================-->
  <script src="vendor/countdowntime/countdowntime.js"></script>
<!--===============================================================================================-->
  <script src="js/main.js"></script>
  <script type="text/javascript"scr="{{url('js/jquery-3.1.0.js')}}"></script>
  <script type="text/javascript"scr="{{url('js/bootstrap.js')}}"></script>
  <script type="text/javascript"scr="{{url('js/jquery-ui.js')}}"></script>
</body>
</html>
<?php

}

?>