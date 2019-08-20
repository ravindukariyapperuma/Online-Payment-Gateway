<?php
$cardno = $_POST['cardno']; //? $_POST['cardno'] : null ;
$exday_year = $_POST['exyear']; //? $_POST['exday_year'] : null;
$exday_month = $_POST['exmonth'];
$scode =  $_POST['scode'];
$amount = 2.00;

$con = mysqli_connect("localhost","root","","ehelp");

// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

if(isset($cardno) && isset($exday_year) && isset($exday_month) && isset($scode)){
    $sql = "INSERT INTO payments (card_number, expiration_year, expiration_month, security_code, amount)
              VALUES ($cardno, $exday_year, $exday_month, $scode, $amount)";

    if ($con->query($sql) === TRUE) {
        //echo "Your Registration successfully";
        header("location:home.html");

    } else {
        echo "Error: " . $sql . "<br>" . $con->error;
    }


}else{
    echo "validation error";
}


//$sql1 = "SELECT id, card_number, amount FROM payments";
//$result = $con->query($sql1);
//if ($result->num_rows > 0) {
// output data of each row
//while($row = $result->fetch_assoc()) {
//echo "id: " . $row["id"]. " - Card: " . $row["card_number"]. " " . $row["amount"]. "<br>";
//}
//} else {
// echo "0 results";
//}

?>
