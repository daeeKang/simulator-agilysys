var offerData = db.get('offers').value()
var newOffer = {}
var offerFlags = {}

function addNewOffer(){

    newOffer = {
        "AccountNumber": "",
        "OfferCode": "",
        "OfferName": "",
        "OfferValue": "",
        "OfferStartDate": "",
        "OfferEndDate": ""
      }

    offerFlags = {
        "AccountNumber": false,
        "OfferCode": false,
        "OfferName": false,
        "OfferValue": false,
        "OfferStartDate": false,
        "OfferStartTime": false,
        "OfferEndDate": false,
        "OfferEndTime": false
    }
}


function loadAddOffer(){
    document.getElementById('add-offer').style.display = 'block'
    document.getElementById('edit-offers').style.display = 'none'
    addNewOffer()
    // document.getElementById("save-offer-button").disabled = true
}

function loadAddOfferMain(){
    document.getElementById('add-offer').style.display = 'none'
    document.getElementById('edit-offers').style.display = 'block'

}

function saveNewOffer(inputElement){

    
}

function enterNewOffer(inputElement){
    switch(inputElement.name){
        case 'offerAccountNumber':{
            newOffer.AccountNumber = inputElement.value
            offerFlags.AccountNumber = true
            checkOfferFlags()
            break
        }
        case 'newOfferCode':{
            newOffer.OfferCode = inputElement.value
            offerFlags.OfferCode = true
            checkOfferFlags()
            break
        }
        case 'newOfferName':{
            newOffer.OfferName = inputElement.value
            offerFlags.OfferName = true
            checkOfferFlags()
            break
        }
        case 'newOfferValue':{
            newOffer.OfferValue = inputElement.value
            offerFlags.OfferValue = true
            checkOfferFlags()
            break
        }
        case 'offerStartDate':{
            newOffer.OfferStartDate = inputElement.value
            offerFlags.OfferStartDate = true
            checkOfferFlags()
            break
        }
        case 'offerStartTime':{
            // newOffer.AccountNumber = inputElement.value
            // offerFlags.offerFlags = true
            // checkOfferFlags()
            break
        }
        case 'offerEndDate':{
            newOffer.OfferEndDate = inputElement.value
            offerFlags.OfferEndDate = true
            checkOfferFlags()
            break
        }
        case 'offerEndTime':{
            // newOffer.AccountNumber = inputElement.value
            // offerFlags.offerFlags = true
            // checkOfferFlags()
            break
        }

    }
}

function checkOfferFlags(){
    if(offerFlags.AccountNumber && offerFlags.OfferCode && offerFlags.OfferName && 
        offerFlags.OfferValue && offerFlags.OfferStartDate && offerFlags.OfferStartTime && 
        offerFlags.OfferEndDate && offerFlags.OfferEndTime){
            
        }


}



