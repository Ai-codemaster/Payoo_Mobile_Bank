// Login Button Functionality

document.getElementById('loginButton').addEventListener('click', function (e) {
  e.preventDefault();
  const mobileNumber = 8801324216902;
  const pinNumber = 5658;
  const mobileNumberValue = document.getElementById('mobileNumber').value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById('pinNumber').value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) {
    window.location.href="./home.html"
  }else{
    alert('Invalid Value')
  }
});
