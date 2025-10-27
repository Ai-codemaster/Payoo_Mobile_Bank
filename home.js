// Reusable Function

// Get Input Value ParseInt()

function getInputValueNumber(id) {
  const inputValueNumber = parseInt(document.getElementById(id).value);
  return inputValueNumber;
}

// Get Input Value

function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  return inputValue;
}

// Get InnerText ParseInt()

function getInputText(id) {
  const inputValueText = parseInt(document.getElementById(id).innerText);
  return inputValueText;
}

// Section Show Reusable Function

const sections = [
  'addMoneySection',
  'cashOutSection',
  'transferMoneySection',
  'getBonusSection',
  'payBillSection',
  'transactionsSection',
];

function showSection(sectionId) {
  for (const id of sections) {
    const section = document.getElementById(id);
    if (id === sectionId) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }
}

// Section Button BG Color Change Reusable Function

const sectionBtn = [
  'addMoneyBtn',
  'cashOutBtn',
  'transferMoneyBtn',
  'getBonusBtn',
  'payBillBtn',
  'transactionsBtn',
];

function showColorBtn(btnId) {
  for (const id of sectionBtn) {
    const sectionButton = document.getElementById(id);
    if (id === btnId){
      
    }
  }
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
  showSection('addMoneySection');
});

// Cash Out Button Event Handler

document.getElementById('cashOutBtn').addEventListener('click', function () {
  showSection('cashOutSection');
});

// Transfer Money Button Event Handler

document
  .getElementById('transferMoneyBtn')
  .addEventListener('click', function () {
    showSection('transferMoneySection');
  });

// Get Bonus Button Event Handler

document.getElementById('getBonusBtn').addEventListener('click', function () {
  showSection('getBonusSection');
});

// Pay Bill Button Event Handler

document.getElementById('payBillBtn').addEventListener('click', function () {
  showSection('payBillSection');
});

// Transactions Button Event Handler

document
  .getElementById('transactionsBtn')
  .addEventListener('click', function () {
    showSection('transactionsSection');
  });

// Logout Button

document.getElementById('logOutButton').addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = './index.html';
});
