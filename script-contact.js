console.log("Hej html!");

async function getContactInfo(){
const response = await fetch ("contact.json");
const data = await response.json();

var contactCard = document.getElementById("contactCard");

for (let i = 0; i < data.length; i++){
contactCard.insertAdjacentHTML("afterbegin",'<div class="col-sm-4"><div class="col bg-light"><img id="coWorkers" src="assets/' + data[i].img + '" alt="Kalle Anka"><h3>'+ data[i].firstName + ' ' + data[i].lastName +'</h3><p><strong>Titel:</strong> ' + data[i].title + '</p><p><strong>E-post:</strong> ' + data[i].email + '</p><p><strong>Telefon:</strong>  ' + data[i].phone + '</p></div></div>');
}

console.log(data);
}

getContactInfo()