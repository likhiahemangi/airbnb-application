let FirstName  = document.getElementById("FirstName").value;
let Address,PostalCode,phoneNo,City,State,email;
// button=document.getElementById("signup");
//button.addEventListener("click",getinfo());

function getinfo()
{
console.log(FirstName);
Address = document.getElementById("Address").value;
PostalCode = document.getElementById("PostalCode").value;
phoneNo = parseInt(document.getElementById("phoneNo").value);
City = document.getElementById("City").value;
State = parseInt(document.getElementById("State").value);
email = document.getElementById("email").value;
place();
}


function place()
{
document.getElementById(`o_FirstName`).innerHTML=FirstName;
document.getElementById(`o_Address`).value=Address;
document.getElementById(`o_PostalCode`).value=PostalCode;
document.getElementById(`o_phoneNo`).value=phoneNo;
document.getElementById(`o_City`).value=City;
document.getElementById(`o_State`).value=State;
document.getElementById(`o_email`).value=email;
}