var couponData = db.get('coupons').value()


function updateCouponTable(){

}

function editCouponData(){
    updateCouponTable()
    document.getElementById('edit-coupons').style.display = 'block'
    document.getElementById('main-page').style.display = 'none'
    document.getElementById('settings-button').style.visibility = 'hidden'
    //document.getElementById('dataSaved').textContent = ""
  }


function loadMain(){
    updateCouponTable()
    document.getElementById('edit-coupons').style.display = 'none'
    document.getElementById('main-page').style.display = 'block'
    document.getElementById('settings-button').style.visibility = 'visible'
}