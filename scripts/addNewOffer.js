var oldOfferData = db.get('offers').value()
var newOffer = {}
var offerFlags = {}
var startTime = "00:00", endTime = "23:59"


// creates new object for the new offer and check flags
function addNewOffer(){
    
    oldOfferData = db.get('offers').value()
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
        "OfferEndDate": false
    }
}

// loading add offer window
function loadAddOffer(){
    document.getElementById('add-offer').style.display = 'block'
    document.getElementById('edit-offers').style.display = 'none'
    addNewOffer()
    document.getElementById("save-offer-button").disabled = true
}

// loading back "edit offer window"
function loadAddOfferMain(){
    document.getElementById('add-offer').style.display = 'none'
    document.getElementById('edit-offers').style.display = 'block'

}

// saves the new offer added to the offers array
function saveNewOffer(inputElement){
    oldOfferData.push(newOffer)
    db.set('offers', oldOfferData).write()
    updateOfferTable()
    addNewOffer()
    checkOfferFlags()

    document.getElementById('save-new-offer').textContent = "New Offer Added Successfully!";
    setTimeout(function(){
        document.getElementById('save-new-offer').textContent = "";
    },3000);

    document.getElementById("offer-form").reset();
    document.getElementById("offer-data-status").innerText = "Offer Data ✔️"
    isAppReady()
}

// updates the values added in the form based on their names. In a switch statement
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
            var str = inputElement.value.split("-")
            newOffer.OfferStartDate = str[1] + "/" + str[2] + "/" + str[0]
            offerFlags.OfferStartDate = true
            checkOfferFlags()
            break
        }
        case 'offerStartTime':{
            startTime = inputElement.value
            //offerFlags.OfferStartTime = true
            checkOfferFlags()
            break
        }
        case 'offerEndDate':{
            var str = inputElement.value.split("-")
            newOffer.OfferEndDate = str[1] + "/" + str[2] + "/" + str[0]
            offerFlags.OfferEndDate = true
            checkOfferFlags()
            break
        }
        case 'offerEndTime':{
            endTime = inputElement.value
            checkOfferFlags()
            break
        }

    }
}

// checks if all the field in the form are not changed
function checkOfferFlags(){
    if(offerFlags.AccountNumber && offerFlags.OfferCode && offerFlags.OfferName && 
        offerFlags.OfferValue && offerFlags.OfferStartDate  && offerFlags.OfferEndDate)
            document.getElementById("save-offer-button").disabled = false
    else
        document.getElementById("save-offer-button").disabled = true
}

// combines the offer dates with the offer times
function updateOfferTimes(){
    newOffer.OfferStartDate +=  " " + startTime + ":00"
    newOffer.OfferEndDate += " " + endTime + ":00"
}



