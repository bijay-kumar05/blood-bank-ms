/* Donor Register */

const donorForm=document.getElementById("donorForm");

if(donorForm){

donorForm.addEventListener("submit",function(e){

e.preventDefault();

fetch("http://localhost:3000/add-donor",{

method:"POST",
headers:{"Content-Type":"application/json"},

body:JSON.stringify({

name:document.getElementById("name").value,
age:document.getElementById("age").value,
blood_group:document.getElementById("blood").value,
city:document.getElementById("city").value,
contact:document.getElementById("contact").value

})

})

.then(res=>res.text())
.then(data=>alert(data));

});
}


/* Blood Request */

const requestForm=document.getElementById("requestForm");

if(requestForm){

requestForm.addEventListener("submit",function(e){

e.preventDefault();

fetch("http://localhost:3000/request-blood",{

method:"POST",
headers:{"Content-Type":"application/json"},

body:JSON.stringify({

patient_name:document.getElementById("patient").value,
blood_group:document.getElementById("bloodgroup").value,
units:document.getElementById("units").value,
hospital:document.getElementById("hospital").value,
contact:document.getElementById("contact").value

})

})

.then(res=>res.text())
.then(data=>alert(data));

});
}


/* Search Donor */

function searchDonor(){

const blood=document.getElementById("searchBlood").value;

fetch(`http://localhost:3000/search/${blood}`)

.then(res=>res.json())

.then(data=>{

let output="";

data.forEach(donor=>{

output+=`
<tr>
<td>${donor.name}</td>
<td>${donor.blood_group}</td>
<td>${donor.city}</td>
<td>${donor.contact}</td>
</tr>
`;

});

document.getElementById("result").innerHTML=output;

});

}

