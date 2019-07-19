var couponData = db.get('coupons').value()


function updateCouponTable(){
    var couponData = db.get('coupons').value()
    console.log(couponData)
    let accountInfo = ""
    accountInfo +=(
        "<table id='couponTable' border='1' width='700'>" + 
        "<tr><th>Coupon Number</th><th>Redeem Amount</th></tr>"
    )

    for(let i = 0; i < couponData.length; i++){
        accountInfo+=(
            "<tr><td> <input type='text' name='couponNumber' class='input input1' value ='" +couponData[i].CouponNumber +"'onchange='swapCouponValues(this,"+i+")'"+"</td>" +
            "<td> <input type='text' name='redeemAccount' class='input input1' value='"+couponData[i].RedeemAmount +"'onchange='swapCouponValues(this,"+i+")'"+"</td></tr>"
        )
        
    }

    accountInfo += "</table>"
    document.getElementById('editCoupon').innerHTML = accountInfo
}

function swapCouponValues(tableElement, i){

    if(tableElement.name === 'couponNumber'){
        couponData[i].CouponNumber = tableElement.value
    }
    else if(tableElement.name === 'redeemAccount'){
        couponData[i].RedeemAmount = tableElement.value
    }

}

function writeCoupons(){
    db.set('coupons', couponData).write()
    document.getElementById('couponDataSaved').textContent = "Data Saved Successfully!"
    console.log(couponData)
}

function editCouponData(){
    updateCouponTable()
    document.getElementById('edit-coupons').style.display = 'block'
    document.getElementById('main-page').style.display = 'none'
    document.getElementById('settings-button').style.visibility = 'hidden'
    //document.getElementById('dataSaved').textContent = ""
  }


function loadCouponMain(){
    updateCouponTable()
    document.getElementById('edit-coupons').style.display = 'none'
    document.getElementById('main-page').style.display = 'block'
    document.getElementById('settings-button').style.visibility = 'visible'
}