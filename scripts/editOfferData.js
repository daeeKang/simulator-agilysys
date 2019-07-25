var offersData = db.get('offers').value()


function updateOfferTable(){
    db.read()
    offersData = db.get('offers').value()
    
}

function searchOfferTable(){

}

function writeOfferData(){

}


function editOfferData(){
    document.getElementById('edit-offers').style.display = 'block'
    document.getElementById('main-page').style.display = 'none'
    document.getElementById('settings-button').style.visibility = 'hidden'
    // document.getElementById('offerDataSaved').textContent = ""
}

function loadOfferMain(){
    document.getElementById('edit-offers').style.display = 'none'
    document.getElementById('main-page').style.display = 'block'
    document.getElementById('settings-button').style.visibility = 'visible'
}