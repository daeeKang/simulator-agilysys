const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = {
    RedeemOffer: function RedeemOffer(offersAvailable, accountnumber){

        if(offersAvailable === undefined)
            console.log('I am broke')

        var offerData = db.get('offers').value()
        console.log(offerData)
        let redeemOfferResultList = []
        let transactionIdCount = db.get('transactionId').value()

        var j = 0
        for(let i = 0; i < offerData.length; i++){
            if(offerData[i].AccountNumber === String(accountnumber)){
                if(offerData[i].OfferCode === offersAvailable[j].OfferCode){
                    redeemOfferResultList.push(offersAvailable[j])
                    var removed = offerData.splice(i,1)
                    console.log(removed)
                    db.set('offers', offerData).write()
                    j++
                    if(offersAvailable.length === j)
                        break
                }
            }
        }

        var responseStatus = {"IsSuccess": true, "ErrorMessage": "", "ErrorCode": ""}

        for(let i = 0; i < redeemOfferResultList.length; i++){
            transactionIdCount++;
            db.set('transactionId', transactionIdCount).write()
            redeemOfferResultList[i].TransactionId = transactionIdCount
            redeemOfferResultList[i].ResponseStatus = responseStatus
        }

        let out = {
            "AccountNumber": accountnumber,
            RedeemOfferResultList: redeemOfferResultList,
            "ResponseStatus": responseStatus,
              "CustomFields": {}
        }

        return out;

    }
}