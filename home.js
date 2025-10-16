document
  .getElementById('add-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);
    const availableBalance = parseInt(
      document.getElementById('available-balance').innerText
    );

    if (accountNumber.length !== 11) {
      alert('Please Provide A Valid Number');
      return;
    }

    if (pin !== 1234) {
      alert('Please Provide A Valid Pin Number');
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText =
      totalNewAvailableBalance;
  });

// Add Money Button Event Handler

document.getElementById('addMoneyBtn').addEventListener('click', function () {
  document.getElementById('cashOutSection').style.display = 'none';

  document.getElementById('addMoneySection').style.display = 'block';
});

// CashOut Button Event Handler

document.getElementById('cashOutBtn').addEventListener('click', function () {
  document.getElementById('addMoneySection').style.display = 'none';

  document.getElementById('cashOutSection').style.display = 'block';
});
