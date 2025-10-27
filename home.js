// Reusable Function

function getInputValueNumber(id) {
  const inputValueNumber = parseInt(document.getElementById(id).value);
  return inputValueNumber;
}

function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

function getInputText(id) {
  const inputValueText = parseInt(document.getElementById(id).innerText);
  return inputValueText;
}

// Add Money Section Feature

document
  .getElementById('add-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const accountNumber = getInputValue('account-number');
    const amount = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');
    const availableBalance = getInputText('available-balance');

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

// Cash Out Section Feature

document
  .getElementById('cashOut-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const agentNumber = getInputValue('agent-number');
    const withdrawAmount = getInputValueNumber('withdraw-amount');
    const withdrawPin = getInputValueNumber('withdraw-pin');
    const availableBalance = getInputText('available-balance');

    if (agentNumber.length !== 11) {
      alert('Please Provide A Valid Number');
      return;
    }

    if (withdrawPin !== 1234) {
      alert('Please Provide A Valid Pin Number');
      return;
    }

    if (withdrawAmount > availableBalance) {
      alert('Not Enough Balance');
      return;
    }

    const totalNewAvailableBalance = availableBalance - withdrawAmount;

    document.getElementById('available-balance').innerText =
      totalNewAvailableBalance;
  });

// Transfer Money Section Feature

document
  .getElementById('transfer-money-btn')
  .addEventListener('click', function (e) {
    e.preventDefault();
    const transferAccountNumber = getInputValue('transfer-account-number');
    const transferAmount = getInputValueNumber('transfer-amount');
    const transferPin = getInputValueNumber('transfer-pin');
    const availableBalance = getInputText('available-balance');

    if (transferAccountNumber.length !== 11) {
      alert('Please Provide A Valid Number');
      return;
    }

    if (transferPin !== 1234) {
      alert('Please Provide A Valid Pin Number');
      return;
    }

    if (transferAmount > availableBalance) {
      alert('Not Enough Balance');
      return;
    }

    const totalNewAvailableBalance = availableBalance - transferAmount;

    document.getElementById('available-balance').innerText =
      totalNewAvailableBalance;
  });

// Add Money Button Event Handler

document.getElementById('addMoneyBtn').addEventListener('click', function () {
  document.getElementById('cashOutSection').style.display = 'none';
  document.getElementById('transferMoneySection').style.display = 'none';
  document.getElementById('getBonusSection').style.display = 'none';
  document.getElementById('payBillSection').style.display = 'none';
  document.getElementById('transactionsSection').style.display = 'none';

  document.getElementById('addMoneySection').style.display = 'block';
});

// Cash Out Button Event Handler

document.getElementById('cashOutBtn').addEventListener('click', function () {
  document.getElementById('addMoneySection').style.display = 'none';
  document.getElementById('transferMoneySection').style.display = 'none';
  document.getElementById('getBonusSection').style.display = 'none';
  document.getElementById('payBillSection').style.display = 'none';
  document.getElementById('transactionsSection').style.display = 'none';

  document.getElementById('cashOutSection').style.display = 'block';
});

// Transfer Money Button Event Handler

document
  .getElementById('transferMoneyBtn')
  .addEventListener('click', function () {
    document.getElementById('addMoneySection').style.display = 'none';
    document.getElementById('cashOutSection').style.display = 'none';
    document.getElementById('getBonusSection').style.display = 'none';
    document.getElementById('payBillSection').style.display = 'none';
    document.getElementById('transactionsSection').style.display = 'none';

    document.getElementById('transferMoneySection').style.display = 'block';
  });

// Get Bonus Button Event Handler

document.getElementById('getBonusBtn').addEventListener('click', function () {
  document.getElementById('addMoneySection').style.display = 'none';
  document.getElementById('cashOutSection').style.display = 'none';
  document.getElementById('transferMoneySection').style.display = 'none';
  document.getElementById('payBillSection').style.display = 'none';
  document.getElementById('transactionsSection').style.display = 'none';

  document.getElementById('getBonusSection').style.display = 'block';
});

// Pay Bill Button Event Handler

document.getElementById('payBillBtn').addEventListener('click', function () {
  document.getElementById('addMoneySection').style.display = 'none';
  document.getElementById('cashOutSection').style.display = 'none';
  document.getElementById('transferMoneySection').style.display = 'none';
  document.getElementById('getBonusSection').style.display = 'none';
  document.getElementById('transactionsSection').style.display = 'none';

  document.getElementById('payBillSection').style.display = 'block';
});

// Transactions Button Event Handler

document
  .getElementById('transactionsBtn')
  .addEventListener('click', function () {
    document.getElementById('addMoneySection').style.display = 'none';
    document.getElementById('cashOutSection').style.display = 'none';
    document.getElementById('transferMoneySection').style.display = 'none';
    document.getElementById('getBonusSection').style.display = 'none';
    document.getElementById('payBillSection').style.display = 'none';

    document.getElementById('transactionsSection').style.display = 'block';
  });

// Logout Button

document.getElementById('logOutButton').addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './index.html';
});
