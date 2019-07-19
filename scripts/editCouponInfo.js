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
            "<tr><td> <input type='text' class='input input1' value ='" +couponData[i].CouponNumber +"'onchange='swapValue(this,"+i+")'"+"</td>" +
            "<td> <input type='text' name='redeemAccount' class='input input1' value='"+couponData[i].RedeemAmount +"'onchange='swapValue(this,"+i+")'"+"</td></tr>"
        )
        
    }

    accountInfo += "</table>"
    document.getElementById('editCoupon').innerHTML = accountInfo
}

function swapValue(tableElement, i){

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