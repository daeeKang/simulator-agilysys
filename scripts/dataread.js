const { remote } = require('electron')
const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

var players = []
var offers = []

//there needs to be more logical shit here but we don't know the conditions so just leave this for now.

//opens window to select file to download mock data
function openPlayers(){
    let dialog = remote.dialog
    dialog.showOpenDialog({
        title: 'Open Mock Data',
        filters: [
            {name: 'csv', extensions: ['csv']}
        ]
    }, (fileName) => {
        if(fileName === undefined){
            return;
        } 
        console.log(fileName)
 
        csv(['firstName', 'lastName', 'accountNumber', 'tierLevel', 'dateOfBirth', 'pointBalance', 'compBalance', 'promo2Balance', 'isBanned', 'isInActive', 'isPinLocked'])
        fs.createReadStream(fileName[0])
        .pipe(csv())
        .on('data', (data) => {
            players.push(data)
        })
        .on('end' , () => {
            fs.writeFile(path.join('./data.json'), JSON.stringify(players), 'utf8', function(err){
                if(err) console.log(err); 
            })
        })
        document.getElementById("player-data-status").innerText = "Player Data ✔️"
    })
}

function openOffers(){
    csv(['AccountNumber', 'OfferCode', 'OfferName', 'OfferValue', 'OfferStartDate', 'OfferEndDate'])
    let dialog = remote.dialog
    dialog.showOpenDialog({
        title: 'Open Mock Data',
        filters: [
            {name: 'csv', extensions: ['csv']}
        ]
    }, (fileName) => {
        if(fileName === undefined){
            return;
        } 
        fs.createReadStream(fileName[0])
        .pipe(csv())
        .on('data', (data) => {
            offers.push(data)
        })
        .on('end' , () => {
            fs.writeFile(path.join('./offers.json'), JSON.stringify(offers), 'utf8', function(err){
                if(err) console.log(err); 
            })
        })
        document.getElementById("offer-data-status").innerText = "Offer Data ✔️"
    })
}


//read in mock data and seperate into objects and then into an array and then write it to data.json
function parseCSVData(file, type) {
    switch(type){
        case 'player-data':
            csv(['firstName', 'lastName', 'accountNumber', 'tierLevel', 'pointBalance', 'compBalance', 'promo2Balance', 'isBanned', 'isInActive', 'isPinLocked'])
            break
        case 'offer-data':
            csv(['AccountNumber', 'OfferCode', 'OfferName', 'OfferValue', 'OfferStartDate', 'OfferEndDate'])
            break
    }

    let dataArray

     fs.createReadStream(file)
        .pipe(csv())
        .on('data', (data) => {
            dataArray.push(data)
        })
        .on('end' , () => {
            switch(type){
                case 'player-data':
                    players = dataArray
                    fs.writeFile(path.join('./data.json'), JSON.stringify(players), 'utf8', function(err){
                        if(err){ 
                                console.log(err); 
                        } else {
                        }})
                    break
                case 'offer-data':
                    console.log(' in here')
                    offers = dataArray
                    fs.writeFile(path.join('./offers.json'), JSON.stringify(offers), 'utf8', function(err){
                        if(err){ 
                                console.log(err); 
                        } else {
                        }})
                    break
            }
        })
}

//checks to see if foundAccount.json has updated, meaning that there was a query and result was found
fs.watchFile(path.join('./foundAccount.json'), (curr, prev) => {
    console.log('file changed')
    file = fs.readFileSync('./data.json')

    let foundAccount = JSON.parse(fs.readFileSync(path.join('./foundAccount.json')), 'utf8')
    console.log(foundAccount)
    //display results onto electron window

    document.getElementById('player-data').innerHTML = (
        "<b> Account Number: </b>" + foundAccount.accountNumber + "</br>" +
        "<b> Name: </b>" + foundAccount.firstName + " " + foundAccount.lastName + "</br>" +
        "<b> Point Balance: </b>" + foundAccount.pointBalance + "</br>" +
        "<b> Tier Level: </b>" + foundAccount.tierLevel + "</br>"
    )
    

    let offerHTML = "<h1>Offers:</h1>"
    offers.forEach(offer => {
        if(offer.AccountNumber == foundAccount.accountNumber){
            offerHTML += (
                "<div>" +
                    "<p>" + offer.OfferCode + "</p>" +
                    "<p>" + offer.OfferName + "</p>" +
                    "<p>" + offer.OfferValue + "</p>" +
                    "<p>" + offer.OfferStartDate + "</p>" +
                    "<p>" + offer.OfferEndDate + "</p>" +
                "</div></br></br>"
            )
        }
    });

    console.log(offerHTML)
    document.getElementById('offer-data').innerHTML = offerHTML
    
    fs.truncate(path.join('./foundAccount.json'), 0, (err) => {
        if(err) throw err;
      })
})

//checks to see if files were already uploaded and stored locally
function checkUploaded() {
    console.log('here')
    fs.access(path.join('./data.json'), fs.constants.F_OK, (err) => {
        if (err) {
            document.getElementById('player-data-status').textContent = "Player Data ❌"
        } else {
            document.getElementById('player-data-status').textContent = "Player Data ✔️"

            players = JSON.parse(fs.readFileSync(path.join('./data.json'),'utf8'))
        }
    })

    fs.access(path.join('./offers.json'), fs.constants.F_OK, (err) => {
        if (err) {
            document.getElementById('offer-data-status').textContent = "Offer Data ❌"
        } else {
            document.getElementById('offer-data-status').textContent = "Offer Data ✔️"

            offers = JSON.parse(fs.readFileSync(path.join('./offers.json'),'utf8'))
        }
    })
}
