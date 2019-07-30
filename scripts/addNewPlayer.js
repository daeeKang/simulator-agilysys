var oldPlayerData = db.get('players').value()
var newUser = {}
var flags = {}

// creates a new user object and with their check flags
function addNewUser(){

    oldPlayerData = db.get('players').value()
    newUser = {
        "firstName": "",
        "lastName": "",
        "accountNumber": "",
        "tierLevel": "1",
        "dateOfBirth": "",
        "pointBalance": "0",
        "compBalance": "0",
        "promo2Balance": "0",
        "isBanned": "FALSE",
        "isInActive": "FALSE",
        "isPinLocked": "FALSE"
      }

    flags ={
        "firstName": false,
        "lastName": false,
        "accountNumber": false,
        "tierLevel": false,
        "dateOfBirth": false,
        "pointBalance": false,
        "compBalance": false,
        "promo2Balance": false,
    }

}

// opens new window to add a new player form
function newWindow(){
    document.getElementById('add-player').style.display = 'block'
    document.getElementById('edit-players').style.display = 'none'
    addNewUser()
    document.getElementById("save-plyr-button").disabled = true
}

// load the window back with the edit player table
function loadTable(){
    document.getElementById('add-player').style.display = 'none'
    document.getElementById('edit-players').style.display = 'block'
}

// saves the new player to the database, disables the save button and reset the new player form
function saveForm(){
    oldPlayerData.push(newUser)
    db.set('players', oldPlayerData).write()
    updateTable()
    addNewUser()
    checkFlag()
    
    document.getElementById('save-plyr').textContent = "New Player Added Successfully!";

    setTimeout(function(){
        document.getElementById('save-plyr').textContent = "";
    },3000);

    document.getElementById("plyr-form").reset();
    document.getElementById("player-data-status").innerText = "Player Data ✔️"
    isAppReady()
}


// updates the values while they change in the new player form 
function enterData(inputElement){

    switch(inputElement.name){
        case 'firstname': {
            newUser.firstName = inputElement.value
            flags.firstName = true
            checkFlag()
            break
        }
        case 'lastname': {
            newUser.lastName = inputElement.value
            flags.lastName = true
            checkFlag()
            break
        }
        case 'account-number': {
            newUser.accountNumber = inputElement.value
            flags.accountNumber = true
            checkFlag()
            break
        }
        case 'point-balance': {
            newUser.pointBalance = inputElement.value
            flags.pointBalance = true
            checkFlag()
            break
        }
        case 'tier-level': {
            newUser.tierLevel = inputElement.value
            flags.tierLevel = true
            checkFlag()
            break
        }
        case 'dob': {
            var str = inputElement.value.split("-")
            newUser.dateOfBirth = str[1] + "/" + str[2] + "/" + str[0]
            flags.dateOfBirth = true
            checkFlag()
            break
        }
        case 'comp-balance':{
            newUser.compBalance = inputElement.value
            flags.compBalance = true
            checkFlag()
            break
        }
        case 'promo-balance':{
            newUser.promo2Balance = inputElement.value
            flags.promo2Balance = true
            checkFlag()
            break
        }
        case 'isInActive':{
            newUser.isInActive = inputElement.value
            checkFlag()
            break
        }
        case 'isbanned':{
            newUser.isBanned = inputElement.value
            checkFlag()
            break
        }
        case 'isPinLocked':{
            newUser.isPinLocked = inputElement.value
            checkFlag()
            break
        }
    }
}

// check if all the form fields have been changed from the default
function checkFlag(){
    if(flags.pointBalance && flags.firstName && flags.lastName && flags.accountNumber && flags.compBalance && 
        flags.tierLevel && flags.promo2Balance && flags.dateOfBirth)
            document.getElementById("save-plyr-button").disabled = false
    else
        document.getElementById("save-plyr-button").disabled = true
    
}
