const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = {
    RedeemOffer: function RedeemOffer(offersAvailable, accountnumber){

        if(offersAvailable === undefined)
            console.log('I am broke')

        var offerData = db.get('offers').value()
        //var playerData = db.get('players').value()
        //console.log(offerData)
        let redeemOfferResultList = []
        let transactionIDCount = db.get('transactionId').value()

        
        var j = 0
        for(let i = 0; i < offerData.length; i++){
            if(offerData[i].AccountNumber === String(accountnumber)){
                if(offerData[i].OfferCode === offersAvailable[j].OfferCode){
                    redeemOfferResultList.push(offersAvailable[j])
                    j++
                    if(offersAvailable.length === j)
                        break
                }
                    
            }
        }


        let out = {
            "AccountNumber": accountnumber,
            RedeemOfferResultList: redeemOfferResultList,
            "ResponseStatus": {
                "IsSuccess": true,
                "ErrorMessage": "",
                "ErrorCode": ""
              },
              "CustomFields": {}
        }
        return out;

    }
}