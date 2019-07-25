var offersData = db.get('offers').value()
var playerData = db.get('players').value()


function updateOfferTable(){
    db.read()
    offersData = db.get('offers').value()

    let offersInfo = ""
    offersInfo +=(
        "<table id='offerTable' border='1' style='width: 500px'>" + 
        "<tr><th>Player Name</th><th>Account Numvber</th> <th>Offers Available</th></tr>"
    )

    for(let i = 0; i < playerData.length; i++){
        offersInfo +=(
            "<tr><td>"+playerData[i].firstName +" "+playerData[i].lastName +"</td>" +
            "<td>"+playerData[i].accountNumber+"</td>"+
            "<td><button class='button button2' id='edit-playerOffers' onclick='viewPlayerOffers("+i+")' >View Offers</button></td></tr>"
            // "<td><label for='offers'>View Offers</label> <input type='checkbox' name='offersToggle' id='offersToggle' data-toggle='toggle'></td> </tr>"+
            // "<tbody class='hide'> <tr> <td>"+offersData[i]+"</td></tr></tbody>"
        )
    }

    offersInfo += "</table>"
    document.getElementById('editOffer').innerHTML = offersInfo

}

function viewPlayerOffers(i){
    playerOffersTable()
    

}

function searchOfferTable(input){
    //filterOfferTable(input.value)
}

function filterOfferTable(value){

    let offersInfo = ""
    offersInfo +=(
        "<table id='offerTable' border='1' style='width: 500px'>" + 
        "<tr><th>Player Name</th><th>Account Numvber</th> <th>Offers Available</th></tr>"
    )

    for(let i = 0; i < playerData.length; i++){
        if(playerData[i].accountNumber.includes(value) || playerData[i].firstName.toLowerCase().includes(value.toLowerCase()) || playerData[i].lastName.toLowerCase().includes(value.toLowerCase())){
            offersInfo +=(
                "<tr><td>"+playerData[i].firstName +" "+playerData[i].lastName +"</td>" +
                "<td>"+playerData[i].accountNumber+"</td>"+
                "<td><button class='button button2' id='edit-playerOffers' onclick='viewPlayerOffers("+i+")' >View Offers</button></td></tr>"
            )
        }    
    }

    offersInfo += "</table>"
    document.getElementById('editOffer').innerHTML = offersInfo
}

function writeOfferData(){

}

function playerOffersTable(){
    document.getElementById('edit-offers').style.display = 'block'
    document.getElementById('main-page').style.display = 'none'
    document.getElementById('settings-button').style.visibility = 'hidden'
}


function editOfferData(){
    updateOfferTable()
    document.getElementById('edit-offers').style.display = 'block'
    document.getElementById('main-page').style.display = 'none'
    document.getElementById('settings-button').style.visibility = 'hidden'
    // document.getElementById('offerDataSaved').textContent = ""
}

function loadOfferMain(){
    updateOfferTable()
    document.getElementById('edit-offers').style.display = 'none'
    document.getElementById('main-page').style.display = 'block'
    document.getElementById('settings-button').style.visibility = 'visible'
}

// $(document).ready(function() {
// 	$('[data-toggle="toggle"]').change(function(){
// 		$(this).parents().next('.hide').toggle();
// 	});
// });