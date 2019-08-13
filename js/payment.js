
function validateMyForm()
{
var x=document.forms["paymentform"]["cardno"].value;
var y=document.forms["paymentform"]["exday"].value;
var z=document.forms["paymentform"]["scode"].value;
if (x==null||x==""){
alert("Card Number must be filled out ");
return false;
}
else if (document.paymentform.cardno.value.length<16)
{alert("Your Card Number must be at lest 10 characters long");
return false;
}
if (y==null||y==""){
alert("Expiration date must be filled out ");
return false;
}
if (z==null||z==""){
alert("Security Code must be filled out ");
return false;
}
else{
getconfirmation();
}
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
