function showSIMDetails(selectObj) {
  var phoneNumber = document.getElementById('phone_number');
  var carrier = document.getElementById('carrier');
  if (selectObj.options[selectObj.selectedIndex].value == 1) {
    phoneNumber.style.display = 'block';
    carrier.value = 'Movistar';
  } else {
    phoneNumber.style.display = 'none';
  }
}

function showOtherCarrier(selectObj) {
  var otherCarrier = document.getElementById('other_carrier');
  if (selectObj.options[selectObj.selectedIndex].value == 'Other') {
    otherCarrier.style.display = 'block';
  } else {
    otherCarrier.style.display = 'none';
  }
}
