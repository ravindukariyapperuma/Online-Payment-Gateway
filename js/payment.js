
function validateMyForm()
{
var x=document.forms["paymentform"]["cardno"].value;
var y=document.forms["paymentform"]["exyear"].value;
var m=document.forms["paymentform"]["exmonth"].value;
var z=document.forms["paymentform"]["scode"].value;
var today = new Date();
var yyyy = today.getFullYear();
var mm = today.getMonth()+1;
if (x==null||x==""){
alert("Card Number must be filled out ");
return false;
}
else if (document.paymentform.cardno.value.length<16)
{alert("Your Card Number must be at lest 16 characters long");
return false;
}
if (y==null||y==""){
alert("Expiration year must be filled out");
return false;
}
if (isNaN(y) || y < yyyy) {
    alert("Your card is expair");
    return false;
}
if (m==null||m==""){
    alert("Expiration month must be filled out");
    return false;
}
if (isNaN(m) || m < 1 || m > 13) {
    alert("Input month not valid");
    return false;
}
if (y == yyyy && m <= mm){
    alert("Your card is expair");
    return false;
}
if (z==null||z==""){
alert("Security Code must be filled out ");
return false;
}
if (document.paymentform.scode.value.length<3)
{alert("Your Security code must be at more 3 or 4 characters long");
    return false;
}
//else{
//getconfirmation();
//}
}
function getconfirmation(){
var retVal=confirm("Do you want to continue ? ");
if(retVal==true){
document.write("User wants to continue !");
}
else{
document.write("User wants to continue !");
return false;
}
}
