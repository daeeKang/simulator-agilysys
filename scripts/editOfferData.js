var offersData = db.get('offers').value()
var playerData = db.get('players').value()
let offersInfo = ""

// let mergedData = []

function updateOfferTable(){
    db.read()
    offersData = db.get('offers').value()

    // let offersInfo = ""
    offersInfo +=(
        "<table id='offerTable' border='1' style='width: 500px'>" + 
        "<tr><th>Player Name</th><th>Account Number</th> <th>Offers Available</th></tr>"
    )

    for(let i = 0; i < playerData.length; i++){
        offersInfo +=(

            "<table id='offerTable"+i+"' border='1' style='width: 500px'>" + 
        //    "<tr><th>Player Name</th><th>Account Number</th> <th>Offers Available</th></tr>"+
    

            "<tr><td>"+playerData[i].firstName +" "+playerData[i].lastName +"</td>" +
            "<td>"+playerData[i].accountNumber+"</td>"+
<<<<<<< Updated upstream
            "<td><button class='button button2' id='edit-playerOffers' data-toggle='modal' data-target='.bd-example-modal-lg' onclick='viewPlayerOffers("+i+")' >View Offers</button></td></tr>"
            // "<td><label for='offers'>View Offers</label> <input type='checkbox' name='offersToggle' id='offersToggle' data-toggle='toggle'></td> </tr>"+
            // "<tbody class='hide'> <tr> <td>"+offersData[i]+"</td></tr></tbody>"
=======
            "<td><button class='button button2' data-toggle='collapse' id='edit-playerOffers' data-target='#collapseExample"+i+"' aria-expanded='false' aria-controls='collapseExample' onclick='viewPlayerOffers("+i+")' >View Offers</button></td></tr>"+
            //"<td><label for='offers'>View Offers</label> <input type='checkbox' name='offersToggle' id='offersToggle' data-toggle='toggle'></td> </tr>"+
            //"<tbody class='hide'> <tr> <td>"+offersData[i]+"</td></tr></tbody>"
            "</table>"+

            "<div class='collapse' id='collapseExample"+i+"' >"+
                "<div class='card card-body'>"+
                "<td><input type='text2' border='1' name='offerCode' value='Hey'></input></td>"+
            "</div> </div>"

>>>>>>> Stashed changes
        )
    }

     offersInfo += "</table>"
    document.getElementById('editOffer').innerHTML = offersInfo

}

function viewPlayerOffers(i){
    
    // playerOffersTable()
    for(var j = 0; j < offersData.length; j++){
        if(playerData[i].accountNumber === offersData[j].AccountNumber){
            console.log("here")
            offersInfo+=(
                "<tr id='collapse"+i+"' class='panel-collapse collapse"+i+"' >"+
                "<td ><input type='text' value='"+offersData[j].offerCode+"'></input></td>"+
                "<td ><input type='text' value='"+offersData[j].offerName+"'></input></td>"+
                "<td ><input type='text' value='"+offersData[j].offerValue+"'></input></td></tr>"
            )
            document.getElementById('editOffer').innerHTML = offersInfo
        }
    }
    

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
    //updateOfferTable()
    document.getElementById('edit-offers').style.display = 'none'
    document.getElementById('main-page').style.display = 'block'
    document.getElementById('settings-button').style.visibility = 'visible'
}

// $(document).ready(function() {
// 	$('[data-toggle="toggle"]').change(function(){
// 		$(this).parents().next('.hide').toggle();
// 	});
// });
<<<<<<< Updated upstream
=======


// function mergeData(){

//     for(var j = 0; j < playerData.length; j++){
//       if(playerData[i].accountNumber === offersData[i].accountNumber){
//         var merge= playerData[i]
        
//       }
//     }
//   }
>>>>>>> Stashed changes
