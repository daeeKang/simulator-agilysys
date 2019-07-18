const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = {
    RedeemOffer: function RedeemOffer(offersAvailable, accountnumber){

        db.read()
        let offerData = []
        offerData = db.get('offers').value()

        let redeemOfferResultList = []
        let transactionIdCount = db.get('transactionId').value()

        var isSuccess = false
        var errorCode = "", errorMessage = ""

        //var ResponseStatus = {IsSuccess: false, ErrorMessage: "", ErrorCode: ""}


        var j = 0

        while(j < offersAvailable.length){

            for(let i = 0; i < offerData.length; i++){
                if(offerData[i].AccountNumber === String(accountnumber)){

                    if(offerData[i].OfferCode === offersAvailable[j].OfferCode){
                        redeemOfferResultList.push(offersAvailable[j])
                        console.log("i am not here")
                        console.log(redeemOfferResultList[j])

                        offerData.splice(i,1)
                        //offersAvailable.splice(j,1)

                        //console.log(removed)
                        db.set('offers', offerData).write()

                        redeemOfferResultList[j].ResponseStatus.IsSuccess = true  // offer found and ready to redeem
                        redeemOfferResultList[j].ResponseStatus.ErrorMessage = ""
                        redeemOfferResultList[j].ResponseStatus.ErrorCode = ""

                        transactionIdCount++;
                        db.set('transactionId', transactionIdCount).write()
                        redeemOfferResultList[j].TransactionId = transactionIdCount
                        //redeemOfferResultList[j].ResponseStatus = responseStatus

                        j++
                        i = 0
                    }
                }
                if(offersAvailable.length === j)
                    break
            }

            if(offersAvailable.length === j)
                break   

            redeemOfferResultList.push(offersAvailable[j])
            console.log("i am here")
            console.log(redeemOfferResultList[j])

            redeemOfferResultList[j].ResponseStatus.IsSuccess = false  // offer found and ready to redeem
            redeemOfferResultList[j].ResponseStatus.ErrorMessage = "Offer Not Found"
            redeemOfferResultList[j].ResponseStatus.ErrorCode = "XXXX"

            transactionIdCount++;
            db.set('transactionId', transactionIdCount).write()
            redeemOfferResultList[j].TransactionId = transactionIdCount
            redeemOfferResultList[j].ResponseStatus = responseStatus

            j++

        }

        // if(offersAvailable.length != j){
        //     responseStatus.IsSuccess = false  // offer found and ready to redeem
        //     responseStatus.ErrorMessage = "No Offer Found"
        //     responseStatus.ErrorCode = "#XXXXXX"
        // }
        
        // for(let i = 0; i < redeemOfferResultList.length; i++){
        //     transactionIdCount++;
        //     db.set('transactionId', transactionIdCount).write()
        //     redeemOfferResultList[i].TransactionId = transactionIdCount
        //     redeemOfferResultList[i].ResponseStatus = responseStatus
        // }

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