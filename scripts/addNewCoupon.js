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


function enterInfo(){
    
}

function newCouponWindow(){
    document.getElementById('add-coupon').style.display = 'block'
    document.getElementById('edit-coupons').style.display = 'none'
    //addNewUser()
    //document.getElementById("save-plyr-button").disabled = true
}

function loadCouponTable(){
    document.getElementById('add-coupon').style.display = 'none'
    document.getElementById('edit-coupons').style.display = 'block'
}