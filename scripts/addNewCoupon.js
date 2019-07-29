var couponData = db.get('coupons').value()
var newCoupon = {}
var couponFlags = {}

function addNewCoupon(){

    newCoupon = {
            "CouponNumber": "",
            "Balance": ""
    }

    couponFlags = {
        "CouponNumber": false,
        "Balance": false,
      }

}

function saveCouponForm(){

}


function enterCouponInfo(inputElement){
    
    if(inputElement.name === couponNumber){
        newCoupon.CouponNumber = inputElement.value
        couponFlags.CouponNumber = true
        checkCouponFlag()
    }
    else if(inputElement.name === Balance){
        newCoupon.Balance = inputElement.value
        couponFlags.Balance = true
        checkCouponFlag() 
    }
}

function checkCouponFlag(){
    
}

function newCouponWindow(){
    document.getElementById('add-coupon').style.display = 'block'
    document.getElementById('edit-coupons').style.display = 'none'
    addNewCoupon()
    document.getElementById("save-coupon-button").disabled = true
}

function loadCouponTable(){
    document.getElementById('add-coupon').style.display = 'none'
    document.getElementById('edit-coupons').style.display = 'block'
}